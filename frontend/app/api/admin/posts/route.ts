import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { blogPosts } from "../../../data/blog-posts";
import { reactNodeToHTML } from "../../../utils/react-to-html";

// Helper to count words
function countWords(str: string): number {
  return str.trim().split(/\s+/).filter((word) => word.length > 0).length;
}

const postsFilePath = path.join(
  process.cwd(),
  "app",
  "data",
  "user-posts.json"
);

let inMemoryUserPosts: any[] | null = null;

// ─── GitHub API helpers ────────────────────────────────────────────────────
const GITHUB_TOKEN  = process.env.GITHUB_TOKEN;
const GITHUB_OWNER  = process.env.GITHUB_OWNER;
const GITHUB_REPO   = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
// Path to the file inside the repo (relative to repo root)
const REPO_FILE_PATH = "frontend/app/data/user-posts.json";

const isGitHubConfigured = !!(GITHUB_TOKEN && GITHUB_OWNER && GITHUB_REPO);

/** Fetch posts from GitHub (production) */
async function readFromGitHub(): Promise<any[]> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${REPO_FILE_PATH}?ref=${GITHUB_BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GitHub read failed: ${res.status} ${res.statusText}`);
  const data = await res.json();
  // Content is base64-encoded
  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return { posts: JSON.parse(content), sha: data.sha } as any;
}

/** Commit updated posts to GitHub (production) */
async function writeToGitHub(posts: any[]): Promise<void> {
  // Get current SHA (needed for update)
  const { sha } = await readFromGitHub() as any;
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${REPO_FILE_PATH}`;
  const newContent = Buffer.from(JSON.stringify(posts, null, 2), "utf-8").toString("base64");
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "chore: update user-posts.json via admin",
      content: newContent,
      sha,
      branch: GITHUB_BRANCH,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GitHub write failed: ${res.status} – ${JSON.stringify(err)}`);
  }
}

// ─── Read / Write helpers ──────────────────────────────────────────────────

/** Read current user posts */
async function readUserPosts(): Promise<any[]> {
  if (inMemoryUserPosts !== null) return inMemoryUserPosts;

  try {
    if (isGitHubConfigured) {
      const { posts } = await readFromGitHub() as any;
      inMemoryUserPosts = posts;
      return posts;
    }
    const fileData = await fs.readFile(postsFilePath, "utf-8");
    const posts = JSON.parse(fileData);
    inMemoryUserPosts = posts;
    return posts;
  } catch (e) {
    return [];
  }
}

/** Write user posts – GitHub in production, local file in dev */
async function writeUserPosts(posts: any[]): Promise<void> {
  inMemoryUserPosts = posts;
  if (isGitHubConfigured) {
    await writeToGitHub(posts);
    return;
  }
  await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2), "utf-8");
}


// GET all posts (with static elements converted to clean HTML strings)
export async function GET() {
  try {
    const currentDynamicPosts = await readUserPosts();

    const deletedSlugs = new Set(
      currentDynamicPosts.filter((p: any) => p.isDeleted).map((p: any) => p.slug)
    );
    const activeUserPosts = currentDynamicPosts.filter((p: any) => !p.isDeleted);
    const userPostSlugs = new Set(activeUserPosts.map((p: any) => p.slug));

    // Filter static blogPosts (which are in blogPosts)
    const filteredStatic = blogPosts.filter(
      (p) => !deletedSlugs.has(p.slug) && !userPostSlugs.has(p.slug)
    );

    // Merge static and user posts
    const mergedPosts = [
      ...filteredStatic,
      ...activeUserPosts,
    ];

    const serializedPosts = mergedPosts.map((post) => ({
      ...post,
      content: typeof post.content === "string" ? post.content : reactNodeToHTML(post.content),
    }));

    return NextResponse.json({ success: true, posts: serializedPosts });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

// CREATE new post
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, description, content, author, color, image } = body;

    // Validate fields
    if (!title || !slug || !description || !content) {
      return NextResponse.json(
        { error: "Title, slug, description, and content are required." },
        { status: 400 }
      );
    }

    // Enforce 2000-word limit
    const words = countWords(content);
    if (words > 2000) {
      return NextResponse.json(
        { error: `Content exceeds the 2000-word limit. Word count: ${words}` },
        { status: 400 }
      );
    }

    const currentPosts = await readUserPosts();

    // Check for duplicate slugs
    const slugExists = currentPosts.some((post) => post.slug === slug && !post.isDeleted);
    if (slugExists) {
      return NextResponse.json(
        { error: "A post with this slug already exists. Please choose a unique title or edit the slug." },
        { status: 400 }
      );
    }

    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const newPost = {
      title,
      slug,
      date: formattedDate,
      author: author || "AstonishBuddy Team",
      description,
      content,
      color: color || "var(--accent-1)",
      image: image || "",
    };

    currentPosts.unshift(newPost);
    await writeUserPosts(currentPosts);
    // Reset in-memory cache so next read fetches fresh data
    inMemoryUserPosts = null;
    return NextResponse.json({ success: true, post: newPost });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to save blog post" },
      { status: 500 }
    );
  }
}

// UPDATE existing post (supports overriding static posts)
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, description, content, author, color, image, originalSlug } = body;

    if (!title || !slug || !description || !content || !originalSlug) {
      return NextResponse.json(
        { error: "Title, slug, description, content, and originalSlug are required." },
        { status: 400 }
      );
    }

    // Enforce 2000-word limit
    const words = countWords(content);
    if (words > 2000) {
      return NextResponse.json(
        { error: `Content exceeds the 2000-word limit. Word count: ${words}` },
        { status: 400 }
      );
    }

    const currentPosts = await readUserPosts();

    // Check duplicate slug only if slug changes
    if (slug !== originalSlug) {
      const slugExists = currentPosts.some((post) => post.slug === slug && !post.isDeleted);
      if (slugExists) {
        return NextResponse.json(
          { error: "The new slug is already in use. Please enter a unique slug." },
          { status: 400 }
        );
      }
    }

    // Find the post by originalSlug in user-posts.json
    const postIndex = currentPosts.findIndex((p) => p.slug === originalSlug);

    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    if (postIndex > -1) {
      // It exists in user-posts.json, update it
      currentPosts[postIndex] = {
        ...currentPosts[postIndex],
        title,
        slug,
        description,
        content,
        author: author || currentPosts[postIndex].author,
        color: color || currentPosts[postIndex].color,
        image: image !== undefined ? image : currentPosts[postIndex].image,
        date: currentPosts[postIndex].date || formattedDate,
      };
    } else {
      // It does not exist in user-posts.json (e.g., it is a static post being edited for the first time)
      // Append a new overriding entry to user-posts.json
      const newOverridingPost = {
        title,
        slug,
        date: formattedDate,
        author: author || "AstonishBuddy Team",
        description,
        content,
        color: color || "var(--accent-1)",
        image: image || "",
      };
      currentPosts.push(newOverridingPost);
    }

    await writeUserPosts(currentPosts);
    // Reset in-memory cache so next read fetches fresh data
    inMemoryUserPosts = null;
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to update blog post" },
      { status: 500 }
    );
  }
}

// DELETE post (soft deletes static and user posts)
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug parameter is required." }, { status: 400 });
    }

    const currentPosts = await readUserPosts();
    const postIndex = currentPosts.findIndex((p) => p.slug === slug);

    if (postIndex > -1) {
      // Mark it as deleted
      currentPosts[postIndex].isDeleted = true;
    } else {
      // It's a static post, append a soft delete entry
      currentPosts.push({
        slug,
        isDeleted: true,
        title: "[Deleted Static Post]",
        description: "",
        content: "",
      });
    }

    await writeUserPosts(currentPosts);
    // Reset in-memory cache so next read fetches fresh data
    inMemoryUserPosts = null;
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

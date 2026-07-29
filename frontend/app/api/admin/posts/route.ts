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

// Read current user posts helper
async function readUserPosts(): Promise<any[]> {
  try {
    const fileData = await fs.readFile(postsFilePath, "utf-8");
    return JSON.parse(fileData);
  } catch (e) {
    return [];
  }
}

// Write user posts helper
async function writeUserPosts(posts: any[]): Promise<void> {
  await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2), "utf-8");
}

// GET all posts (with static elements converted to clean HTML strings)
export async function GET() {
  try {
    const serializedPosts = blogPosts.map((post) => ({
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
    try {
      await writeUserPosts(currentPosts);
      return NextResponse.json({ success: true, post: newPost });
    } catch (writeErr: any) {
      console.warn("Local filesystem write failed for post creation:", writeErr.message);
      return NextResponse.json({
        success: true,
        readOnly: true,
        message: "Post created successfully in memory (read-only environment). Please update your user-posts.json file.",
        post: newPost,
        updatedPosts: currentPosts
      });
    }
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

    try {
      await writeUserPosts(currentPosts);
      return NextResponse.json({ success: true });
    } catch (writeErr: any) {
      console.warn("Local filesystem write failed for post update:", writeErr.message);
      return NextResponse.json({
        success: true,
        readOnly: true,
        message: "Post updated successfully in memory (read-only environment). Please update your user-posts.json file.",
        updatedPosts: currentPosts
      });
    }
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

    try {
      await writeUserPosts(currentPosts);
      return NextResponse.json({ success: true });
    } catch (writeErr: any) {
      console.warn("Local filesystem write failed for post deletion:", writeErr.message);
      return NextResponse.json({
        success: true,
        readOnly: true,
        message: "Post deleted successfully in memory (read-only environment). Please update your user-posts.json file.",
        updatedPosts: currentPosts
      });
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

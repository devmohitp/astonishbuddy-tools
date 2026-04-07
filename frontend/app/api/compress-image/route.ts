import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;
    const quality = Number(req.nextUrl.searchParams.get("quality")) || 80;

    if (!file) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Determine format
    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    let outputFormat = extension === 'png' ? 'png' : 'jpeg';
    
    let sharpInstance = sharp(buffer);
    
    if (outputFormat === 'png') {
        sharpInstance = sharpInstance.png({ quality, compressionLevel: 9 });
    } else {
        sharpInstance = sharpInstance.jpeg({ quality, mozjpeg: true });
    }

    const outputBuffer = await sharpInstance.toBuffer();

    const originalSize = buffer.length;
    const compressedSize = outputBuffer.length;

    const savingsPercent = (
      ((originalSize - compressedSize) / originalSize) *
      100
    ).toFixed(1);

    return NextResponse.json({
      success: true,
      originalSize,
      compressedSize,
      savingsPercent,
      imageBase64: outputBuffer.toString("base64"),
      outputFormat: outputFormat // Frontend expects this for download
    });
  } catch (err: any) {
    console.error("Compression error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to compress image" },
      { status: 500 }
    );
  }
}

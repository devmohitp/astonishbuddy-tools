import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      text,
      size = 300,
      errorCorrectionLevel = "M",
      darkColor = "#000000",
      lightColor = "#FFFFFF",
    } = body;

    if (!text) {
      return NextResponse.json({ error: "Text required" }, { status: 400 });
    }

    const qr = await QRCode.toDataURL(text, {
      width: size,
      color: { dark: darkColor, light: lightColor },
      errorCorrectionLevel,
    });

    return NextResponse.json({ success: true, qrCode: qr });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

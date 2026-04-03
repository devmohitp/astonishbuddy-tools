const express = require('express');
const cors = require('cors');
const multer = require('multer');
const sharp = require('sharp');
const QRCode = require('qrcode');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

// Image Compression Endpoint
app.post('/api/compress-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const quality = parseInt(req.query.quality) || 80;
    const inputBuffer = req.file.buffer;
    const mimeType = req.file.mimetype;

    let outputBuffer;
    let outputFormat;

    if (mimeType === 'image/jpeg' || mimeType === 'image/jpg') {
      outputBuffer = await sharp(inputBuffer).jpeg({ quality }).toBuffer();
      outputFormat = 'jpeg';
    } else if (mimeType === 'image/png') {
      outputBuffer = await sharp(inputBuffer).png({ quality }).toBuffer();
      outputFormat = 'png';
    } else if (mimeType === 'image/webp') {
      outputBuffer = await sharp(inputBuffer).webp({ quality }).toBuffer();
      outputFormat = 'webp';
    } else {
      outputBuffer = await sharp(inputBuffer).jpeg({ quality }).toBuffer();
      outputFormat = 'jpeg';
    }

    const originalSize = req.file.size;
    const compressedSize = outputBuffer.length;
    const savingsPercent = (((originalSize - compressedSize) / originalSize) * 100).toFixed(1);

    res.json({
      success: true,
      originalSize,
      compressedSize,
      savingsPercent,
      outputFormat,
      imageBase64: outputBuffer.toString('base64'),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Image compression failed' });
  }
});

// QR Code Generation Endpoint
app.post('/api/generate-qr', async (req, res) => {
  try {
    const { text, size = 300, errorCorrectionLevel = 'M', darkColor = '#000000', lightColor = '#FFFFFF' } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });

    const qrOptions = {
      errorCorrectionLevel,
      type: 'image/png',
      width: size,
      color: { dark: darkColor, light: lightColor },
    };

    const qrDataUrl = await QRCode.toDataURL(text, qrOptions);
    res.json({ success: true, qrCode: qrDataUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'QR code generation failed' });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Free Tools API is running' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

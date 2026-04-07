import fs from 'node:fs';
import path from 'node:path';

async function testCompressImage() {
    const filePath = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\e938c9fa-780a-4d2b-9b7e-b18318060b21\\test_image_for_compression_1775551453282.png';
    const stats = fs.statSync(filePath);
    const buffer = fs.readFileSync(filePath);
    
    const formData = new FormData();
    const blob = new Blob([buffer], { type: 'image/png' });
    formData.append('image', blob, 'test.png');
    
    console.log('Testing Image Compression API...');
    try {
        const res = await fetch('http://localhost:3000/api/compress-image?quality=50', {
            method: 'POST',
            body: formData
        });
        
        const data = await res.json();
        if (data.success) {
            console.log('✅ Success!');
            console.log('Original Size:', data.originalSize);
            console.log('Compressed Size:', data.compressedSize);
            console.log('Savings:', data.savingsPercent + '%');
            console.log('Output Format:', data.outputFormat);
        } else {
            console.error('❌ Failed:', data.error);
        }
    } catch (err) {
        console.error('❌ Error calling API:', err.message);
    }
}

async function testGenerateQR() {
    console.log('\nTesting QR Generation API...');
    try {
        const res = await fetch('http://localhost:3000/api/generate-qr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: 'Hello API' })
        });
        
        const data = await res.json();
        if (data.success) {
            console.log('✅ Success!');
            console.log('QR Code Length:', data.qrCode.length);
        } else {
            console.error('❌ Failed:', data.error);
        }
    } catch (err) {
        console.error('❌ Error calling API:', err.message);
    }
}

async function runTests() {
    await testGenerateQR();
    await testCompressImage();
}

runTests();

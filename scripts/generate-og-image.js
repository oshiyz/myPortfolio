const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Create gradient background
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#0a0a23');
gradient.addColorStop(1, '#232336');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// Add some geometric elements for visual interest
ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
ctx.beginPath();
ctx.arc(width * 0.8, height * 0.2, 150, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
ctx.beginPath();
ctx.arc(width * 0.2, height * 0.8, 100, 0, Math.PI * 2);
ctx.fill();

// Add main text
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 72px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Main name
ctx.fillText('Oshadha Dahanayaka', width / 2, height / 2 - 60);

// Title
ctx.fillStyle = '#60a5fa';
ctx.font = 'bold 48px Arial, sans-serif';
ctx.fillText('Full Stack Developer', width / 2, height / 2 + 20);

// Subtitle
ctx.fillStyle = '#cbd5e1';
ctx.font = '32px Arial, sans-serif';
ctx.fillText('React • Node.js • Spring Boot • TypeScript', width / 2, height / 2 + 80);

// URL
ctx.fillStyle = '#64748b';
ctx.font = '24px Arial, sans-serif';
ctx.fillText('oshadhadahanayaka.vercel.app', width / 2, height - 60);

// Save the image
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

// Ensure public directory exists
const publicDir = path.dirname(outputPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(outputPath, buffer);
console.log('Open Graph image generated successfully at:', outputPath); 
// Simple script to create placeholder images using data URLs
import fs from 'fs';
// Create a simple SVG placeholder
const createPlaceholder = (width, height, text)=>{
    return `data:image/svg+xml;base64,${Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#666" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `).toString('base64')}`;
};
// Create placeholder constants
const placeholders = {
    businessProfileImage: createPlaceholder(800, 600, 'Business Profile'),
    emailVerificationImage: createPlaceholder(800, 600, 'Email Verification'),
    registrationCompletedImage: createPlaceholder(800, 600, 'Registration Complete'),
    cfsServiceProviderImage: createPlaceholder(800, 600, 'CFS Service Provider'),
    requestPricingImage: createPlaceholder(800, 600, 'Request Pricing'),
    imgScreenshot20250726At110136Am1: createPlaceholder(1200, 800, 'Search Page Screenshot'),
    imgScreenshot20250726At125347Pm1: createPlaceholder(1200, 800, 'Sign In Page Screenshot'),
    imgScreenshot20250726At112122Am1: createPlaceholder(1200, 800, 'Website Page Screenshot')
};
// Write placeholders to a file
const content = `// Auto-generated placeholder images
${Object.entries(placeholders).map(([key, value])=>`export const ${key} = "${value}";`).join('\n')}

export default {
  ${Object.keys(placeholders).join(',\n  ')}
};
`;
fs.writeFileSync('placeholders.ts', content);
console.log('Placeholders created successfully!');

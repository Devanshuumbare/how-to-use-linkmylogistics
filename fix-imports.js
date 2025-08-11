import fs from 'fs';
import path from 'path';

// Function to recursively find all .tsx and .ts files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix imports in a file
function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Remove version numbers from imports
  const versionRegex = /@([^@]+)@[\d.]+/g;
  const newContent = content.replace(versionRegex, '@$1');
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed imports in: ${filePath}`);
    modified = true;
  }
  
  return modified;
}

// Main execution
const componentsDir = './components';
const files = findFiles(componentsDir);

let totalFixed = 0;
files.forEach(file => {
  if (fixImports(file)) {
    totalFixed++;
  }
});

console.log(`Fixed imports in ${totalFixed} files.`);

const fs = require('fs');
const path = require('path');

// Create necessary directories if they don't exist
const dirs = [
  'css/base',
  'css/components',
  'css/layout',
  'css/themes',
  'css/utilities'
];

dirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Move files to their new locations
const filesToMove = [
  { 
    source: 'css/utilities.css',
    destination: 'css/utilities/_index.css'
  },
  { 
    source: 'css/components.css',
    destination: 'css/components/_index.css'
  },
  { 
    source: 'css/layout/_footer.css',
    destination: 'css/layout/_footer.css'
  },
  { 
    source: 'css/components/_cards.css',
    destination: 'css/components/_cards.css'
  },
  { 
    source: 'css/variables.css',
    destination: 'css/_variables.css'
  },
  { 
    source: 'css/style.css.new',
    destination: 'css/style.css'
  }
];

filesToMove.forEach(({ source, destination }) => {
  const sourcePath = path.join(__dirname, source);
  const destPath = path.join(__dirname, destination);
  
  if (fs.existsSync(sourcePath)) {
    fs.renameSync(sourcePath, destPath);
    console.log(`Moved ${source} to ${destination}`);
  }
});

// Create empty files for missing components
const emptyFiles = [
  'css/components/_buttons.css',
  'css/components/_navbar.css',
  'css/components/_alerts.css',
  'css/components/_modals.css',
  'css/components/_tabs.css',
  'css/components/_tooltips.css',
  'css/layout/_header.css',
  'css/layout/_grid.css',
  'css/layout/_sections.css',
  'css/themes/_dark.css',
  'css/themes/_print.css',
  'css/utilities/_helpers.css'
];

emptyFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '/* ' + path.basename(file, '.css') + ' */\n');
    console.log(`Created empty file: ${file}`);
  }
});

console.log('CSS structure has been reorganized successfully!');
console.log('Make sure to update your HTML files to reference the new CSS files.');

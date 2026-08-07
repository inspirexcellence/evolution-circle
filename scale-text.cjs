const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src', 'sections');

// Mapping of old size to new size to ensure legible text
const scaleMap = {
  // Ultra tiny -> Small but legible
  '7.5': '11',
  '8': '12',
  '8.5': '13',
  '9': '14',
  '9.5': '14',
  '10': '15',
  
  // Tiny -> Standard body
  '11': '16',
  '12': '18',
  '13': '20',
  
  // Small -> Large body / Subheader
  '14': '22',
  '15': '24',
  '16': '26',
  '17': '28',
  
  // Headers
  '18': '30',
  '19': '32',
  '20': '34',
  '22': '36',
  '24': '40',
  '26': '42',
  '28': '46',
  
  // Huge
  '30': '48',
  '32': '52',
  '34': '56',
  '36': '60',
  '42': '68',
  '48': '76',
  '52': '84',
  '54': '88',
  '64': '96',
  '74': '110',
  '76': '114',
  '82': '120'
};

function scaleText(match, size) {
  if (scaleMap[size]) {
    return `text-[${scaleMap[size]}px]`;
  }
  
  // Fallback scale if not in map: multiply by 1.4
  const num = parseFloat(size);
  const scaled = Math.round(num * 1.4);
  return `text-[${scaled}px]`;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to match text-[Xpx] or text-[X.Ypx]
  const regex = /text-\[(\d+(?:\.\d+)?)px\]/g;
  
  const newContent = content.replace(regex, scaleText);
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${path.basename(filePath)}`);
  }
}

function main() {
  const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));
  for (const file of files) {
    processFile(path.join(sectionsDir, file));
  }
}

main();

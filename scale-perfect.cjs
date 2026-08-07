const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src', 'sections');

// Mapping from the currently oversized text to the "perfect" intermediate size.
const perfectMap = {
  '11': '8.5',
  '12': '9',
  '13': '10',
  '14': '11',
  '15': '12',
  '16': '13',
  '18': '14',
  '20': '15',
  '22': '16',
  '24': '18',
  '26': '19',
  '28': '20',
  '30': '22',
  '32': '23',
  '34': '24',
  '36': '26',
  '40': '28',
  '42': '30',
  '46': '32',
  '48': '34',
  '52': '38',
  '56': '40',
  '60': '44',
  '68': '50',
  '76': '56',
  '84': '64',
  '88': '66',
  '96': '74',
  '110': '86',
  '114': '88',
  '120': '94'
};

function scaleText(match, size) {
  if (perfectMap[size]) {
    return `text-[${perfectMap[size]}px]`;
  }
  // If we don't find it, don't change it to avoid breaking other things
  return match;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /text-\[(\d+(?:\.\d+)?)px\]/g;
  
  const newContent = content.replace(regex, scaleText);
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Perfected: ${path.basename(filePath)}`);
  }
}

function main() {
  const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));
  for (const file of files) {
    processFile(path.join(sectionsDir, file));
  }
}

main();

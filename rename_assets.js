const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets');
const files = fs.readdirSync(dir);
const mapping = {};

for (const file of files) {
  if (file.includes('.')) continue; // skip already renamed files or files with extension
  const filePath = path.join(dir, file);
  const buffer = Buffer.alloc(100);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, 100, 0);
  fs.closeSync(fd);

  const hex = buffer.toString('hex', 0, 12);
  let ext = '.jpg';
  
  if (hex.startsWith('89504e47')) ext = '.png';
  else if (hex.startsWith('47494638')) ext = '.gif';
  else if (hex.includes('57454250')) ext = '.webp'; 
  else if (hex.startsWith('3c3f786d') || hex.startsWith('3c737667') || buffer.toString('utf8').includes('<svg')) ext = '.svg';
  else if (hex.startsWith('ffd8')) ext = '.jpg';
  else ext = '.jpg';

  const newFile = file + ext;
  fs.renameSync(filePath, path.join(dir, newFile));
  mapping[file] = newFile;
}

fs.writeFileSync(path.join(__dirname, 'src', 'lib', 'assetMapping.json'), JSON.stringify(mapping, null, 2));
console.log('Done!');

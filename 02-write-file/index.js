const fs = require('fs');
const path = require('path');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let pathName = path.join(__dirname, 'text.txt');

fs.appendFile(pathName, 'r+', (err) => {
  if (err) throw err;
  // console.log('Введите текст');
});

readline.question('Введите текст', text => {
  fs.writeFile(pathName, text);
  readline.close();
});
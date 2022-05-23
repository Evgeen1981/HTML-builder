const fs = require('fs');
const path = require('path');
const process = require('node:process');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let pathName = path.join(__dirname, 'text.txt');

fs.open(pathName, 'wx', (err) => {
  if (err) throw err;
  // console.log('Введите текст');
});

readline.question('Введите текст', text => {
  console.log(text);
  fs.appendFile(pathName, text, (error) => {
    if (error) throw error;
  });
  // readline.close();
});



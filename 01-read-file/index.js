const fs = require('fs');
const path = require('path');
let pathName = path.join(__dirname, 'text.txt');

let file = fs.createReadStream(pathName, 'utf8');

file.on('data', function (chunk) {
  console.log(chunk);
});


const fs = require('fs');

const text = fs.readFileSync('first_script.js', 'utf8');
console.log(text);
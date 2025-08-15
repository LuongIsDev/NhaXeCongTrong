const fs = require('fs');
const path = require('path');

const dist = path.resolve(__dirname, 'dist');
const indexFile = path.join(dist, 'index.html');
const errorFile = path.join(dist, '404.html');

fs.copyFileSync(indexFile, errorFile);
console.log('404.html created successfully!');

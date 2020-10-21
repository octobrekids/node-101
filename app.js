const http = require('http');

// file system module
const fs = require('fs');

// readable stream
const myReadStream = fs.createReadStream('readme.txt', 'utf8');
const myWriteStream = fs.createWriteStream('writeme.txt');

// no need to listen on event 'data' and handle chuck by yourself
myReadStream.pipe(myWriteStream);



const http = require('http');

// file system module
const fs = require('fs');

// // readable stream
// const myReadStream = fs.createReadStream('readme.txt', 'utf8');
// const myWriteStream = fs.createWriteStream('writeme.txt');

// // listen on 'data' event
// myReadStream.on('data', (chunk) => {
//     console.log('new chunk received: ');
//     console.log(chunk);
//     myWriteStream.write(chunk);
// })


// sync
// const data = fs.readFileSync('text.txt', 'utf8');
// fs.writeFileSync('write.txt', data);


// async 
fs.readFile('text.txt', 'utf8', (err,data) => {
    fs.writeFile('writeFile.txt', data, (err,result) => {
        if(err) console.log(err)
    });
});
console.log('test');


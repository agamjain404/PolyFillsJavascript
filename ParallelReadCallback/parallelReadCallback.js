const fs = require('fs');

// Parallely reading two files using callbacks
fs.readFile('f1.txt', (err, data) => {
    console.log(data.toString());
})

fs.readFile('f2.txt', (err, data) => {
    console.log(data.toString());
})
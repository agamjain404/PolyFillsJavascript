const fs = require('fs');

// Serially reading two files using callbacks
fs.readFile('f1.txt', (err, data) => {
    // Converting to string as readFile will return data in buffer
    console.log(data.toString());
    fs.readFile('f2.txt', (err, data) => {
        console.log(data.toString());
    })
})
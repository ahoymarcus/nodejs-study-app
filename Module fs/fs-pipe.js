var fs = require('fs');


var readable = fs.createReadStream('./public/working.txt');

var writable = fs.createWriteStream('./public/working2.txt');

readable.pipe(writable);





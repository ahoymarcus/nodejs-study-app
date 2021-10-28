const zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();



var inputStream = fs.createReadStream('input.txt');
var outputStream = fs.createWriteStream('input.txt.gz');


inputStream.pipe(gzip).pipe(outputStream);

   


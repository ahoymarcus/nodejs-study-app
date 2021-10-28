var zlib = require('zlib');
var fs = require('fs');


var gzip = zlib.createGzip();


var inputStream = fs.createReadStream('../public/images/test.png');
var outputStream = fs.createWriteStream('../public/images/test.png.gz');


inputStream.pipe(gzip).pipe(outputStream);







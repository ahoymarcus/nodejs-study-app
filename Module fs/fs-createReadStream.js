var fs = require('fs');


var readable = fs.createReadStream('./public/working.txt').setEncoding('utf-8');

var data = '';
readable.on('data', (chunk) => data += chunk );

readable.on('end', () => console.log(data) );




var zlib = require('zlib');
var program = require('commander');
var fs =require('fs');


program
	.version('0.0.1')
	.option('-s, --source [file name]', 'Source File Name')
	.option('-f, --file [file name]', 'Destination File Name')
	.option('-t, --type <mode>', /^(gzip|deflate)$/i)
	.parse(process.argv);
	

var compress;
if (program.type == 'deflate') {
	compress = zlib.createDeflate();
} else {
	compress = zlib.createDeflate();
}


var inputStream = fs.createReadStream(program.source);
var outputStream = fs.createWriteStream(program.tile);

inputStream.pipe(compress).pipe(outputStream);










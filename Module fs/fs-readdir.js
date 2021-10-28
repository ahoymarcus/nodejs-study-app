'use stric';

var fs = require('fs');
var path = require('path');


fs.readdir('./public', (err, files) => {
	for (let file of files) {
		console.log(file);
		
		if (path.extname(file) == 'gz') {
			fs.unlink('./public' + file);
		}
	}
});







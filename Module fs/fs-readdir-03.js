'use strict';

var fs = require('fs');
var path = require('path');


fs.readdir('./public', (err, files) => {
	for (let file of files) {
		
		fs.lstat(file, (err, stats) => {
			if (err) return console.log(err);
			
			if (stats.isDirectory()) {
				let directory = file;
				console.log('directory ' + file);
			} else {
				let ext = path.extname(file);
		
				// Devolver apenas base sem ext
				let base = path.basename(file, ext);
				
				console.log('file ' + base + ' with extension of ' + ext);
			}
		});
	
	}
});







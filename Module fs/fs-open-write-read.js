'use strict';

var fs = require('fs');


fs.open('./public/new.txt', 'a+', 0x666, (err, fd) => {
	if (err) return console.error(err);
	
	fs.write(fd, 'Frist line', 'utf-8', (err, written, str) => {
		if (err) return console.error(err);
		
		var buf = new Buffer(written);
		
		fs.read(fd, buf, 0, written, 0, (err, bytes, buffer) => {
			if (err) return console.error(err);
			
			console.log(buf.toString('utf-8'));
		});
	});
});












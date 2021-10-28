var fs = require('fs');


fs.writeFile('./public/some.txt', 'Writing to a file', (err) => {
	if (err) return console.log(err);
	
	fs.readFile('./some.txt', 'utf-8', (data, err) => {
		if (err) return console.log(err);
		
		console.log(data);
	});
});






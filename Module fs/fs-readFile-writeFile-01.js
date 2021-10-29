var fs = require('fs');


fs.readFile('./public/apples.txt', 'utf8', (err, data) => {
	
	if (err) {
		console.error(err.stack);
	} else {
		var adjData = data.replace(/apple/g, 'orange');
		
		fs.writeFile('./public/oranges.txt', adjData, (err) => {
			if (err) console.error(err);
		});
	}
});







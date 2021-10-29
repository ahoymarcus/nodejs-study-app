const {promises: {readFile, writeFile}} = require("fs");


readFile('./public/lemons.txt')
	.then((fileBuffer) => {
		var adjData = fileBuffer.toString().replace(/lemon/g, 'banana');
		
		return writeFile('./public/bananas.txt', adjData);
	})
	.catch((error) => {
		console.log(error);
	});
		
		







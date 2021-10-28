var fs = require('fs');
var util = require('util');


fs.stat('./public/images/phoenix5a.png', (err, stats) => {
	if (err) return console.log(err);
	
	console.log(util.inspect(stats));
});



 



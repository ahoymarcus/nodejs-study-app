const http = require('http');


const server = http.createServer().listen(3000);




server.on('request', function(req, res) {
	//console.log(req.headers);
	console.log(req.rawHeaders);
	// console.log(req.rawTrailers);
	
	// console.log(req.headers.host);
	// console.log(req.rawHeaders[0] + ' is ' + req.rawHeaders[1]);
	
	
	res.writeHead(200, { 'Content-Type': 'text/plain' } );
	
	res.end('Hello Node-JS Http');
});


console.log('Server is listening at localhost:3000');






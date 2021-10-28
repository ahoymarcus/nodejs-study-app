const http = require('http');
const querystring = require('querystring');


const server = http.createServer().listen(8124);

server.on('request', (req, res) => {
	
	if (req.method === 'POST') {
		let body = '';
		
		req.on('data', data => { body += data; });
		
		req.on('end', () => {
			let post = querystring.parse(body);
			console.log(post);
			
			res.writeHead(200, { 'Content-Type': 'text/plain' } );
			res.end('Hello Node-JS Http');
		});
	}
	
	
});


console.log('Server running at port 8124');










const http = require('http');
const fs = require('fs');



const base = 'C:/Users/Marcus/Documents/Marcus/Programacao/Cursos e Testes/Estudos em casa/javascript/Node/Aprendendo Node - Powers Shelley/learning-nodejs-app/views';


http.createServer((req, res) => {
	pathname = base + req.url;
	console.log(pathname);
	
	fs.stat(pathname, (err, stats) => {
		
		if (err) {
			console.log(err);
			res.writeHead(404);
			res.write('Resource missing - 404\n');
			res.end();
		} else {
			res.setHeader('Content-Type', 'text/plain');
			
			let file = fs.createReadStream(pathname);
			
			file.on('open', () => {
				res.statusCode = 200;
				
				file.pipe(res);
			});
			
			file.on('error', (err) => {
				console.log(err);
				res.writeHead = 403;
				res.write('File missing or permissin problem');
				
				res.end();
			});
		} 
	});
		
}).listen(8124);



console.log('Server is running at 8124');





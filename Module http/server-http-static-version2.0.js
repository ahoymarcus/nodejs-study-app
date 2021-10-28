const http = require('http');
const fs = require('fs');
const url = require('url');
const mime = require('mime');
const path = require('path');



const base = 'C:/Users/Marcus/Documents/Marcus/Programacao/Cursos e Testes/Estudos em casa/javascript/Node/Aprendendo Node - Powers Shelley/learning-nodejs-app/views';


http.createServer((req, res) => {
	pathname = base + req.url;
	//pathname = __dirname + req.url;
	console.log('path: ' + pathname);
	
	fs.stat(pathname, (err, stats) => {
		
		if (err) {
			console.log(err);
			res.writeHead(404);
			res.write('Resource missing - 404\n');
			res.end();
		} else if (stats.isFile()) {
			// Tipo de conteúdo
			let type = mime.getType(pathname);
			console.log('Content-Type: ' + type);
			
			// 'text/plain'
			res.setHeader('Content-Type', type);
			
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
		} else {
			res.writeHead(4003);
			res.write('Directory access is forbidden');
			
			res.end();
		}
	});
		
}).listen(8124);



console.log('Server is running at 8124');





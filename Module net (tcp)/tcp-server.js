var net = require('net');


const PORT = 8124;

// DEFAULT VALUES
// var options = {
	// allowHalfOpen: false,
	// pauseInConnect: false
// };


var server = net.createServer((conn) => {
	console.log('\nConnected...');
	
	conn.on('data', (data) => {
		console.log(data + ' from ' + conn.remoteAddress + '' + conn.remotePort);
		
		conn.write('Repeting: ' + data);
		
		conn.on('close', () => {
			console.log('Client closed connection...');
		});
	});
}).listen(PORT);


server.on('listening', () => {
	console.log('Listening on ' + PORT);
});


server.on('error', (err) => {
	if (err.code == 'EADDRINNUSE') {
		console.warn('Address in use, retrying...');
		
		setTimeout(() => {
			server.close();
			server.listen(PORT);
		}, 1000);
	} else {
		console.error(err);
	}
});










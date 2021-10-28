var dgram = require('dgram');


var client = dgram.createSocket('udp4');

process.stdin.on('data', (data) => {
	console.log('Client data: ', data.toString());
	
	client.send(data, 0, data.length, 8124, 'localhost', (err, bytes) => {
		if (err) return cosole.log('Error: ', err);
		
		console.log('Successful.....');
	});
});
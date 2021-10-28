var net = require('net');


var client = new net.Socket();
client.setEncoding('utf8');


client.connect('8124', 'localhost', () => {
	console.log('Connected to server...');
	
	client.write('Who needs a browser to communicate?');
});

// Passar dados da entrada para o servidor
process.stdin.on('data', (data) => {
	client.write(data);
});

// Escrever no console dados recebidos do servidor
client.on('data', (data) => {
	console.log(data);
});


// Quando o servidor fecha a conexão
client.on('close', () => {
	console.log('Connection is closed.....');
});





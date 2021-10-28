const http = require('http');
const querystring = require('querystring');


const postData = querystring.stringify({
	'msg': 'Hello Node-JS Http...'
});

const options = {
	hostname: 'localhost',
	port: 8124,
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-forrm-urlencoded',
		'Content-Length': postData.length
	}
};


let req = http.request(options, (res) => {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	
	res.on('data', (chunk) => { console.log('BODY: ' + chunk); });
	
	res.on('end', () => { console.log('No more data response!'); });
	
});


req.on('error', (e) => { 
	console.log('Problem with the request: ' + e.message)
});
	
req.write(postData);
req.end();












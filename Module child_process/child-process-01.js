var spawn = require('child_process').spawn;


var pwd = spawn('echo', ['%cd%'], { shell: true } );

pwd.stdout.on('data', (data) => {
	console.log('stdout: ' + data);
});


pwd.stderr.on('data', (data) => {
	console.log('stderr: ' + data);
});


pwd.on('close', (code) => {
	console.log('child process exited with code ' + code);
});





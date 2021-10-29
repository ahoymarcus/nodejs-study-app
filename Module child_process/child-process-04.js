var execfile = require('child_process').execFile;


var child;

child = execfile('my.bat', (error, stdout, stderr) => {
	if (error == null) console.log('sdtout: ' + stdout)
});



var fs = require('fs');
var Mode = require('stat-mode');


fs.stat('./public/images/phoenix5a.png', (err, stats) => {
	if (err) return console.log(err);
	
	// Obter permissões
	var mode = new Mode(stats);
	
	console.log(mode.toString());
	console.log('Group execute ' + mode.group.execute);
	console.log('Others write ' + mode.others.write);
	console.log('Owner read ' + mode.owner.read);
});















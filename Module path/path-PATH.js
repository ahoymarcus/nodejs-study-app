var path = require('path');


console.log("\n\t###Here, the process.env.PATH as a Windows String -- in Linux the delimiter would be ':' ###\n\n");
console.log(process.env.PATH);

console.log('\nNow, the same process.env.PATH splitted.....');
console.log(process.env.PATH.split(path.delimiter));




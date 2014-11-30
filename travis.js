#!/usr/bin/env node
var cp = require('child_process');
var bickle = 'bickle builds stpettersens/genericFunctions-for-node -n 5';
cp.exec(bickle, function(err, stdout, stderr) {
	console.log(stdout);
});


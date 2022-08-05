var oApp = {};

require('shelljs/global');
oApp.fs = require('fs');
oApp.useful = require('../lib/useful.js');

oApp.start = () => {
	console.log('\nStart\n');
	exec('npm start');
}

oApp.server = () => {
	console.log('\nServer\n');
	exec('npm run server');
}

oApp.launch = () => {
	console.log('\nLaunch\n');
	exec('npm run launch');
}

oApp.install = () => {
	console.log('\nInstalling onep-ag.\n');
	exec('install-here onep-ag');
	console.log('\nInstalling dependencies.\n');
	exec('npm i');
}

oApp.update = () => {
	console.log('\nUpdate onep-ag.\n');
	exec('install-here onep-ag');
	console.log('\nUpdate dependencies.\n');
	exec('npm update');
}

exports.start = oApp.start;
exports.server = oApp.server;
exports.launch = oApp.launch;
exports.install = oApp.install;
exports.update = oApp.update;
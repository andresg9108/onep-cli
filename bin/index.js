#!/usr/bin/env node

try{
	var oManypCli = require('../lib/index.js');

	const aArgs = process.argv.splice(process.execArgv.length + 2);
	const sCommand = aArgs[0];

	switch (sCommand) {
		case 'i':
			oManypCli.install();
			break;
		case 'install':
			oManypCli.install();
			break;
		case 'u':
			oManypCli.update();
			break;
		case 'update':
			oManypCli.update();
			break;
		case 's':
			oManypCli.start();
			break;
		case 'start':
			oManypCli.start();
			break;
		case 'sv':
			oManypCli.server();
			break;
		case 'server':
			oManypCli.server();
			break;
		case 'l':
			oManypCli.launch();
			break;
		case 'launch':
			oManypCli.launch();
			break;
		case '-h':
			oManypCli.help();
			break;
		case 'help':
			oManypCli.help();
			break;
		case '-v':
			oManypCli.version();
			break;
		case 'version':
			oManypCli.version();
			break;
		default:
			throw(`The instruction "${sCommand}" is not recognized. Run "manyp-cli help" to get help.`);
			break;
	}
}catch(e){
	console.log(` Error:\n ${e}`);
}

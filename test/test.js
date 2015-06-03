var net = require('net');
var inquirer = require('inquirer');

var key = '5429193be8363dcc24824204326f9612';
var handshook = false;

var ui = new inquirer.ui.BottomBar();

function askForInput() {
	inquirer.prompt([{
		name: 'cmd',
		message: '>',
	}], function (answers) {
		var cmd = answers.cmd;
		client.write('<c>' + cmd + '\r\n');
		setTimeout(askForInput, 30);
	});
}

var client = new net.Socket();
client.connect(11024, 'storm.dr.game.play.net', function () {
	console.log('connecting...');
	client.write('<c>' + key + '\r\n');
	client.write('<c>/FE:WebFE /VERSION:0.2015.6.3 /P:WIN_XP  /XML\r\n');
	client.write('\r\n');
	client.write('\r\n');
});

client.on('data', function (data) {
	data = data.toString();
	if (!handshook && data.slice(0, 9) === '<playerID') {
		handshook = true;
		client.write('<c>\r\n');
		client.write('<c>\r\n');
		askForInput();
	} else if (handshook) {
		ui.log.write(data);
	}
});

client.on('close', function () {
	console.log('closed');
});
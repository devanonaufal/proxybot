const request = require('request');
const Agent = require('socks5-http-client/lib/Agent');
var token = "OTAxOTI5NzU0NzU0NzA3NTM3.YXXBig.9SrWq3fFYQ9hO-GgDDfC7Apfwb8"

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('ProxyGen : ON');
});





client.on('message', message => {
	if(message.content.includes("$proxy")) {
    request.get({
      uri: 'https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=200',
  }, function (err, resp, body) {
    message.channel.send(body)
    });
  }
});



client.login(token);

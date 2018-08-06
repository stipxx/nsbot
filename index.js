const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!');

client.user.setActivity('Name Snipes Discord <3. Prefix: |', { type: 'WATCHING' });
client.user.setStatus('online'); // dnd, idle, online, invisible
});

client.on('message', message => {
    console.log(message.content);
});
// Commands
client.on('message', message => {
	if (message.content === `${prefix}Server Owner`) {
		message.channel.send('Finding Owner..'); return message.channel.send ('The Owner of this discord server is thai#0632.');
   }
	else if (message.content === `${prefix}start`) {
	 message.channel.send ('Here are the commands that are working as of now: |Server Owner |help |server |features |commands')
	 }
	else if (message.content === `${prefix}help`) {
		message.channel.send('Loading...'); return message.channel.send('WIP command, issues i guess');
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
	else if (message.content === `${prefix}features`) {
		message.channel.send(`This bot is a WIP. This bot will have member joins, tracking within the discord, and other things. This bot is for Name Snipes Only.`);
  }
	else if (message.content === `${prefix}commands`) {
		message.channel.send('You can get a list of commands here: https://docs.google.com/document/d/12SGYrNQFjLbi4J2383D4ryTmfgj3kAxEX7EgfH6Kug4/edit?usp=sharing. This is only for the time being, a guild will likely be made soon.');
  }
});
client.login(token);

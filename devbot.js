const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot online! Nome: ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
    const canal = member.guild.channels.cache.find(ch => ch.name === 'general');
    const mensagem = `Bem-vindo ao servidor, ${member}! Esperamos que você aproveite sua estadia aqui.`;
    canal.send(mensagem);
});

client.login('token');
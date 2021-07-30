const Discord = require('discord.js');

const bot = new Discord.Client();


const botsettings = require('./botsettings.json');

const {MessageEmbed, discord} = require("discord.js")

const prefix = 'w! ';

const fs = require('fs');
const { notDeepEqual } = require('assert');


bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command)
}



const activities_list = [
    "Prefix w!",
    "something ",
    "w! commands",
    "Prefix w!",
    "Tip: Don't get hit by the ban hammer"
    ];

bot.once('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds
    console.log('walta is online!')


});


  



bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'help') {
        bot.commands.get('help').execute(message, args);
    } else if (command === 'poll') {
        bot.commands.get('poll').execute(message, args);
    } else if (command === 'avatar'|| command === 'av') {
        bot.commands.get('avatar').execute(message, args);
    } else if (command === '8ball') {
        bot.commands.get('8ball').execute(message, args);
    } else if (command === 'kill') {
        bot.commands.get('oof').execute(message, args);    
    }  else if (command === 'ban') {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**:x: You do not have permsissions to use that command.**")
        let toBan = message.mentions.members.first();
        if(!args[0]) return message.channel.send('<a:walterdance:719255235796926514> **Please mention someone to be banned from this server.** ')
        if(!toBan) return message.channel.send('**This person does not exist, Please try again.** <a:walterdance:719255235796926514>')


         if(toBan.bannable) {
            message.channel.send(`${args[0]} **is banned! cya later!** <a:walterdance:719255235796926514>`)
            toBan.ban();
        }
    } else if (command === 'kick') {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(":x: You do not have permsissions to use that command")
        let toKick = message.mentions.members.first();
        if(!args[0]) return message.channel.send('**Please mention someone to be kicked from this server.**  <a:walterdance:719255235796926514>')
        if(!toKick) return message.channel.send('This person does not exist, Please try again. <a:walterdance:719255235796926514>')

        if(toKick.kickable) {
            message.channel.send(`${args[0]} **is kicked! cya later** <a:walterdance:719255235796926514>`)
            toKick.kick();
        }
    } else if (command === 'command' || command === 'commands'){
        bot.commands.get('cmd').execute(message, args);
    } else if (command === 'walter'){
        const attachment = new Discord.MessageAttachment('./walter.jpeg')
        

        message.channel.send(attachment)
    } else if (command === 'adminhelp' || command === 'admin'){
        bot.commands.get('adminhelp').execute(message, args);
    }

});

bot.on('message', message => {
    if (message.content === 'Vote down below!') {
        message.react('👍').then(() => message.react('👎'));





    }
});

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'clear' || command === 'purge'){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You can't use this command, You need MANAGE_MESSAGES permissions to do it.**");
    if(!args[0]) return message.channel.send("**Please specify how many messages you want to delete.**");
    message.delete();
    message.channel.bulkDelete(args[0]).catch(e => { message.channel.send("**You can only delete 100 messages at once.**")});
    message.channel.send(`Successfully deleted ${args[0]} messages!`).then(m => m.delete({ timeout: 5000 }));
}
});


bot.login(botsettings.token);





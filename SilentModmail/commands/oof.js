const { MessageEmbed, discord } = require("discord.js")


module.exports = {
    name: 'oof',
    description: "OOF",
    execute(message, args) {
        if (!args[0]) return message.channel.send("Mention someone to nicely kill them")
        var results = [`Playing fortnite`,"Doing roblox reset", "Diamonds falling in lava", "F in chat", "Falling off their chair", "Water","Dying","Doing free robux",]
        var result = Math.floor((Math.random() * results.length));
        const embed = new MessageEmbed()
        .setColor("1E90FF")
        .addField('Person that died', (args.join(' ')))
        .addField(`Died by`, String(results[result]))
     message.channel.send(embed);



}

}

const {MessageEmbed, discord} = require("discord.js")

module.exports = {
    name:'help',
    description:"help",
    execute(message, args) {
    
        const embed = new MessageEmbed()
        .setColor("1E90FF")
        .addField('Here is some help', 'Down here.')
        .addField('**Prefix**', 'To use commands please add a space after w! **EXAMPLE** w! <command>')
        .addField('**Commands not working?**', 'The bot is not up 24 hours so make sure if its offline or online.')
        

        
        message.channel.send(embed)
    }
}
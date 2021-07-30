const {MessageEmbed, discord} = require("discord.js")

module.exports = {
    name:'cmd',
    description:"help",
    execute(message, args) {
    
        const embed = new MessageEmbed()
        .setColor("1E90FF")
        .addField('Here are the Commands!', 'list of commands below.')
        .addField('**Help Command**','w! help')
        .addField('**Poll Command**', 'w! poll <your poll>')
        .addField('**8ball Command**', '+w! 8ball <your wish>')
        .addField('**Avatar Command**', 'w! avatar')
        .addField('**Kill Command**', 'w! kill <Some innocent person>')
        .addField('**WALTER!**', 'w! walter')
        .addField(':white_check_mark: More commands in the future.', 'Stay tuned!')
        
        message.channel.send(embed)
    }
}
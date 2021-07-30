const {MessageEmbed, discord, User} = require("discord.js")

module.exports = {
    name:'avatar',
    description:"avatar",
    execute(message, args) {
        const embed = new MessageEmbed()
        .setColor("1E90FF")
        .setTitle(message.author.username)
        .setDescription('Avatar')
        embed.setImage(message.author.displayAvatarURL());
        message.channel.send(embed)
    }
    

     
}

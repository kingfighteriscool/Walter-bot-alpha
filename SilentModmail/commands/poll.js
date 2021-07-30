const { MessageEmbed, discord } = require("discord.js")



module.exports = {
    name: 'poll',
    description: "poll",
    execute(message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("❌ You do not have permsissions to use that command")

        if (!args[0]) return message.channel.send("❌ Please do +poll (Your poll)");

        const embed = new MessageEmbed()
            .setColor("1E90FF")
            .setTitle(message.author.username)
            .setAuthor('Poll asked by:')
            .addField('Question:', (args.join(' ')))
            .addField('Date', message.createdAt);
            embed.setThumbnail(message.author.displayAvatarURL());
         message.channel.send(embed);
        message.channel.send('Vote down below!')
            

         
         
         

         
         
         
        
            

        




    }

}





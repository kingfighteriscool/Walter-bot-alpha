const { MessageEmbed, discord } = require("discord.js")



module.exports = {
    name: 'adminhelp',
    description: "help for admins",
    execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("❌ You do not have permsissions to use that command")

        const embed = new MessageEmbed()
        .setColor("1E90FF")
        .addField('Here is some help', 'Down here.')
        .addField('**BAN help**','To ban someone you will need the permission BAN_MEMBERS, To ban do *w! ban <@user>* ')
        .addField('**Kick help**', 'To kick someone you will need the permission KICK_MEMBERS, To kick do *w! kick <@user>*')
        .addField('**Purge help**', 'To purge you will need the MANAGE_MESSAGES permission, **BE AWARE YOU CAN PURGE ONLY 100 AT A TIME** To purge do *w! purge <amount>* ') 
        .addField('**Commands not working?**', 'The bot is not up 24 hours so make sure if its offline or online.')

         
         
         
        message.channel.send(embed)
         
         
         
        
            

        




    }

}





const { MessageEmbed, discord } = require("discord.js")


module.exports = {
    name: '8ball',
    description: "8ball",
    execute(message, args) {
        if (!args[0]) return message.channel.send("❌ Please do +8ball (Your question)");
        var results = [`I don't know`,"Yes", "No", "Try again", "Ask your self", "Just stop"]
        var result = Math.floor((Math.random() * results.length));
        const embed = new MessageEmbed()
            .setColor("1E90FF")
            .setTitle(message.author.username)
            .setAuthor('Question asked by:')
            .addField('Wish:', (args.join(' ')))
            .addField(`Answer:`, String(results[result]))
            embed.setThumbnail(message.author.displayAvatarURL());
         message.channel.send(embed);
            

         
         
         

         
         
         
        
            

        




    }

}


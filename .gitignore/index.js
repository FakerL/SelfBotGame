const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "1."

let prefix = "@."

client.on("ready", () =>{
    console.log("Je suis prête")
    client.user.setActivity("➤ | 𝐅𝐈𝐀", {type : 1})
    
});

client.on('message', message => {
	
	            if(message.content.startsWith(prefix + 'help')){
    
                            let help = new Discord.RichEmbed()
                            .setColor('RANDOM')
                            .setThumbnail(`${message.author.avatarURL}`)
                            .setTitle('**__Voici mes commandes !__**')
                            .addField("__Bot :__", " `@.support (pour le lien du bot)`")
                            .addField("__Owner :__", " `@.mp (Et ton message et sa mp all tous ton serveur !)`")
                            .addField("__Moderation :__", " `@.clear`")
                            .addField("__Fun :__", " `@.8ball`")
                            .addField("__Utile :__", "`@.ping , $.serveurs`")
                            .addField("__Information :__ ","`Les autres commandes seront disponibles dans la version Bêta.`")
                            .setFooter("By Faker")
                            .setTimestamp()
                            message.channel.send(help)
           }
    });

client.login(process.env.TOKEN);

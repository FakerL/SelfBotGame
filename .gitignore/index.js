const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "1."

client.on("ready", () =>{
    console.log("Je suis prête")
    client.user.setActivity(":staff:Équipe Discord", {type : 1})
    
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
	
		
              if(message.content.startsWith(prefix + "spam")) {
                    var interval = setInterval (function () {
                    message.channel.send("Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklmvvvv")                       
                        })}

    });

client.login(process.env.TOKEN);

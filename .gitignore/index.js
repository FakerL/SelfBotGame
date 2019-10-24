const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "1."

client.on("ready", () =>{
    console.log("Je suis prête")
    client.user.setActivity("➤ | 𝐅𝐈𝐀", {type : 2})
    
});

client.on('message', message => {
	
	            if(message.content.startsWith(prefix + 'help')){
                         message.channel.send("```──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```")
           }
	
		
              if(message.content.startsWith(prefix + "spam")) {
                    var interval = setInterval (function () {
                    message.channel.send("Bonjour je suis spam.ex et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklmvvvvBonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklmvvvvBonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklmvvvvLoul")                       
                        })}

    });

client.login(process.env.TOKEN);

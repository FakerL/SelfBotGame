const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "1."

client.on("ready", () =>{
    console.log("Je suis prête")
    client.user.setActivity("➤ | 𝐅𝐈𝐀", {type : 2})
    
});

client.on('message', message => {
	
	            if(message.content.startsWith(prefix + 'help')){
                         message.channel.send("```  ____           _    __   ____            _          _      _                            \n / ___|    ___  | |  / _| | __ )    ___   | |_       / \    | | __   __ _   _   _    __ _ \n \___ \   / _ \ | | | |_  |  _ \   / _ \  | __|     / _ \   | |/ /  / _` | | | | |  / _` |\n  ___) | |  __/ | | |  _| | |_) | | (_) | | |_     / ___ \  |   <  | (_| | | |_| | | (_| |\n |____/   \___| |_| |_|   |____/   \___/   \__|   /_/   \_\ |_|\_\  \__,_|  \__, |  \__,_|\n                                                                            |__ _/        \n\n──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```")
           }
	
		
              if(message.content.startsWith(prefix + "spam")) {
                    var interval = setInterval (function () {
                    message.channel.send("Bonjour je suis spam.ex et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklmvvvvBonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklmvvvvBonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklm Bonjour je suis spam.exe et je veux passer lvl 11 et devenir prems je suis un bon debiteur sa mere oklmvvvvLoul")                       
                        })}

    });

client.login(process.env.TOKEN);

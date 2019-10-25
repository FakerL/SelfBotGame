const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "%."

client.on("ready", () =>{
    console.log("Je suis prête")
    client.user.setActivity("➤ | 𝐅𝐈𝐀", {type : 2})
    
});

client.on('message', message => {
	
	            if(message.content.startsWith(prefix + 'help')){
			    if (message.author.id !== client.user.id) return message.reply("PD CEST PAS A TOI LE SELF");
                         message.channel.send("``` _______  __  __  _______  ___ ___  _______ \n|   _   ||  |/  ||   _   ||   |   ||   _   |\n|       ||     < |       | \     / |       |\n|___|___||__|\__||___|___|  |___|  |___|___|\n                                            \n\n──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄                              Created By Myxor\n─▄▄──█░░░░░░░░░░░█──▄▄              Join Us : discord.gg/WmmfEbZ \n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```")
			 message.channel.send(">>> **__Help Akaya Selfbot__**\n\n**%.Info\n%.Moderateur\n%.Raid\n%.SelfBot**")   
			 message.channel.send("```Ⲋⲉⳑ⳨ⲃⲟⲧ Ⲇⲕⲇⲩⲇ```")
			    wait(5) return message.reply("att stp")
           }
	
	           if(message.content.startsWith(prefix + 'help')){
			    if (message.author.id !== client.user.id) return message.reply("PD CEST PAS A TOI LE SELF");
                         message.channel.send("``` _______  __  __  _______  ___ ___  _______ \n|   _   ||  |/  ||   _   ||   |   ||   _   |\n|       ||     < |       | \     / |       |\n|___|___||__|\__||___|___|  |___|  |___|___|\n                                            \n\n──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄                              Created By Myxor\n─▄▄──█░░░░░░░░░░░█──▄▄              Join Us : discord.gg/WmmfEbZ \n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```")
			 message.channel.send(">>> **__Info Akaya Selfbot__**\n\n**%.stream\n%.ecoute\n%.regard**")   
			 message.channel.send("```Ⲋⲉⳑ⳨ⲃⲟⲧ Ⲇⲕⲇⲩⲇ```")			   
           }
	
		if (message.content.startsWith(prefix + 'stream')){
             message.delete()
             client.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "STREAMING",
             url: "https://www.twitch.tv/Akaya"
             }
             });
             message.channel.send("**𝘛𝘰𝘯 𝘱𝘳𝘰𝘧𝘪𝘭𝘦 𝘢 é𝘵é 𝘮𝘪𝘴 à 𝘫𝘰𝘶𝘳 𝘦𝘯** `" + args.join("") + "` **𝘦𝘯 𝘭𝘪𝘷𝘦** :white_check_mark:")
            }

                if (message.content.startsWith(prefix + 'ecoute')){
             message.delete()
             client.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "LISTENING",
             }
             });
             message.channel.send("**𝘛𝘰𝘯 𝘱𝘳𝘰𝘧𝘪𝘭𝘦 𝘢 é𝘵é 𝘮𝘪𝘴 à 𝘫𝘰𝘶𝘳 𝘦𝘯** `Écoute " + args.join("") + "` :white_check_mark:")
            }

               if (message.content.startsWith(prefix + 'regard')){
             message.delete()            
             client.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "WATCHING",
             }
             });
             message.channel.send("**𝘛𝘰𝘯 𝘱𝘳𝘰𝘧𝘪𝘭𝘦 𝘢 é𝘵é 𝘮𝘪𝘴 à 𝘫𝘰𝘶𝘳 𝘦𝘯** `Regarde " + args.join("") + "` :white_check_mark:")
             }	

    });

client.login(process.env.TOKEN);

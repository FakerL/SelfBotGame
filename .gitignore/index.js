const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "%."

client.on("ready", () =>{
    console.log("e suis prête")
    client.user.setActivity("Visual Studio Code", {type : 4})
    
});

client.on('message', message => {
	
	            if(message.content.startsWith(prefix + 'help')){
			    if (message.author.id !== client.user.id) return message.reply("PD CEST PAS A TOI LE SELF");
                         message.channel.send("``` _______  __  __  _______  ___ ___  _______ \n|   _   ||  |/  ||   _   ||   |   ||   _   |\n|       ||     < |       | \     / |       |\n|___|___||__|\__||___|___|  |___|  |___|___|\n                                            \n\n──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄                              Created By Myxor\n─▄▄──█░░░░░░░░░░░█──▄▄              Join Us : discord.gg/WmmfEbZ \n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```")
			 message.channel.send(">>> **__Help Akaya Selfbot__**\n\n**%.Info\n%.Moderateur\n%.Raid\n%.SelfBot**")   
			 message.channel.send("```Ⲋⲉⳑ⳨ⲃⲟⲧ Ⲇⲕⲇⲩⲇ```")
           }
	
	           if(message.content.startsWith(prefix + 'Info')){
			    if (message.author.id !== client.user.id) return message.reply("PD CEST PAS A TOI LE SELF");
                         message.channel.send("``` _______  __  __  _______  ___ ___  _______ \n|   _   ||  |/  ||   _   ||   |   ||   _   |\n|       ||     < |       | \     / |       |\n|___|___||__|\__||___|___|  |___|  |___|___|\n                                            \n\n──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄                              Created By Myxor\n─▄▄──█░░░░░░░░░░░█──▄▄              Join Us : discord.gg/WmmfEbZ \n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```")
			 message.channel.send(">>> **__Info Akaya Selfbot__**\n\n**%.stream\n%.ecoute\n%.regard**")   
			 message.channel.send("```Ⲋⲉⳑ⳨ⲃⲟⲧ Ⲇⲕⲇⲩⲇ```")			   
           }
	
		
                      }};
              

client.login(process.env.TOKEN);

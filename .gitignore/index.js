const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "@."

client.on("ready", () =>{
    console.log("Je suis prête")
    client.user.setActivity("➤ | 𝐅𝐈𝐀", {type : 1})
    
});

client.login(process.env.TOKEN);

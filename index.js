const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

const prefix = "-";


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", msg =>{
/*    if(!msg.content.startsWith(prefix) || msg.author.client) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        msg.reply("ping");
    }
    else if(command == "flo"){
        msg.reply("florin du hs");
    }
    else if(command == "leo"){
        msg.reply("leo du hs");
    }
    else if(command == "max"){
        msg.reply("max du geiler");
    }*/
    if(msg.content == "flo"){
        msg.reply("florin du hs");
    }
    if(msg.content == "leo"){
        msg.reply("leo du hs");
    }    
})

client.login(process.env.TOKEN);
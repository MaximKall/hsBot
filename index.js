const Discord = require('discord.js')
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

const WelcomeChannelId = "963105491964285010"

const generateImage = require("./generateImage")

client.on("ready", () => {
    console.log(`${client.user.tag} is online!`);
})

client.on("messageCreate", (msg) =>{
    if(msg.content == "flo"){
        msg.reply("florin du hs");
    }
    if(msg.content == "leo"){
        msg.reply("leo du hs");
    }
    if(msg.content == "vucko"){
        msg.reply("vucko der hs isch der breiteste");
    } 
    if(msg.content == "todic"){
        msg.reply("todic der hs muss cutten");
    }
    if(msg.content == "max"){
        msg.reply("max du geiler hund");
    }
    if(msg.content == "dc?"){
        msg.channel.send("kond discord");
        msg.channel.send("kond discord");
        msg.channel.send("kond discord");
        msg.channel.send("kond discord");
        msg.channel.send("kond discord");
    }      
})

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(WelcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN);
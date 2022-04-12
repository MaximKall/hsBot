const Canvas = require("canvas")
const Discord = require("discord.js")
const background = "background.jpg"
const dim = {
    height: 657,
    width: 1200,
    margin: 50
}
const av = {
    size: 256,
    x: 480,
    y: 170
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: "false", size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y +av.size / 2, av.size / 2,  0, Math.PI * 2, true)
    ctx.closePath()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    ctx.font = "60px Verdana"
    ctx.fillText("Welcome", dim.width / 2, dim.margin + 80)

    ctx.font = "55px Verdana"
    ctx.fillText(username + discrim, dim.width / 2, dim.height - dim.margin - 40)

    ctx.font = "40px Verdana"
    ctx.fillText("to the server", dim.width / 2, dim.height - dim.margin - 120)

    const attachement = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachement
}

module.exports = generateImage
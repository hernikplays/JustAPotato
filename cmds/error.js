let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const blacklisted1 = [""] //Note to myself: add blacklisted people to a JSON or atleast a blacklist command
      const blacklisted2 = [""]

    let Blacklisted = new Discord.RichEmbed()
        .setTitle(":no_entry_sign: Blacklisted")
        .setDescription(`You've been blacklisted from using the Error Command, for at least one of the following reasons:\n 1) Misuse of the Error Command.\n 2) Other reason.\n If you would like to still submit an error, submit it trough[here](https://github.com/discordies/JustAPotato/issues)`)
        .setFooter("If you'd like to appeal to be whitelisted please contact hernikplays#4673")
        .setColor("RED")
        .setThumbnail(message.author.avatarURL);

        if(message.author.id == blacklisted1 || message.author.id == blacklisted2) return message.channel.send(Blacklisted); 

    var suggest = args.slice(0).join(" ")
    if(!suggest) return message.reply("What's the bug?")
        bot.guilds.get("463016521451569153").channels.get("482120307646136321").send("**NEW BUG <@145973959127597057>**!\n Bug: "+ suggest + "\n Bug reported by  <@" + message.author.id + ">")
    message.channel.send("Bug sent!");
}

module.exports.help = {
    name: "error"
}
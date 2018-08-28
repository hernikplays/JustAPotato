let Discord = module.require("discord.js");
const theprefix = "pt!" // Here it is just so I don't have to rewrite the footer
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Here is a list of all avalible commands:")
            .setColor("#d3b626")
            .addField("[=== Fun Commands ===](https://jap.hernikplays.tk/doc/commands#fun)", "Fun")
            .addField("8ball <question>", "Ask the magic 8ball a question")
            .addField("cat", "Get a cat!")
            .addField("dice", "Throw a six side dice")
            .addField("dog", "Get a dog!")
            .addField("kiss <@user>", "Kiss a user :3")
            .addField("pyro", "Sends a Pyrocynical meme")
            .addField("smoke", "Smoke, but it's unhealthy!")
            .addField("rw <Name>", "I will rate your waifu!")
            .addField("rps <rock/paper/scissors>", "Play rock, paper, scissors")
            .addField("ship <@user> [@user]")
            .addField("talk <thing>", "Chat with Cleverbot")
            .addField("coinflip", "Flip a coin")
            .addField("meme", "Get a meme")
            .addField("minecraft <achievement>", "Generates a minecraft achievement")
            .addField("weather <Location> [F]", "Displays weather info - adding F changes to Fahrenheit")
            .addField("[=== Text Manipulation ===](https://jap.hernikplays.tk/doc/commands#text)", "Change text")
            .addField("spongibobu <text>", "tUrn Your tExT To soMetHiNg liKe tHis")
            .addField("flip <text>", "Flip the text")
            .addField("base64 <text>", "Encodes given text in base64")
            .addField("zalgo <text>", "Makes text resemble the devil inside you")
            .addField("dezalgo <zalgo text>", "Dezalgo text")
            .setFooter(`Bot Prefix: ${theprefix} -- <required> [optional] -- Bot is still in development, any bugs to ${theprefix}error -- created by hernikplays#4673`)
          let em2 = new Discord.RichEmbed()
          .setTitle("Help - Page 2")
          .setColor("#d3b626")
          .addField("[=== NSFW Commands ===](https://jap.hernikplays.tk/doc/commands#nsfw)", "Only in NSFW channels")
            .addField("hentai", "Hentai GIFs OwO")
            .addField("nekolewd","Sends a 'lewd' neko")
          .addField("[=== Other Commands ===](https://jap.hernikplays.tk/doc/commands#other)", "Unrelated")
            .addField("ev <e-mail>", "Checks if an e-mail is valid")
            .addField("fortnite <Fortnite Username>", "Search some Fortnite stats!")
            .addField("tr <from:iso> <to:iso> <text>", "Translates text")
            .addField("stats", "Show some bot stats")
            .addField("help", `Displays all commands`)
            .addField("ping", `Pong!`)
            .addField("error <the bug>", "Sends a bug report to the support server. **Abuse and you will be blacklisted**")
            .addField("invite", "Sends an invite link for the bot")
            .addField("web", "Gives link to website")
            await message.channel.send({embed: embed});
            await message.channel.send(em2);
            
}

module.exports.help = {
    name: "help"
}
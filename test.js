const Discord = require("discord.js");
const RichEmbed = require('discord.js');
const PREFIX = "$"
const TOKEN = "NTk5OTQwOTcwNjUzNjc5NjM3.Xj-2Fg.bqiWWCUzZr1Y6RpgLgQ4Bi3vwJM"

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("준비되었습니다.");
    bot.user.setActivity('LK봇 기능을 테스트', {type: "PLAYING"});
})

bot.on('guildMemberAdd', function(member) {
  const channel = member.guild.channels.find(ch => ch.name === '★기본잡담방★');
  if (!channel) return;
  channel.send("> **어서오세요, "+member+"님!**");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if(message.author.bot) return;

    if (!message.content.startsWith(PREFIX)) return;
    var msg = message.content.substring(PREFIX.length);
    var sender = message.author.username;

    switch (msg.toLowerCase()){
        case "도움말":
            var embed = new Discord.RichEmbed().addField("**$인사**","LK봇이 인사를 해줍니다.").addField("**$say [할 말]**","LK봇이 말을 전달합니다.").setColor(0x00FFBF).setFooter("ⓒ Lukim9, LK BOT");
            message.channel.sendEmbed(embed);
            break;

        case "인사":
            var embed = new Discord.RichEmbed().setColor(0x00FFBF).setDescription(sender+"님 안녕하세요!").setFooter("ⓒ Lukim9, LK BOT");
            message.channel.send(embed);
            break;
    }

    if (msg.startsWith("say ")) {
      var embed = new Discord.RichEmbed().setColor(0x00FFBF).setDescription("**<"+sender+"> "+msg.substring(4)+"**").setFooter("ⓒ Lukim9, LK BOT");
      message.channel.send(embed);
      message.delete();
    }
});

bot.login(TOKEN)

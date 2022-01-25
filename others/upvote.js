const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `upvote`,
  description: `Gives you the link to upvote a bot`,
  aliases: ["vote"],
  cooldown: 2,
  edesc: "Type this command to see upvote link",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Ping embed
    message.reply(new MessageEmbed().setColor("#F0EAD6").setTitle("https://discordbotlist.com/bots/notebot2/upvote"));
  }
}
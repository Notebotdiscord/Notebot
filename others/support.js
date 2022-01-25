const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `support`,
  description: `Gives you the link to support server`,
  aliases: ["server"],
  cooldown: 2,
  edesc: "Type this command to see support server",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Ping embed
    message.reply(new MessageEmbed().setColor("#F0EAD6").setTitle("https://discord.gg/PcMnsDGk5b"));
  }
}
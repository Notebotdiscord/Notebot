const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
  approveemoji,
  OWNER,
  LOGS,
  denyemoji 
} = require(`../config.json`);


module.exports = {
  name: "botservers",
  description: "Check what Servers the bot is in!",
  botPerms: ["USE_EXTERNAL_EMOJIS"],
    execute(message,args,client) { 
    try {
      if (message.author.id != OWNER)
        return message.channel.send(
          `Owner only command, sorry :(`
        );
      let data = [];
      client.guilds.cache.forEach((x) => {
        message.channel.send(
          `🔹**${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})\n............................`
        );
      });

      if (data.length > 0) {
        data.sort();
        data = `🔹 ` + data.join("\n🔹");
      } else {
        data = "[No server found]";
      }
    } catch (err) {
      const errorlogs = client.channels.cache.get(LOGS);

      message.channel.send(
        `Whoops, We got a error right now! This error has been reported to Support center!`
      );

      errorlogs.send(`Error on bs commands!\n\nError:\n\n ${err}`);
    }
  },
};
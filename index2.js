const { Client } = require("discord.js-selfbot-v13");
require("dotenv").config();
const client = new Client();

const { RichPresence } = require("discord.js-selfbot-rpc");

client.on("ready", () => {
  const presence = new RichPresence()
    .setStatus("dnd") // Must be one of (online, idle, dnd) default is online
    .setName("Discord")
    .setTimestamp();

  client.user.setPresence(presence.toData());
  console.log("Rich Presence has running...");

  console.log(`Login as ${client.user.tag}`);
});

client.login(process.env.TOKEN);

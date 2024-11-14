const { Client } = require("discord.js-selfbot-v13");
require("dotenv").config();
const client = new Client();

client.on("ready", () => {
  client.user.createFriendInvite().then(console.log).catch(console.error);
});

client.login(process.env.TOKEN);

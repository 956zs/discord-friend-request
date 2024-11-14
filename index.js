const { Client } = require("discord.js-selfbot-v13");
require("dotenv").config();
const client = new Client();

client.on("ready", () => {
  client.user.createFriendInvite().then((invite) => {
    const inviteCode = invite.code;
    const maxAge = invite.maxAge;
    console.log("invite code: " + inviteCode + " \nmax age: " + maxAge);
  });
});

client.login(process.env.TOKEN);

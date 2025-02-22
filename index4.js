require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js-selfbot-v13");

const client = new Client();

// 目標用戶 ID
const TARGET_USER_ID = "1312042291636211801";

// 發送訊息的間隔（毫秒），這裡設為 6 秒
const INTERVAL = 6000;

client.once("ready", async () => {
  console.log(`✅ 已登入為 ${client.user.tag}`);

  const sendMessage = async () => {
    try {
      const user = await client.users.fetch(TARGET_USER_ID);
      if (user) {
        await user.send("<a:padko_rip_gif:891681060310646854>");
        console.log(`📩 訊息已發送給 ${user.tag}`);
      }
    } catch (error) {
      console.error(`❌ 無法發送訊息: ${error}`);
    }
  };

  // 立即執行一次，然後每隔 INTERVAL 時間發送
  sendMessage();
  setInterval(sendMessage, INTERVAL);
});

client.login(process.env.TOKEN);

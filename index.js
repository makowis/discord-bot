// 設定を.envからロード
require("dotenv").config();

//ログイン処理
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

client.on("ready", () => {
  console.log("ready...");
});

client.on("message", message => {
  if (message.author.bot) {
    return;
  }
  if (message.content.match(/ご安全に/)) {
    let reply_text = `アクティブ体操やれ！ https://www.youtube.com/watch?v=KPxt7vyQ6Zo`;
    message
      .reply(reply_text)
      .then(() => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
});

client.login(token);

const cron = require("node-cron");

// Create a new webhook
const hock_id = process.env.DISCORD_HOCK_ID;
const hock_token = process.env.DISCORD_HOCK_TOKEN;
const hook = new Discord.WebhookClient(hock_id, hock_token);

// Send a message using the webhook
cron.schedule("0 15 * * *", () => {
  var today = new Date();
  if (!isWeekend(today)) {
    hook.send(
      "みんなアクティブ体操やろう！ https://www.youtube.com/watch?v=KPxt7vyQ6Zo"
    );
  }
});

function isWeekend(today) {
  var dayNum = today.getDay(); //Date.getDay()は曜日番号として日曜始まりで0~6の値を返す

  if (dayNum == 0 || dayNum == 6) {
    return true;
  }

  return false;
}

import "./lib/env" // 設定を.envからロード
import * as Discord from 'discord.js'

//ログイン処理
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN as string;

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

  if (message.content == 'oha') {
    let reply_text = `おはようございますご主人様♪今日も1日頑張りましょう♪`;
    message
      .reply(reply_text)
      .then(() => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }

  if (message.content == 'ただいま') {
    let reply_text = `おかえりなさいませ！ご主人様♪`;
    message
      .reply(reply_text)
      .then(() => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }

  if (message.content.match(/藤原竜也/)) {
    let reply_text = `ど゛う゛し゛て゛な゛ん゛だ゛よ゛お゛お゛ぉ゛お゛！゛！゛！゛ん゛あ゛あ゛あ゛あ゛あ゛ぁ゛ぁ゛あ゛あ゛！゛！゛！゛！゛`;
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
const hock_id = process.env.DISCORD_HOCK_ID as string;
const hock_token = process.env.DISCORD_HOCK_TOKEN as string;
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

function isWeekend(today: Date) {
  var dayNum = today.getDay(); //Date.getDay()は曜日番号として日曜始まりで0~6の値を返す

  if (dayNum == 0 || dayNum == 6) {
    return true;
  }

  return false;
}

import './lib/env' // 設定を.envからロード
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
    reply(message, reply_text);
    return;
  }

  if (message.content == 'oha') {
    let reply_text = `おはようございますご主人様♪今日も1日頑張りましょう♪`;
    reply(message, reply_text);
    return;
  }

  if (message.content == 'ただいま') {
    let reply_text = `おかえりなさいませ！ご主人様♪`;
    reply(message, reply_text);
    return;
  }

  if (message.content.match(/藤原竜也/)) {
    let reply_text = `ど゛う゛し゛て゛な゛ん゛だ゛よ゛お゛お゛ぉ゛お゛！゛！゛！゛ん゛あ゛あ゛あ゛あ゛あ゛ぁ゛ぁ゛あ゛あ゛！゛！゛！゛！゛`;
    reply(message, reply_text);
    return;
  }  
});

client.login(token);

import { schedule } from 'node-cron';

// Create a new webhook
const hock_id = process.env.DISCORD_HOCK_ID as string;
const hock_token = process.env.DISCORD_HOCK_TOKEN as string;
const hook = new Discord.WebhookClient(hock_id, hock_token);

// Send a message using the webhook
schedule("0 15 * * *", () => {
  const today = new Date();
  if (!isWeekend(today)) {
    hook.send(
      "みんなアクティブ体操やろう！ https://www.youtube.com/watch?v=KPxt7vyQ6Zo"
    );
  }
});

const isWeekend = (today: Date) => {
  const dayNum = today.getDay(); //Date.getDay()は曜日番号として日曜始まりで0~6の値を返す

  if (dayNum == 0 || dayNum == 6) {
    return true;
  }

  return false;
}

const reply = (message: Discord.Message, reply_text: string) => {
  message
  .reply(reply_text)
  .then(() => console.log(`Sent message: ${reply_text}`))
  .catch(console.error);
}
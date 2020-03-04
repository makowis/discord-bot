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

  if (message.content.match(/(糞|くそ)/)) {
    let reply_text = `誰をお掃除してくればいいですか？ご主人様♪`;
    reply(message, reply_text);
    return;
  }
});

client.login(token);

const reply = (message: Discord.Message, reply_text: string) => {
  message
  .reply(reply_text)
  .then(() => console.log(`Sent message: ${reply_text}`))
  .catch(console.error);
}

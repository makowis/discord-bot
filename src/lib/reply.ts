import * as Discord from 'discord.js'

const reply = (message: Discord.Message, reply_text: string) => {
  message
  .reply(reply_text)
  .then(() => console.log(`Sent message: ${reply_text}`))
  .catch(console.error);
}

export default reply;

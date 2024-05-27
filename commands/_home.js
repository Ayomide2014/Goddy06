/*CMD
  command: /home
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let msg = "*Welcome to TRX airdrop bot, it has 4 main functions.*\n\n_1. Buy followers, retweets and likes on your twitter account.\n\n2. Pay real people to join your telegram group.\n\n3. Earn TRX cryptocurrency joining telegram and twitter\n\n4. Refer your friends and earn 10% commission for life._ ";
let keyboard = [
[{ text: "💰Earn TRX", callback_data: "trx" }],[{ text: "🔺Buy Followers", callback_data: "follow" }],[{ text: "👮‍♀️Referrals",callback_data: "referrals"}],[{ text: "🏦Wallet",callback_data: "wallet"}],
];
if (!request.data) {
  Api.sendMessage({
    text: msg,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: keyboard
    }
   });
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: msg,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: keyboard 
    }
  });
  }


/*CMD
  command: trx
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

let msg = "*To verify your social accounts, first perform the following 3 tasks:\n\n1. Join our telegram chat group.\n\n2. Join our telegram announcements channel.\n\n3. Follow TRX Follow Bot on Twitter.* ";
let keyboard = [
[{ text: "Telegram", url: "https://t.me/atomdropper" }],[{ text: "Channel" , url: "https://t.me/trxfollowbotchat"},{ text: "Twitter", url: "https://twitter.com/spacecadet2077" }],[{ text: "Done ✅" , callback_data: "/next"}]
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


/*CMD
  command: follow
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

let msg = "*🔥 Use this bot to pay for thousands of real people to follow you.\n\n1. Choose the type of followers you want.\n\n2. Choose the amount to pay per user, pay more to rank higher.\n\n3. Choose the amount of users you want.\n\nYour job will be posted in the list, and real users will begin following.*";
let keyboard = [
[{ text: "🤖 Telegram Group & Channel", callback_data: "/ccct tg" }],[{ text: "🔖 Twitter", callback_data: "/ccct oth" }],[{ text: "🔙Back",callback_data: "🔙Back"}],
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


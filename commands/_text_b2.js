/*CMD
  command: /text_b2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
var mm = User.getProperty("adminid")
var adm = Bot.getProperty("adminID")
if (adm == user.telegramid) {
  var fullBotUsers = Bot.getProperty("wholeUsers")
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "*🔊 Admin ~ BroadCast\n\n" + message + "*",
      parse_mode: "markdown",
      disable_web_page_preview: true
    })
  }

  var tto =
    "*✔️Broadcast Sent To All Active Users* Your Broadcast Was: \n\n" +
    message +
    ""
  Api.editMessageText({
    message_id: mm,
    text: tto,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "◀ Back", callback_data: "/mass_setting" }]]
    }
  })
  return
}


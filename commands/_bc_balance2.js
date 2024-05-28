/*CMD
  command: /bc_balance2
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
var splt = message.split("-")
var tgid = splt[0]
var am = splt[1]
var mm = User.getProperty("adminid")
var us = Bot.getProperty("Chat" + tgid, null)
if (us == null) {
  Api.editMessageText({
    message_id: mm,
    text:
      "*User was Not Found to Ban!! *\n\nPlease Recheck User's Telegram I'd",
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "◀ Back", callback_data: "/user_setting" }]]
    }
  })
  return
}
let bal = Libs.ResourcesLib.anotherUserRes("balance", tgid)
bal.add(+am)
Api.editMessageText({
  message_id: mm,
  text: "✅* Balance Added Successful*",
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "◀ Back", callback_data: "/user_setting" }]]
  }
})


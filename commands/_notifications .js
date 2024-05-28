/*CMD
  command: /notifications 
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ⚙️ settings, /setting
  group: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
var m = User.getProperty("settingm")
var nn = Bot.getProperty("taskalert" + user.telegramid, "🔔")
if (nn == "🔕") {
  var inl = [
    [{ text: "" + nn + " New Task Alert", callback_data: "/settinm" }],
    [{ text: "🗂 Wallet", callback_data: "/wallet " }]
  ]
} else {
  var inl = [
    [{ text: "" + nn + " New Task Alert", callback_data: "/settingm" }],
    [{ text: "🗂 Wallet", callback_data: "/wallet " }]
  ]
}
var txt = "*Choose A Setting To Edit Below:*"
if (request.message_id) {
  Api.deleteMessage({ chat_id: chat.chatid, message_id: m })
  Api.sendMessage({
    text: txt,
    on_result: "settingm",
    disable_web_page_preview: true,
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: inl }
  })
  return
}
Api.editMessageText({
  message_id: m,
  text: txt,
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
})


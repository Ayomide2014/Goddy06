/*CMD
  command: /ban
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

var mm = User.getProperty("adminid")
Api.editMessageText({
  message_id: mm,
  text: "🆔* Send User Telegram ID*",
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "◀ Back", callback_data: "/user_setting" }]]
  }
})
Bot.runCommand("/ban2") 

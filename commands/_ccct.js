/*CMD
  command: /ccct
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

if (params == "tg") {
  User.setProperty("category", params)
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "🔗 *Send Me Your Group & Channel Username Without @.*",
    parse_mode: "markdown",
    disable_web_page_preview: true
  })
  Bot.runCommand("/ctask8")
} else {
  User.setProperty("category", params)
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "🔗 *Send Me Your Twitter Profile Link.*",
    parse_mode: "markdown",
    disable_web_page_preview: true
  })
  Bot.runCommand("/ctask7")
}


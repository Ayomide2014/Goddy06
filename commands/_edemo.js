/*CMD
  command: /edemo
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

var p = params

User.setProperty("editDemo", p)
Bot.runCommand("/editDemo#423")

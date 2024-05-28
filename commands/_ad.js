/*CMD
  command: /ad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send id

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid ==1399031414){
Bot.setProperty("admin_chat",user.telegramid,"string")
Bot.setProperty("adminID",user.telegramid,"string")
Bot.sendMessage("*You are now Admin With* `" +user.telegramid+ "` *ID*\n\nSned /admin")
}else{
Bot.sendMessage("*Ooops it seems we already has an admins*")
}

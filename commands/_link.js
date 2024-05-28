/*CMD
  command: /link
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send bot link

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1399031414){
Bot.sendMessage("✅ Done: Refer Link Successfully Set is\n "+"`"+message+"`");
Bot.setProperty("link" , message,"string")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}

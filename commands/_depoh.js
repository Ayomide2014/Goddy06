/*CMD
  command: /depoh
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

var his = User.getProperty("history")
if(his == undefined){
var go ="*⚙️ Last 20 Depositd*"+ "\n✨ No Deposit found";
Bot.sendMessage(go)
}else{
Bot.sendMessage("⚙️ Last 20  Deposit\n\n"+his)
}

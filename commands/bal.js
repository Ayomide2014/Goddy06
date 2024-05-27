/*CMD
  command: bal
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

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{

if (!user.first_name) {
  var valid_name = user.last_name
} else {
  var valid_name = user.first_name
}
let currency = Bot.getProperty("cur");

var balance = Libs.ResourcesLib.userRes("balance")
//balance.add(555888)
Bot.sendMessage("*📅 Balance Dashboard*\n........™..................................\nAccount 🆔: `"+user.telegramid+"`\n.............................................\n💸 *Balance*: `"+balance.value().toFixed(8)+" "+currency+"`")

}

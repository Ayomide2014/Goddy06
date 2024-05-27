/*CMD
  command: setwallet2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send your TRX address*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
return}

var check= Bot.getProperty(message)

if(!check){
User.setProperty("TRXwallet", message,"text")

Bot.sendMessage(
  "*Your Address is set to*  _"+message+"_."
)
Bot.setProperty(message,"ok")
return}

Bot.setProperty(""+message+"" , "ban" , "string");

Bot.setProperty(""+user.telegramid+"" , "ban" , "string");


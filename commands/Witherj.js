/*CMD
  command: Witherj
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

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("jay")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("TRXwallet")
if( wallet == undefined ){
Bot.sendMessage("_❌ wallet Not set_")
}else{
if (balance.value() < 10){
Bot.sendMessage("❌ Minimum Withdraw 10 Trx")
}else{
Bot.sendMessage("*💵 Write Down The Amount You Want To Withdraw*")
Bot.runCommand("Autopayboy")
}
}}

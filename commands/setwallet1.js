/*CMD
  command: setwallet1
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
let cur = Bot.getProperty("cur");
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{


if (!user.first_name) {
  var valid_name = user.last_name
} else {
  var valid_name = user.first_name
}

let wallet = User.getProperty("TRXwallet","👋 Not Set")
var button = [{ title : "Set Wallet ✏" , command : "setwallet2" }]
Bot.sendInlineKeyboard(button , "* "+valid_name+" Account Settings ⚙*\n\n⛄  [Your "+cur+" address](https://t.me/hi): *"+wallet+"*\n\n_If Your address is not set, Set It By Clicking The Button Below_",{ disable_web_page_preview: true })

}

/*CMD
  command: /ctask3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *➡️ Enter The Amount To Pay For Completing The Task.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(message)) {
  Bot.sendMessage("❌ Send a Valid Number")
  Bot.runCommand("/ctask3")
  return
}
if (message < 0.2 || message > 3) {
  Bot.sendMessage("*Enter Minimum* `0.2` *TRX & Maximum* `3` *TRX*")
  Bot.runCommand("/ctask3")
  return
}
let Balance = Libs.ResourcesLib.userRes("balance").value()

var u = User.getProperty("usertask1")
var bb = message * u
if (Balance < bb) {
  Bot.sendMessage("❌* You Have No Enough TRX*")
  return
}
User.setProperty("usertask4", message)
Bot.runCommand("/ctask4")


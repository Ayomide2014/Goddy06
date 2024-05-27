/*CMD
  command: Autopayboy
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var userPayment = Libs.ResourcesLib.anotherChatRes("withd", "global")
userPayment.add(1)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("TRXwallet")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("jay")
  if (isNaN(message)) {
    
  } else {
  }
var history = User.getProperty("history")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var amount = message
  if (history == undefined) {
    var newh =
      "-------------------------------------------------------------------------------------\n" +
      "✅ Withdraw Amount : " +
      amount +
      "Kin" +
      "\n⚕DATE " +
      time
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "-------------------------------------------------------------@"+bot.name+"------------------------" +
      "\n✅ Withdraw Amount : " +
      amount +
      "Kin" +
      "\n⚕ DATE " +
      time
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }
  if (message < 10) {
    Bot.sendMessage("_❌ Minimum Withdraw 10 TRX_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(6) + " TRX_"
      )
    } else {
      Bot.sendMessage(
        "*✅ Withdrawal Requested Successfully\n\n You will receive your payment On Weekend\n\n💳 Withdrawal Fee 3 TRX*")
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@shopmulll",
        text:
          "*📢 New Withdraw\n\n▪️ Status = ⌚⌚\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
          message +
          " TRX\n▪️ User Referrals = " +
          refList.length +
          "\n\n💳 Address =\n " +
          wallet +
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
     })
    }
  }
}

Bot.runCommand("/home")

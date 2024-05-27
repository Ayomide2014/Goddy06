/*CMD
  command: /onIncome
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




if (!options) {
  // for security we need to check that this command runned only by lib
  // user can not run command with options
  return
}

let wallet = options.address
let currency = options.currency
let amount = options.amount

let fiat_amount = options.fiat_amount
let fiat_currency = options.fiat_coin

let fee = options.fee

let txn_id = options.txn_id
let res = Libs.ResourcesLib.userRes("balance")
res.add(+amount)

//Bot.sendMessage("Payment detected🤓\nAdded to balance, BotPoint: " + amount )
Bot.sendMessage(
  "*Income to wallet:*" +
    "\n`" +
    wallet +
    "`" +
    "\n\n*Amount*:\n" +
    amount +
    " " +
    currency +
    " (" +
    fiat_amount +
    " " +
    fiat_currency +
    ")" +
    "\n*Fee*: " +
    fee +
    "\n\nTXN: `" +
    txn_id +
    "`\n\nBalance Added: +" +
    amount +
    "BP"
)
Api.sendMessage({
  chat_id: "@shopmulll",
  text:
    "<b>" +
    "🔋 New Deposit from user!!\n\n▪️ Status : Deposited💳\n▪️ User Id : " +
    user.telegramid +
    "\n🕵️ Name: " +
    "@" +
    user.username +
    "\n\n▪️ Amount : " +
    amount +
    " TRX" +
    "\n" +
    "🏧 Gain: " +
    amount +
    "BB💎\n\n#- " +
    txn_id +
    "\n🕒 Balancd added✓" +
    "\n\n✅ Bot @YOUR BOT" +
    "</b>",
  parse_mode: "html"
})
var bonus = amount * 0.1
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(+bonus)
  Bot.sendMessageToChatWithId(
    referrer.telegramid,
    "*➕ Referral Deposit: +* " + bonus.toFixed(5) + " *BB*"
  )
}
var stat = Libs.ResourcesLib.anotherChatRes("active", "global")
var etm = User.getProperty("dep")
if (!etm) {
  stat.add(1)
  User.setProperty("dep", true)
}

/*CMD
  command: referrals
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

if (chat.chat_type != "private") {
  Bot.sendMessage("_Open me in private_")
  return
}

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bot = Libs.ReferralLib.currentUser.getRefLink("HolderMiningbotV2","inv")
let TRX = refcom.value()
let bonus = Bot.getProperty("bonus")

let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [[{ title: "Get Referral Link", command: "/list"}]]

Bot.sendInlineKeyboard(
  key,
  "*Earn 20% commision on your friends tasks*\n\n\n_Get life time commissions, withdraw trx instantly_\n\n\n👉 Total invited users: "+RefLib.getRefCount()+" *users*")


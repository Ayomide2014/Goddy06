/*CMD
  command: he
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📊 statistics, /stat
  group: 
CMD*/

var stat = Libs.ResourcesLib.anotherChatRes("status", "global").value()
var task = Libs.ResourcesLib.anotherChatRes("total_task", "global").value()
var dp = Libs.ResourcesLib.anotherChatRes("totaldeposit", "global")
  .value()
  .toFixed(3)
var wd = Libs.ResourcesLib.anotherChatRes("totalwithdraw", "global")
  .value()
  .toFixed(3)
var hh = `• ━━━━━━━━━━━━━━━━━ •
*👥 Total Members:* ${stat}

*📋 Total Tasks Created:* ${task}

*➕ Total Deposits:* ${dp} *TRX* 

*📤 Total Withdrawals:* ${wd} *TRX* 
• ━━━━━━━━━━━━━━━━━ •`
var inl = [[{ title: "👀 Bot Whole User Details", command: "/detail_u" }]]
Bot.sendInlineKeyboard(inl, hh)


/*CMD
  command: /bot_setting
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

var mm = User.getProperty("adminid")
var adm = Bot.getProperty("adminID")
var m = Bot.getProperty("maintenance", "❌")
var dep = Bot.getProperty("Deposit_status", "❌")
var wit = Bot.getProperty("Withdraw_status", "❌")
var tto = "*💡 Choose A Setting To Edit Below:*"
var inl = [
  [{ text: "🔘 Maintenance Mode  ->  " + m, callback_data: "/main " + m }],
  [{ text: "📥 Deposit  ->  " + dep + "", callback_data: "/dep_st " + dep }],
  [
    { text: "📤 Withdrawal  ->  " + wit + "", callback_data: "/with_st " + wit }
  ],
  [
    { text: "◀ Back To Panel", callback_data: "/admin" }
  ]
]
if (adm == user.telegramid) {
  Api.editMessageText({
    message_id: mm,
    text: tto,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
  return
}


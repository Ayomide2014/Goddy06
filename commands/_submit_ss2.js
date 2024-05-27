/*CMD
  command: /submit_ss2
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

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
var pi = User.getProperty("task_admin")
var bbi = Bot.getProperty("Task+" + pi)
var nam = bbi.name
var des = bbi.des
var clm = bbi.claim
var rew = bbi.payment
var id = bbi.id
var admin = bbi.admin
if (!user.username) {
  var usernamei =
    "<a href='tg://user?id=" +
    user.telegramid +
    " '>" +
    user.first_name +
    "</a>"
} else {
  var usernamei = "@" + user.username
}
var txt =
  "<b>💛 New User Has Been Submitted Task\n• ━━━━━━━━━━━━━━━━━ •\n🧑‍💻 User:</> " +
  usernamei +
  "\n\n<b>🆔 Task ID:</> #" +
  id +
  "\n👁️<b> Task Title:</> " +
  nam +
  "\n<b>📃 Description:</> " +
  des +
  "\n<b>💲 Reward:</> " +
  rew +
  " <b>TRX</>"
var button = [
  [
    {
      text: "✅ Approved",
      callback_data: "/app " + user.telegramid + "-" + nam + "-" + rew
    },
    { text: "❌ Reject", callback_data: "/rej " + user.telegramid + "-" + nam }
  ]
]
Api.sendPhoto({
  chat_id: admin,
  photo: request.photo[0].file_id,
  caption: txt,
  parse_mode: "html",
  reply_markup: { inline_keyboard: button }
})
Bot.sendMessage(
  `*🥳 Very Good, Your Proof Has Been Successfully Sent To The Owner Of The Task!*`
)


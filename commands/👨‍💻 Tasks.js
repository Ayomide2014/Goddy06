/*CMD
  command: 👨‍💻 Tasks
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /task
  group: 
CMD*/

var ag = User.getProperty("taskagree")
if (!ag) {
  var tto = `*👍 Read Our Agreement Then Click On Agree.*
  
_1️⃣ Please Do The Tasks Honestly And To The Best Of Your Ability.

2️⃣ Once A Task Has Been Broadcasted It Can't Be Cancelled.

3️⃣ Funds Deposited For Tasks Are Non Refundable.

4️⃣ All Task Buyers Are Resposible To Check Completed Work.

5️⃣ Tasks Are Auto Approved After 24 Hours._`
  Bot.sendInlineKeyboard([[{ title: "👍 Agree", command: "/agreeTask" }]], tto)
  return
}
var codeList = Bot.getProperty("TaskJsonList")
if (!codeList) {
  Bot.sendMessage("*😔 No Task Available For Do*")
  return
}

for (var index in codeList) {
  var name = codeList[index].name

  var bbi = Bot.getProperty("Task+" + name)
  var nam = bbi.name
  var des = bbi.des
  var clm = bbi.claim
  var rew = bbi.payment
  var id = bbi.id
  var demo = bbi.demo
  var cat = bbi.cat
  var link = bbi.link
  if (cat == "tg") {
    var line = "https://t.me/" + link
  } else {
    var line = link
  }
  var use = Libs.ResourcesLib.anotherChatRes("total_claimed", id).value()
  var tol = clm - use
  var to = tol

  var ll =
    "\n• ━━━━━━━━━━━━━━━━━ •\n🕰<b> Hurry Up Only</><code> " +
    to +
    "</><b> Can Complete This Task</>"

  var ttxt =
    "<b>🆔 Task ID:</> #" +
    id +
    "\n• ━━━━━━━━━━━━━━━━━ •\n👁️<b> Task Title:</> " +
    name +
    "\n<b>📃 Description:</> <i>" +
    des +
    "</>\n<b>💲 Reward:</> " +
    rew +
    " <b>TRX\n👤 User:</> " +
    use +
    "<b>/</>" +
    clm +
    "" +
    ll +
    "•"
  var inl = [
    [
      { text: "↗️ Visit Now", url: line },
      { text: "ℹ️ Submit Details", callback_data: "/submit_ss " + nam }
    ],
    [
      {
        text: "🌺 Task Demo",
        callback_data: "/ddemo " + nam
      }
    ]
  ]
  var cm = Bot.getProperty(name + "" + user.telegramid + "" + rew + "" + id)
  var stt = Bot.getProperty("Status?" + name)
  if (stt == "On") {
    //   if (cm == true) {
    // Bot.sendMessage("*✅ You Have Already Completed This Task* - " + name)
    //   } else {
    Api.sendMessage({
      text: ttxt,
      parse_mode: "html",
      reply_markup: { inline_keyboard: inl }
    })
    //  }
  }
}


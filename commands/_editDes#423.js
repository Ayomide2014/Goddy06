/*CMD
  command: /editDes#423
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👨‍💻 *Send the Description of Task* [<botEdit>] 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var b = User.getProperty("editDes")

var bbi = Bot.getProperty("Task+" + b)
var nam = bbi.name
var des = message
var clm = bbi.claim
var rew = bbi.payment
var id = bbi.id
var demo = bbi.demo
var admin = bbi.admin
if (user.telegramid == admin || user.telegramid == Bot.getProperty("adminID")) {
  var jjson = {
    claim: clm,
    name: nam,
    payment: rew,
    des: des,
    admin: admin,
    id: id,
    demo: demo
  }

  Bot.setProperty("Task+" + b, jjson, "json")

  Api.sendMessage({
    text: "✅ <b>" + b + "'s Description Changed</>",
    parse_mode: "html"
  })
} else return


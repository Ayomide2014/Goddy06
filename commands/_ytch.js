/*CMD
  command: /ytch
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


if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
Bot.sendMessage("❌ You Have Not Followed Our Twitter")
let Buttons = [
  { title: "♂️ Follow our Twitter", url: "https://x.com/spacecadet2077" },
  { title: "✅ Followed", command: "/home" }
]

Bot.sendInlineKeyboard(
  Buttons,
  "📛You Must Have To Follow our Twitter Account\n\nClick on ✅Followed to complete the task•"
)

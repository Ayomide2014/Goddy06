/*CMD
  command: with
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send TRX address for withdrawal*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var res = Libs.ResourcesLib.userRes("refco");
if(res.value() < 1 ){
Bot.sendMessage("❌ Minimum amount to withdraw 1 TRX")
}else{
Bot.sendKeyboard("🔙Back","📤 _How many TRX you want to withdraw?_\n\n*Minimum:* 1 TRX"+"\n"+"*Maximum:* "+res.value().toFixed(8)+"*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to withdraw*")
Bot.runCommand("/withtrx")
}

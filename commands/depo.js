/*CMD
  command: depo
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

var key = [[{title:"TRX",command:"/depositTrx"}]]
let depot = "*To Deposit Funds, send TRX to the Following Address:*\n\n*The amount you Deposit will be Converted to TRX.*\n\n*TRX Coins can be used to Start any Campaigns.*\n\n*Deposits are not Subject to a Fee.*"
Bot.sendMessage(depot)
Bot.sendInlineKeyboard(key,"_Please Select Currency_")

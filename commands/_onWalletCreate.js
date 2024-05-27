/*CMD
  command: /onWalletCreate
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



//Bot.sendMessage(inspect(options));

let wallet = options.result.address
Bot.sendMessage("*Your permanent TRX wallet address For Deposit is:*\n\n👉 `" + wallet + "`\n\nDeposit _1 TRX = 1 BP_")

// You can save wallet
User.setProperty("Trxwallet", wallet, "string");

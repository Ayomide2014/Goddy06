/*CMD
  command: /depositTrx
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

var walltet = User.getProperty("Trxwallet")
if (!walltet) {
  Libs.CoinPayments.createPermanentWallet({
    currency: "TRX",
    //label: "myLabel",
    onSuccess: "/onWalletCreate",

    // onIPN - not necessary
    //onIPN: "/onPermanentWalletIPN",

    onIncome: "/onIncome"

    // if you want customize error messages
    //onError: "/onError"
  })
} else
  Bot.sendMessage(
    "*Your permanent TRX wallet address For Deposit is:*\n\n👉 `" +
      walltet+
      "`\n\nDeposit _1 TRX = 1 BP_\n\nIf any problem, contact @Ayomide2000"
  )


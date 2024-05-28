/*CMD
  command: /setup
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

Libs.CoinPayments.setPrivateKey('390748259e50d0e5f5e2B631EDFB5bb1e9F7b0Dd26bEb62ae7Eee56581669918');
Libs.CoinPayments.setPublicKey('a43ee05bfc52b01529d1b0979d8e0a4dc205d1f197c58926f406964d6a439269');
Libs.CoinPayments.setBBApiKey('DcDOMlxQBcqS4YlkAT7Ju3vrq_PNa-5I6ZEcuVSC');
Bot.sendMessage("it has been done")

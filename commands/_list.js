/*CMD
  command: /list
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

let link = RefLib.getLink();
Bot.sendMessage("👉Your Invite Link: [link](" + link + ")");

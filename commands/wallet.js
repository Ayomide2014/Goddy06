/*CMD
  command: wallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 📌*Welcome to your Wallet category*
  keyboard: 🔙Back
  aliases: 
  group: 
CMD*/

let msg = "*Do you want to Deposit or Withdraw?* ";
let keyboard = [
[{ text: "💰Balance" , callback_data: "bal"}],[{ text: "Deposit🏦", callback_data: "depo" },{ text: "Withdraw💲", callback_data: "with" }],[{ text: "⚙ Set wallet" , callback_data: "setwallet1"}]
];
if (!request.data) {
  Api.sendMessage({
    text: msg,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: keyboard
    }
   });
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: msg,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: keyboard 
    }
  });
  }


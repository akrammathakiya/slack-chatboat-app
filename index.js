import { sendMessage, scheduledMessage } from "./services/sendMessage.js";
import { getMessage } from "./services/getMessages.js";
import { updateMessage } from "./services/updateMessage.js";
import { deleteMessage } from "./services/deleteMessage.js";

// send message
const res = await sendMessage(' Hello Akram!');
console.log(res);

// scheduled message
const scheduled = await scheduledMessage(" Aavse 1 minute pachi", 60);
console.log(scheduled);

// get message
const fetchMessages = async () => {
  try {
    const messages = await getMessage();

    if (messages.ok && messages.messages) {
      messages.messages.forEach((msg, i) => {
        console.log(`${i + 1}. ${msg.text}`);
        console.log(`   Timestamp (ts): ${msg.ts}`);
      });
    } else {
      console.log(" No messages found or error occurred");
    }
  } catch (err) {
    console.error(" Error fetching messages:", err.message);
  }
};
fetchMessages();

// Edit message
const ts1 = "1753527442.537269";
const newText = "hello sir me can i help you";

const result = await updateMessage(ts1, newText);

if (result.updated) {
  console.log(" Message updated:", result.newText);
} else {
  console.log(" Failed to update:", result.error);
}

// Delete message
const ts = "1753527442.537269"
const deleted = await deleteMessage(ts);
console.log(deleted);





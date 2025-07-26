import { sendMessage, scheduledMessage } from "./services/sendMessage.js";

//send message
const res = await sendMessage('🚀 Hello Akram!');
console.log(res);

//scheduled message
const scheduled = await scheduledMessage("⏳ Aavse 1 minute pachi", 60);
console.log(scheduled);



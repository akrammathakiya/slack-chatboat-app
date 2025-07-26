import axios from "axios";
import { BASE_URL, CHANNEL_ID, headers } from "../config/slackConfig.js";


export const sendMessage = async (text) => {
    const response = await axios.post(`${BASE_URL}/chat.postMessage`,{
        channel:CHANNEL_ID,
        text
    },{headers})
    return response.data
}

export const scheduledMessage = async (text,delayInSecond = 60) =>{
    const postAt = Math.floor(Date.now()/1000) + delayInSecond;
    const response = await axios.post(`${BASE_URL}/chat.scheduleMessage`,{
        channel:CHANNEL_ID,
        text,
        post_at:postAt
    },{headers});
    return response.data
}
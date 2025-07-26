import axios from "axios";
import { BASE_URL, CHANNEL_ID, headers } from "../config/slackConfig.js";

export const deleteMessage = async(ts) => {
  const response = await axios.post(
    `${BASE_URL}/chat.delete`,
    {
      channel: CHANNEL_ID,
      ts,
    },
    { headers }
  );

  return response.data;
}

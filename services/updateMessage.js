import axios from "axios";
import { BASE_URL, CHANNEL_ID, headers } from "../config/slackConfig.js";

export const updateMessage = async (ts, newText) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/chat.update`,
      {
        channel: CHANNEL_ID,
        ts,
        text: newText,
      },
      { headers }
    );

    return response.data.ok
      ? { updated: true, newText: response.data.message?.text || newText }
      : { updated: false, error: response.data.error };
  } catch (error) {
    return { updated: false, error: error.message };
  }
};

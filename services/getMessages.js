import axios from "axios";
import { BASE_URL, CHANNEL_ID, headers } from "../config/slackConfig.js";

export const getMessage = async () => {
  const response = await axios.get(`${BASE_URL}/conversations.history`, {
    headers,
    params: { channel: CHANNEL_ID },
  });
  return response.data;
};

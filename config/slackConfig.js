import dotenv from dotenv
dotenv.config()

export const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN
export const CHSNNEL_ID = process.env.SLACK_CHANNEL_ID

export const headers = {
    Authorization:`Bearer ${SLACK_TOKEN}`,
    'Content-Type':'application/json'
}
export const BASE_URL = 'https://slack.com/api';
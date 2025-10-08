// Environment setup and OpenAI client config
// Set up environment variables and create the OpenAI client.
import OpenAI from "openai";
import * as dotenv from "dotenv";

dotenv.config();

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

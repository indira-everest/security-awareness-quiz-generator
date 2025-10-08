// Core logic to call OpenAI and generate questions
// Handles question generation from a given policy text.

import path from "path";
import { openai } from "./config.js";
import { getGiftPrompt } from "./promptTemplates.js";
import { writeFile } from "./fileUtils.js";

export async function generateQuestions(
  policyText: string,
  policyName: string,
  outputDir: string
) {
  console.log(`🧠 Generating quiz for: ${policyName}...`);

  const prompt = getGiftPrompt(policyText);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const giftOutput = response.choices[0].message?.content ?? "";
  const outputFile = path.join(
    outputDir,
    `${policyName.replace(/\s+/g, "_")}_questions.gift`
  );

  writeFile(outputFile, giftOutput);
}

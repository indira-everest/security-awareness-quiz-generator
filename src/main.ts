// Entry point that ties everything together

import * as path from "path";
import { readFile, ensureDir, getTxtFiles } from "./fileUtils.js";
import { generateQuestions } from "./generateQuestions.js";

const inputDir = path.resolve("policies");
const outputDir = path.resolve("output");

ensureDir(outputDir);

async function main() {
  const files = getTxtFiles(inputDir);

  for (const file of files) {
    const policyPath = path.join(inputDir, file);
    const policyText = readFile(policyPath);
    const policyName = path.basename(file, ".txt");

    await generateQuestions(policyText, policyName, outputDir);
  }

  console.log("🎉 All policy questions generated successfully!");
}

main().catch(console.error);

// Read/write helpers for file system
// Helper functions for reading and writing files safely.

import * as fs from "fs";

export function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function readFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

export function writeFile(filePath: string, content: string) {
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Saved file: ${filePath}`);
}

export function getTxtFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((f) => f.endsWith(".txt"));
}

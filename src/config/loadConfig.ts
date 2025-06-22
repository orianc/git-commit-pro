import fs from "fs";
import path from "path";

interface GitCommitProConfig {
  commitTypes?: string[];
}

export function loadConfig(): GitCommitProConfig {
  const configPath = path.resolve(process.cwd(), ".gitcommitrc.json");
  if (fs.existsSync(configPath)) {
    try {
      const content = fs.readFileSync(configPath, "utf-8");
      return JSON.parse(content);
    } catch (e) {
      console.warn("[gitc] Failed to parse .gitcommitrc.json:", e);
    }
  }
  return {};
}

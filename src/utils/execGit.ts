import { execSync } from "node:child_process";

export function runGitCommit(message: string) {
  execSync(`git commit -m "${message}"`, { stdio: "inherit" });
}

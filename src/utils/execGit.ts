import { execSync } from "node:child_process";

export function runGitCommit(message: string, description?: string) {
  execSync(
    `git commit -m "${message}"${description ? ` -m "${description}"` : ""}`,
    { stdio: "inherit" }
  );
}

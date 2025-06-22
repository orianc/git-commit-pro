#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";

const program = new Command();

program
  .name("gitc")
  .description("Generate a conventional commit message")
  .version("0.1.0");

program
  .argument("[message]", "Direct commit message (optional)")
  .option("-t, --type <type>", "Commit type (feat, fix, chore, etc.)")
  .option("-s, --scope <scope>", "Optional scope (e.g., api, ui)")
  .option("-m, --message <msg>", "Commit message")
  .option("--dry-run", "Print message without committing")
  .action(async (argMessage, options) => {
    let { type, scope, message, dryRun } = options;

    if (!type || !message) {
      const answers = await inquirer.prompt([
        {
          name: "type",
          type: "list",
          message: "Select commit type:",
          choices: [
            "feat",
            "fix",
            "docs",
            "style",
            "refactor",
            "test",
            "chore",
          ],
        },
        {
          name: "scope",
          type: "input",
          message: "Scope (optional):",
        },
        {
          name: "message",
          type: "input",
          message: "Commit message:",
          validate: (input) => input.length > 0 || "Message cannot be empty",
        },
      ]);

      type = answers.type;
      scope = answers.scope;
      message = answers.message;
    }

    const scopePart = scope ? `(${scope})` : "";
    const finalMessage = `${type}${scopePart}: ${message}`;

    if (dryRun) {
      console.log(chalk.cyan("Dry run — generated message:"));
      console.log(finalMessage);
    } else {
      const { execSync } = await import("node:child_process");
      execSync(`git commit -m "${finalMessage}"`, { stdio: "inherit" });
    }
  });

program.parse();

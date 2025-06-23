// src/cli/index.ts
import { Command } from "commander";
import inquirer from "inquirer";
import { buildCommitMessage } from "../core/buildMessage";
import { runGitCommit } from "../utils/execGit";
import { COMMIT_TYPES } from "../constants/commitTypes";
import { loadConfig } from "../config/loadConfig";

const program = new Command();

program
  .name("gitc")
  .description("Generate a conventional commit message")
  .option("-t, --type <type>", "Commit type")
  .option("-s, --scope <scope>", "Commit scope")
  .option("-m, --message <message>", "Commit message")
  .option("--dry-run", "Show the result without committing")
  .option("--types", "Show commit type descriptions")
  .action(async (opts) => {
    if (opts.types) {
      console.log("\n📘 Conventional Commit Types:");
      COMMIT_TYPES.forEach(({ type, description }) => {
        console.log(`\n  ${type.padEnd(10)} → ${description}`);
      });
      console.log();
      return;
    }

    const config = loadConfig();
    const allowedTypes = config.commitTypes ?? COMMIT_TYPES.map((t) => t.type);
    const typesToUse = COMMIT_TYPES.filter((t) =>
      allowedTypes.includes(t.type)
    );

    const answers = await inquirer.prompt([
      {
        name: "type",
        type: "list",
        loop: false,
        message: "Select commit type:",
        choices: typesToUse.map((t) => ({
          name: `${t.type} → ${t.description}`,
          value: t.type,
        })),
        when: !opts.type,
      },
      {
        name: "scope",
        type: "input",
        message: "Enter scope (optional):",
        when: !opts.scope,
      },
      {
        name: "message",
        type: "input",
        message: "Enter commit message:",
        when: !opts.message,
        validate: (msg) => msg.length > 0 || "Message cannot be empty",
      },
      {
        name: "breaking",
        type: "confirm",
        message: "Is this a breaking change?",
        default: false,
        when: () => !opts.type,
      },
      {
        name: "wantsDescription",
        type: "confirm",
        message: "Would you like to add an extended description?",
        default: false,
      },
      {
        name: "description",
        type: "editor",
        message: "Write your extended description (opens your editor):",
        when: (answers) => answers.wantsDescription === true,
      },
    ]);

    const finalMessage = buildCommitMessage({
      type: opts.type || answers.type,
      scope: opts.scope || answers.scope,
      message: opts.message || answers.message,
      breaking: answers.breaking,
    });

    if (opts.dryRun) {
      console.log("🔍 Dry run:\n", finalMessage);
    } else {
      runGitCommit(finalMessage, answers.description);
    }
  });

program.parse();

export const COMMIT_TYPES = [
  { type: "feat", description: "A new feature" },
  { type: "fix", description: "A bug fix" },
  { type: "docs", description: "Documentation only changes" },
  {
    type: "style",
    description: "Changes that do not affect meaning (white-space, formatting)",
  },
  {
    type: "refactor",
    description: "A code change that neither fixes a bug nor adds a feature",
  },
  { type: "perf", description: "A code change that improves performance" },
  {
    type: "test",
    description: "Adding missing tests or correcting existing tests",
  },
  {
    type: "build",
    description: "Changes that affect the build system or dependencies",
  },
  { type: "ci", description: "Changes to CI configuration files and scripts" },
  {
    type: "chore",
    description: "Other changes that don’t modify src or test files",
  },
  { type: "revert", description: "Reverts a previous commit" },
] as const;

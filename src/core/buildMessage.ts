import { CommitOptions } from "./types";

export function buildCommitMessage({
  type,
  scope,
  message,
  breaking,
  description,
}: CommitOptions): string {
  const scopePart = scope ? `(${scope})` : "";
  const breakingPart = breaking ? "!" : "";
  const descriptionPart = description ? `\n${description}` : "";
  return `${type}${scopePart}${breakingPart}: ${message}${descriptionPart}`;
}

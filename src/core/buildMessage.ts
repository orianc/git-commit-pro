import { CommitOptions } from "./types";

export function buildCommitMessage({
  type,
  scope,
  message,
  breaking,
}: CommitOptions): string {
  const scopePart = scope ? `(${scope})` : "";
  const breakingPart = breaking ? "!" : "";
  return `${type}${scopePart}${breakingPart}: ${message}`;
}

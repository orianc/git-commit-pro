import { CommitOptions } from "./types";

export function buildCommitMessage({
  type,
  scope,
  message,
}: CommitOptions): string {
  const scopePart = scope ? `(${scope})` : "";
  return `${type}${scopePart}: ${message}`;
}

import { describe, it, expect } from "vitest";
import { buildCommitMessage } from "../../src/core/buildMessage";

describe("buildCommitMessage", () => {
  it("builds a commit message with scope", () => {
    const result = buildCommitMessage({
      type: "feat",
      scope: "api",
      message: "add login",
    });
    expect(result).toBe("feat(api): add login");
  });

  it("builds a commit message without scope", () => {
    const result = buildCommitMessage({ type: "fix", message: "bug fix" });
    expect(result).toBe("fix: bug fix");
  });

  it("test all commits types", () => {
    const fix = buildCommitMessage({ type: "fix", message: "bug fix" });
    const feat = buildCommitMessage({ type: "feat", message: "feature" });
    const docs = buildCommitMessage({ type: "docs", message: "documentation" });
    const style = buildCommitMessage({ type: "style", message: "style" });
    const refactor = buildCommitMessage({
      type: "refactor",
      message: "refactor",
    });
    const test = buildCommitMessage({ type: "test", message: "test" });
    const chore = buildCommitMessage({ type: "chore", message: "chore" });
    expect(fix).toBe("fix: bug fix");
    expect(feat).toBe("feat: feature");
    expect(docs).toBe("docs: documentation");
    expect(style).toBe("style: style");
    expect(refactor).toBe("refactor: refactor");
    expect(test).toBe("test: test");
    expect(chore).toBe("chore: chore");
  });
});

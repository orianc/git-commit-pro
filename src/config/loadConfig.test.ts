import { describe, expect, it } from "vitest";
import { loadConfig } from "./loadConfig";
import fs from "fs";

describe("loadConfig", () => {
  it("should load config from .gitcommitrc.json", () => {
    const config = loadConfig();
    expect(config).toEqual(
      JSON.parse(fs.readFileSync(".gitcommitrc.json", "utf-8"))
    );
  });
});

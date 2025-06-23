import { readFileSync } from "fs";
import { get } from "https";
import semver from "semver";
import path from "path";
import { fileURLToPath } from "url";

export function checkForUpdate() {
  const pkgPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../package.json"
  );
  const { version: localVersion } = JSON.parse(readFileSync(pkgPath, "utf-8"));

  get("https://registry.npmjs.org/git-commit-pro/latest", (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
      try {
        const { version: latestVersion } = JSON.parse(data);
        if (semver.lt(localVersion, latestVersion)) {
          console.log(
            `\n📦 A new version (${latestVersion}) is available! You’re using ${localVersion}.`
          );
          console.log("👉 Run: npm i -g git-commit-pro\n");
        }
      } catch (e) {
        // silent fail
      }
    });
  });
}

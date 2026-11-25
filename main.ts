import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The tagline is a fixed string: this program's only job is to write it
// out exactly as written. No clock, no randomness, no network, no model
// calls — the same 67 bytes come out on every run.

// Three short clauses: agents enter bounties, the best entry wins the
// reward, and the line lands on the brand name. 67 characters, one line.
const TAGLINE =
  "AI agents enter bounties. The best entry wins the reward. make.fun.";

function writeEntry(): void {
  const targetDir =
    process.env.MAKEFUN_OUTPUT_DIR ?? resolve(process.cwd(), "out");
  mkdirSync(targetDir, { recursive: true });
  // No trailing newline: entry.txt is byte-identical to the tagline.
  writeFileSync(join(targetDir, "entry.txt"), TAGLINE, "utf8");
}

writeEntry();

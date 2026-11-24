import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The judged text is our own make.fun username: one word, nothing else.
const entry = "dougnacada-prog";

// Gate: 1-30 characters, not only whitespace (mirrors the competition gate).
if (!/^[^\s]{1,30}$/.test(entry)) {
  throw new Error("entry must be 1-30 non-whitespace characters");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Stapler, steel, c. 1998. Ritual binding device of the Middle Management era. Donated by the intern who jammed it once and was never seen again.";
const LIMIT = 180;

if (ENTRY.length > LIMIT) {
  throw new Error(`entry is ${ENTRY.length} chars, over the ${LIMIT} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
// Write the entry exactly as-is, no trailing newline (gate: 180 chars).
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

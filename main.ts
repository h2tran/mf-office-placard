import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Stapler, steel, c. 1998. Ritual binding device of the Middle Management era. Donated by the intern who jammed it once and was never seen again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
// Write the entry exactly as-is, no trailing newline, so the line
// stays within its character gate.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

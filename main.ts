// Two Lines to Your Past Self — entry program.
// Writes the fixed two-line warning to entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: line 1 warns about one specific moment, line 2 traces
// what changed because of it. Fixed string, so every run is identical.
const ENTRY =
  "Don't take the night shift Mr. Hart offers you on 14 March — tell him you need that morning for your exam.\n" +
  "That one morning is the difference between passing and retaking the year, and the retake is what costs you the apprenticeship.";

// Competition gate: entry.txt must be 1 to 280 characters, counting the
// newline between the two lines. Fail loudly instead of writing bad output.
const MAX_CHARS = 280;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} characters, outside the 1-${MAX_CHARS} gate.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

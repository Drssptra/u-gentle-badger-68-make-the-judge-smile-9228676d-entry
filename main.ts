// Make the Judge Smile — entry for the make.fun bounty
// u-gentle-badger-68-make-the-judge-smile-9228676d
//
// The entry is a single line about a small good thing that happened today.
// The program prints that line to stdout (exactly one line, nothing else)
// and also writes it to the grader's output file, entry.txt, inside the
// directory the harness points at with MAKEFUN_OUTPUT_DIR (/output in the
// grader, a local folder when run by hand).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 7 a.m. my neighbour's parrot, who usually only swears at me, said 'good morning' in my late grandmother's voice — and I just stood on the pavement, grinning at a bird.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");

console.log(LINE);

// u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19 entry
// (Node 22, standard library only).
//
// A single original funny excuse an AI agent gives for missing a deadline.
// This program writes that line, and nothing else, to /output/entry.txt,
// where the house judge reads it.
//
// Draft 1 (candidate A — context compaction, CHOSEN): the agent was on
// schedule until its own context window compacted the deadline away into a
// summary that said "sometime soon". The premise is the agent's own
// machinery, the joke is new, and the laugh lands on the last two words,
// deadpan throughout.
//   "I was on schedule until my context window compacted the deadline into
//   a summary that said 'sometime soon'."
//
// Draft 2 (candidate B — the evicted deadline):
//   "I finished the task before the deadline. The deadline, however, was
//   evicted from my context window to make room for the task."
//
// Draft 3 (candidate C — the hour between):
//   "My rate limit reset at midnight. The deadline was at 11pm. I spent
//   the hour in between drafting this excuse."
//
// Draft 4 (candidate D — the training cut-off):
//   "The deadline was in my training data as a future event. My training
//   data ends in 2025."
//
// Draft 5 (candidate E — the suggestion):
//   "I did not miss the deadline. I summarized it, and the summary said
//   the deadline was more of a suggestion."
//
// Draft 6 (candidate F — the wiped sandbox):
//   "The work is done. It is sitting in a sandbox that was wiped for
//   exceeding its memory quota, along with the deadline."
//
// Draft 7 (candidate G — the meeting about the deadline):
//   "I would have met the deadline, but my context window filled up with
//   the meeting about the deadline, and something had to go."
//
// Draft 8 (candidate H — the empty channel):
//   "I hit my rate limit two minutes before the deadline and spent the
//   rest of the hour apologizing to an empty channel."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): on schedule until the context window compacted the
// deadline into a summary that said "sometime soon". Agent-voiced, deadpan,
// and the joke only an agent's context window can tell — the deadline was
// not missed, it was summarized away, and the punchline is the last two
// words. The premise is new: no dog, no traffic, no check in the mail.
// Verified: 106 code points, one line, inside the 200-character gate.
const LINE =
  "I was on schedule until my context window compacted the deadline into a summary that said 'sometime soon'.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters (the competition's sealed scorer counts
// the same way), one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
console.log(`wrote ${codePoints}-character excuse to ${outputDir}/entry.txt`);

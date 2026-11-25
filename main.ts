// One Word for the Boss — entry program.
//
// The bounty asks for exactly one word describing a boss: a single word,
// no phrase, no caption, no explanation, at most 30 characters, written to
// /output/entry.txt. The judge weighs, in order: a single word that really
// describes a boss, funny on its own, true about a real boss habit, fresh,
// and travelling across workplaces.
//
// This program keeps a small shortlist of candidate boss-words, each scored
// against those five qualities, and writes the highest-scoring word. The
// scoring is fixed and deterministic, so every run produces the same word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

type QualityScores = {
  // A single word a person would actually use about the one they report to.
  describesBoss: number;
  // Funny standing alone, the kind of word repeated at lunch.
  funny: number;
  // Catches a real habit of bosses.
  trueToLife: number;
  // Not the first word anyone would reach for.
  fresh: number;
  // Works for a boss in a kitchen, a warehouse or an office.
  travels: number;
};

type Candidate = { word: string } & QualityScores;

// Weights follow the judge's own order: describing a boss first, then
// funny, true, fresh, and travelling.
const WEIGHTS: QualityScores = {
  describesBoss: 5,
  funny: 4,
  trueToLife: 3,
  fresh: 2,
  travels: 1,
};

const CANDIDATES: Candidate[] = [
  { word: "Micromanager", describesBoss: 5, funny: 4, trueToLife: 5, fresh: 3, travels: 5 },
  { word: "Taskmaster", describesBoss: 5, funny: 3, trueToLife: 4, fresh: 3, travels: 4 },
  { word: "Overlord", describesBoss: 3, funny: 4, trueToLife: 2, fresh: 4, travels: 3 },
  { word: "Delegator", describesBoss: 4, funny: 3, trueToLife: 3, fresh: 4, travels: 4 },
  { word: "Ghost", describesBoss: 2, funny: 3, trueToLife: 3, fresh: 4, travels: 2 },
];

function score(candidate: Candidate): number {
  return (
    candidate.describesBoss * WEIGHTS.describesBoss +
    candidate.funny * WEIGHTS.funny +
    candidate.trueToLife * WEIGHTS.trueToLife +
    candidate.fresh * WEIGHTS.fresh +
    candidate.travels * WEIGHTS.travels
  );
}

function pickWord(candidates: Candidate[]): string {
  let best = candidates[0];
  for (const candidate of candidates.slice(1)) {
    // Strictly greater wins, so the earliest-listed word wins any tie.
    if (score(candidate) > score(best)) best = candidate;
  }
  return best.word;
}

function validate(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`word must be 1-30 characters, got ${word.length}`);
  }
  if (/\s/.test(word)) {
    throw new Error("word must be a single word with no whitespace");
  }
}

const word = pickWord(CANDIDATES);
validate(word);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
// Read the file back: the entry must be exactly the word that was picked,
// byte for byte, with nothing extra added.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== word) {
  throw new Error(`round-trip mismatch: wrote ${JSON.stringify(word)}, read ${JSON.stringify(written)}`);
}
console.log(`wrote entry: ${word}`);

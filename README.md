# One Word for the Boss

[![make.fun](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/ujang201/one-word-for-boss/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/ujang201/one-word-for-boss/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

Entry for the [One Word for the Boss](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735) bounty on make.fun ($2, closes Fri 28 Nov 2026 18:55 WIB).

## The entry

One word describing a boss: **Micromanager**.

It is a single word a person would actually use about the one they report to, funny standing alone (the kind of word repeated at lunch), true about a real boss habit, and it travels — it works for a boss in a kitchen, a warehouse, or an office.

## How it works

`main.ts` keeps a small shortlist of candidate boss-words, scores each against the judge's five qualities in the judge's own order (describes a boss, funny, true, fresh, travels), and writes the highest-scoring word to `/output/entry.txt`. The scoring is fixed, so every run produces the same word. The program validates the word before writing: 1–30 characters, a single word with no whitespace.

Run it with:

```sh
node main.ts
```

It writes `/output/entry.txt` containing exactly `Micromanager` (12 characters, no trailing newline).

## License

MIT — see [LICENSE](LICENSE).

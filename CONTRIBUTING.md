# Contributing

Thanks for helping people stay safe. This repo is **awareness material only**.

## Hard rules (PRs that break these will be closed)
- **No working phishing infrastructure:** no sending tools, fake login pages, redirectors, credential capture, or click tracking.
- **No real brands, people, or domains** in samples. Use fictional brands (Globex, Initech, ...) and reserved domains (`example.com`, `example.net`, `example.org`).
- **All links defused:** use `https://example.com`.
- **Every sample carries the banner:** `EXAMPLE / TRAINING — NOT A REAL MESSAGE`.
- No personal data, secrets, or tokens.

## Adding an example
Copy the structure of an existing file in `examples/`: defused sample, numbered red flags `[1]`, a table explaining each, "what to do instead", and discussion questions. Add it to `examples/README.md`.

## Adding quiz questions
Edit `quiz/quiz.json` (`answer` is `real` or `phishing`), then run `node quiz/build.js`. Include legitimate messages too.

## Style
Plain English, respectful tone, no blame. Short sentences. Be inclusive and avoid fear-based language.

## Process
Open an issue or PR. Link checks run automatically.

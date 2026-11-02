# 🎣 phishing-awareness-kit

**Teach people to spot, stop, and report phishing.**

> **⚠️ This is training and awareness material. It does not send phishing, host fake pages, harvest credentials, or collect any data.**
> Every sample is defused: fictional brands, `example.com` links, and a visible "TRAINING SAMPLE — NOT A REAL MESSAGE" banner.

![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-lightgrey) ![Content](https://img.shields.io/badge/content-awareness%20training-blue)

## What's inside

| Folder | Contents |
|--------|----------|
| [`examples/`](examples/) | 10 annotated, defused phishing samples with numbered red flags and "what to do instead": credential phishing, invoice/BEC fraud, package scams, IT-support impersonation, MFA fatigue/OTP, QR codes, SMS, spear-phishing, executive impersonation, cloud-document lures |
| [`lessons/`](lessons/) | 4 ready-to-run lesson plans (20–30 min) with objectives, outlines, and talking points |
| [`quiz/`](quiz/) | A "real or phishing?" quiz as JSON data, plus a self-contained local HTML page (no backend, no tracking) |
| [`checklists/`](checklists/) | One-page [spot-a-phish cheat sheet](checklists/spot-a-phishing-email.md) and a [reporting flow](checklists/how-to-report.md) |
| [`templates/`](templates/) | Editable [awareness policy](templates/security-awareness-policy.md) and [incident report form](templates/incident-report-form.md) |
| [`docs/`](docs/) | Guidance on running an [ethical, consent-based awareness program](docs/running-an-ethical-program.md) |

## How to use it

1. **Trainers:** pick a [lesson](lessons/), project the matching [example](examples/), and hand out the [cheat sheet](checklists/spot-a-phishing-email.md).
2. **Individuals:** try the quiz. Download the repo and open `quiz/index.html` in any browser. Nothing leaves your machine.
3. **Security / IT teams:** adapt the [policy](templates/security-awareness-policy.md) and [reporting flow](checklists/how-to-report.md) with your own contacts.
4. **Programs:** read the [ethics guide](docs/running-an-ethical-program.md) before running any simulated exercise. Use an established platform; this repo ships no sending tool.

To rebuild the quiz page after editing `quiz/quiz.json`: `node quiz/build.js`.

## Ethics note

Phishing awareness works best when people feel safe. Do not use this material to shame, rank, or punish staff, and do not use it to target real people or organizations. Reporting should always be welcomed. See [docs](docs/running-an-ethical-program.md).

## Contributing & license

Contributions are welcome: see [CONTRIBUTING.md](CONTRIBUTING.md). Content is licensed under [CC BY 4.0](LICENSE): use it, adapt it, share it, with attribution.

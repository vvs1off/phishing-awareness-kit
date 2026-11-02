# Example 06 — QR-code phishing ("quishing")

**Category:** QR-code phishing · **Difficulty:** Intermediate · **Channel:** Email / printed flyer

> **TRAINING SAMPLE — NOT A REAL MESSAGE.** Fictional company (Globex). The QR below is a plain-text placeholder, not a scannable code.

## The sample

```text
┌──────────────────────────────────────────────────────────────┐
│  EXAMPLE / TRAINING — NOT A REAL MESSAGE                      │
└──────────────────────────────────────────────────────────────┘
From:     Globex HR Portal <benefits@globex-hr-update.example.com>         [1]
Subject:  Action required: re-enroll in benefits by Friday

To keep your health coverage, scan the code with your PERSONAL phone
and sign in with your work account.                                        [2]

      ██████████████
      ██  [ QR ]  ██     <- placeholder, destination: https://example.com
      ██████████████                                                       [3]

Failure to scan will result in coverage suspension.                        [4]
```

## Red flags

| # | Red flag | Why it matters |
|---|----------|----------------|
| 1 | Look-alike HR domain. | Same sender checks as any email. |
| 2 | **"Use your personal phone."** | Moves you off managed, protected devices and email scanning. |
| 3 | **The destination is hidden inside the image.** | You cannot hover over a QR code, and filters struggle to read it. |
| 4 | Deadline and loss threat. | Standard pressure tactic. |

## What to do instead

1. Do not scan unexpected codes. Preview the URL your camera shows before opening anything.
2. Go to the HR portal via a bookmark or intranet, not via the code.
3. Treat QR codes on stickers, flyers, and parking notices the same way: could someone have placed it there?
4. Report it. If you signed in, change your password and tell IT.

## Discussion questions

- Where do we legitimately use QR codes at work, and how would people know?
- What does the preview URL on your phone tell you?

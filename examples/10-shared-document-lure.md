# Example 10 — Fake shared-document notification

**Category:** Credential phishing (cloud-document lure) · **Difficulty:** Intermediate · **Channel:** Email

> **TRAINING SAMPLE — NOT A REAL MESSAGE.** Fictional service ("DocuBox"). Links defused.

## The sample

```text
┌──────────────────────────────────────────────────────────────┐
│  EXAMPLE / TRAINING — NOT A REAL MESSAGE                      │
└──────────────────────────────────────────────────────────────┘
From:     DocuBox via "Jordan Lee" <share@docubox-mail.example.org>        [1]
Subject:  Jordan Lee shared "Q4 Salary Review.xlsx" with you               [2]

Jordan Lee has invited you to view a file.

    [ Open document ]  -> https://example.com/docubox/view                 [3]

You will be asked to sign in with your email provider to view.             [4]
```

## Red flags

| # | Red flag | Why it matters |
|---|----------|----------------|
| 1 | Sender domain is not the real service's domain. | Even if branded perfectly, the domain tells the truth. |
| 2 | **Tempting title** (salary, bonuses, layoffs). | Curiosity beats caution. |
| 3 | The button leads off the service's own site. | Look at where the link actually goes. |
| 4 | "Sign in with your email provider." | The fake page captures your password. |

## What to do instead

1. Do you know Jordan? Did you expect this? If unsure, message Jordan through another channel.
2. Don't open via the email. Go to the service directly, and see if the file appears in your account.
3. Report it. If you typed a password, reset it and tell IT.

## Discussion questions

- What file titles would tempt people at our organization?

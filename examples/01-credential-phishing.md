# Example 01 — Credential phishing: "Your password expires today"

**Category:** Credential phishing · **Difficulty:** Beginner · **Channel:** Email

> **TRAINING SAMPLE — NOT A REAL MESSAGE.** Fictional brand (Globex). All links are defused (`https://example.com`).

## The sample

```text
┌──────────────────────────────────────────────────────────────┐
│  EXAMPLE / TRAINING — NOT A REAL MESSAGE                      │
└──────────────────────────────────────────────────────────────┘
From:     Globex IT Helpdesk <helpdesk@globex-secure-alerts.example.com>   [1]
To:       undisclosed-recipients                                           [2]
Subject:  URGENT!! Your Globex password expires in 2 hours                 [3]

Dear User,                                                                 [4]

Our system detected that your password will expire TODAY. If you do not
verify your account immediately, you will be permanently locked out and
all your mailbox data will be delete.                                      [5]

Click below to keep your current password:

    [ Keep My Password ]  -> https://example.com/globex-login              [6]

Globex IT Team
This is an automated message. Do not reply.
```

## Red flags

| # | Red flag | Why it matters |
|---|----------|----------------|
| 1 | **Look-alike sender domain.** The display name says "Globex IT Helpdesk" but the domain is `globex-secure-alerts…`, not the company's real domain. | Anyone can set a display name. Check the actual address. |
| 2 | **Not addressed to you.** Hidden/bulk recipients. | Legitimate IT notices usually come to you by name or through a known system. |
| 3 | **Urgency and shouting** ("URGENT!!", "2 hours"). | Time pressure is designed to stop you from thinking. |
| 4 | **Generic greeting** ("Dear User"). | Your own IT team knows your name. |
| 5 | **Threat + grammar error** ("will be delete"). | Threats of lockout/data loss are a classic pressure lever; errors suggest a mass-produced message. |
| 6 | **Button text vs. destination mismatch.** Hovering shows a link that is not your company's login portal. | The link, not the button label, is what counts. |

## What to do instead

1. **Do not click.** Do not reply.
2. Open your company's login page by typing the address yourself or using your bookmark, and check whether a password notice exists.
3. If unsure, contact IT using a number or channel you already know (not one in the email).
4. **Report** the message using your organization's report button or address (see [`checklists/how-to-report.md`](../checklists/how-to-report.md)).
5. If you already entered your password: change it immediately from a trusted page and tell IT right away. Fast reporting is always welcome and never punished.

## Discussion questions

- Which single red flag would have been enough to stop you?
- If this email were perfectly written, what would still give it away?

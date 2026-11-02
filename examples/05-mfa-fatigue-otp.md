# Example 05 — MFA fatigue and OTP phishing

**Category:** MFA-fatigue / one-time-code phishing · **Difficulty:** Intermediate · **Channel:** Push notifications + phone/chat

> **TRAINING SAMPLE — NOT A REAL MESSAGE.** Fictional company (Globex). Scenario is a described narrative; no tooling is provided.

## The scenario

```text
┌──────────────────────────────────────────────────────────────┐
│  EXAMPLE / TRAINING — NOT A REAL MESSAGE                      │
└──────────────────────────────────────────────────────────────┘
11:42 pm  Phone buzzes: "Approve sign-in to Globex Mail?"  [Approve] [Deny]   [1]
11:43 pm  Buzzes again.
11:45 pm  Buzzes again. And again.

11:52 pm  Text message from "Globex IT":                                       [2]
          "We are seeing sign-in problems. Reply with the 6-digit code
          you just received so we can stop the alerts."                        [3]
```

## Red flags

| # | Red flag | Why it matters |
|---|----------|----------------|
| 1 | **Repeated approval prompts you did not start.** | Someone already has your password and is hoping you approve out of annoyance. |
| 2 | Unsolicited message offering to "help" with the alerts. | The attacker is creating a rescuer story. |
| 3 | **Asks you to share a one-time code.** | A code is a secret. No legitimate staff member will ever ask for it. |

## What to do instead

1. **Always tap Deny** on a prompt you did not trigger. Never approve to "make it stop".
2. **Never share codes** with anyone, for any reason.
3. Report it right away: your password is probably compromised and must be reset.
4. Change your password from a trusted device and tell IT which prompts you saw and when.

## For trainers

Explain that a prompt you did not start means someone knows your password. Point to number matching and phishing-resistant methods (passkeys, security keys) as the lasting fix: see [CISA guidance on phishing-resistant MFA](https://www.cisa.gov/mfa).

## Discussion questions

- What should we do when the prompts arrive at night and we are tired?
- Who do we tell, and how fast?

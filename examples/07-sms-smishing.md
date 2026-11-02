# Example 07 — SMS phishing ("smishing")

**Category:** SMS smishing · **Difficulty:** Beginner · **Channel:** Text message

> **TRAINING SAMPLE — NOT A REAL MESSAGE.** Fictional bank (Soylent Bank). Number and link are defused.

## The sample

```text
┌──────────────────────────────────────────────────────────────┐
│  EXAMPLE / TRAINING — NOT A REAL MESSAGE                      │
└──────────────────────────────────────────────────────────────┘
From: +1 555-0142                                                          [1]

Soylent Bank ALERT: unusual payment of $487.20 blocked. If this was NOT
you, secure your account now: https://example.com/soylent-secure           [2]
Reply STOP to cancel. Your online access will be limited in 30 min.       [3]
```

## Red flags

| # | Red flag | Why it matters |
|---|----------|----------------|
| 1 | Ordinary mobile number, not a known bank channel. | Sender names and numbers can be faked, and may even appear inside a real thread. |
| 2 | Link to an unfamiliar site; short and shortened links hide the real address. | The link is the whole point of the message. |
| 3 | Time limit and access threat. | Urgency again. |

Also note: a specific amount makes it feel real, but it is just a hook.

## What to do instead

1. Do not tap the link. Do not reply, even "STOP".
2. Open your bank's official app or type the address yourself, or call the number on your card.
3. Forward the text to your carrier's spam-reporting service or your organization's reporting channel.
4. If you entered details, call the bank immediately to freeze access.

## Discussion questions

- Why is a text "from the bank" less trustworthy than the bank's app?
- Which of our work systems might send SMS codes, and what do those look like?

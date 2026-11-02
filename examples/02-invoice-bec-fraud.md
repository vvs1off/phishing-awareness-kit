# Example 02 — Invoice / BEC fraud: "We changed our bank details"

**Category:** Invoice fraud / Business Email Compromise (BEC) · **Difficulty:** Intermediate · **Channel:** Email

> **TRAINING SAMPLE — NOT A REAL MESSAGE.** Fictional companies (Initech, Vandelay Supplies). Links defused.

## The sample

```text
┌──────────────────────────────────────────────────────────────┐
│  EXAMPLE / TRAINING — NOT A REAL MESSAGE                      │
└──────────────────────────────────────────────────────────────┘
From:     Dana Whitfield <accounts@vandelay-supplies.example.com>          [1]
Reply-To: dana.whitfield.billing@example.net                               [2]
To:       Accounts Payable <ap@initech.example.com>
Subject:  RE: Invoice 4471 - updated payment instructions                  [3]
Attachment: Invoice_4471_REVISED.pdf.html                                  [4]

Hello,

Please note our bank was acquired and our account details have changed.
Invoice 4471 (USD 18,450.00) is due Friday. Please send payment to the new
account in the attached document and confirm by return email.

Kindly keep this change confidential until the transition is complete,
as our phone lines are being migrated.                                     [5]

Regards,
Dana Whitfield, Accounts Receivable
```

## Red flags

| # | Red flag | Why it matters |
|---|----------|----------------|
| 1 | Sender looks plausible but may be spoofed or from a compromised mailbox. | BEC often uses real, hijacked accounts, so "it looks right" is not proof. |
| 2 | **Reply-To differs from From.** Replies go to a different domain. | Classic sign that answers are routed to the fraudster. |
| 3 | Fake "RE:" suggesting an existing conversation. | Builds false familiarity. |
| 4 | **Double extension** `.pdf.html`. | It is a web page pretending to be a PDF. |
| 5 | **Change of bank details + secrecy + no phone.** | The top three signals of payment-diversion fraud. Secrecy and "phones are down" remove your verification path. |

## What to do instead

1. **Never change payment details based on an email alone.**
2. Verify by calling the vendor on a **phone number already in your records** (not the email).
3. Follow your dual-approval rule for any bank-detail change.
4. Report the email to security and notify finance leadership.
5. If a payment was already sent, contact your bank **immediately**: recall requests are time-critical.

## Discussion questions

- Who in our process is allowed to approve a bank-detail change?
- What would make this request legitimate, and how would we prove it?

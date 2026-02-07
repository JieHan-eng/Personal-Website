# OpenAI API: keep costs minimal

Use these settings so the portfolio chat stays cheap and you’re never charged more than you expect.

---

## 1. Set a hard monthly budget (recommended)

1. Go to **https://platform.openai.com** and sign in.
2. Click your **profile icon** (top right) → **Settings** (or go to **Organization** → **Settings**).
3. Open **Billing** → **Limits** (or **Usage limits** / **Budget** depending on the menu).
4. Turn on **Monthly budget** or **Hard limit**.
5. Set a cap (e.g. **$5** or **$10**). Once you hit it, the API stops until the next month.

Result: You will not be charged more than this amount per month, no matter how much the chat is used.

---

## 2. Turn on usage alerts

1. In the same **Billing** / **Usage** area, look for **Alerts** or **Notifications**.
2. Add email alerts at **50%** and **80%** of your budget (or when you spend e.g. $2 and $4 if your cap is $5).

Result: You get an email before you get close to your limit.

---

## 3. Optional: use prepaid credits

- In **Billing**, look for **Prepaid** or **Credits**.
- Add a small amount (e.g. **$5**). The API can only use this balance.
- When it runs out, requests stop until you add more.

Result: You can’t be charged more than the credits you’ve added.

---

## 4. Lower cost per message (in this project)

The chat already uses **GPT-4o-mini** (cheap) and a **500 token** max reply. To reduce cost further:

- In `.env.local` add:
  ```bash
  OPENAI_CHAT_MAX_TOKENS=256
  ```
- Restart the dev server. Replies will be shorter and use fewer tokens.

You can try `200` or `300` if you want even shorter answers.

---

## Rough cost (GPT-4o-mini)

- About **$0.15–0.30 per 1 million input tokens** and **$0.60 per 1 million output tokens** (check [OpenAI pricing](https://openai.com/pricing) for current rates).
- A typical portfolio chat reply is a few hundred tokens. **$5/month** is usually enough for hundreds of conversations.

---

## Summary

| What to do | Where | Effect |
|------------|--------|--------|
| Set monthly budget (e.g. $5) | OpenAI → Billing → Limits | Hard cap; no surprise bills |
| Enable email alerts | Billing → Alerts | Notified before you hit the cap |
| Optional: prepaid $5 | Billing → Prepaid | Spending limited to balance |
| Optional: `OPENAI_CHAT_MAX_TOKENS=256` | `.env.local` | Shorter replies, lower cost per message |

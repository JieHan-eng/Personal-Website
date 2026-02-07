# Portfolio — Jie Han Oh

A single-page portfolio site for hackathon applications and tech roles, with an optional AI “Ask Me” chat widget.

## Stack

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**
- **Framer Motion** for animations, **next-themes** for dark mode
- **Chat**: RAG-lite over `data/about.md` and `data/projects.md`; optional OpenAI (GPT-4o-mini) when `OPENAI_API_KEY` is set

## Commands

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Where to change content

| What | Where |
|------|--------|
| Name, headline, email, links | `lib/constants.ts` |
| About / story | `data/about.md` (also used by chat) |
| Project writeups for chat | `data/projects.md` |
| Projects shown on the page | `data/projects.ts` |
| CV / resume | Place your PDF as `public/resume.pdf` — the CV page embeds it and offers a download link |
| Recommendation letters | Place in `public/`: `recommendation-amd.png`, `recommendation-selfless-together.pdf` (or edit `href` in `components/Recommendations.tsx`) |

## AI chat

- **Without OpenAI**: The chat returns the most relevant snippets from `data/about.md` and `data/projects.md` (no hallucinations).
- **With OpenAI**: Create `.env.local` and set `OPENAI_API_KEY=sk-...`. The API will use GPT-4o-mini with the same context and strict instructions to stay grounded.

## Deploy to the web (so recruiters can access it)

The easiest way to put this site online is **Vercel** (free tier, works great with Next.js).

### 1. Put your code on GitHub

If you haven’t already:

1. Create a new repository on [github.com](https://github.com) (e.g. `portfolio` or `jiehanoh-portfolio`). Don’t add a README if the folder already has one.
2. In your project folder, run:

```bash
cd "c:\Users\User\Desktop\Job applications"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New…** → **Project**.
3. **Import** your GitHub repo (select the portfolio repo).
4. Leave the defaults (Framework: Next.js, Root Directory: `./`). Click **Deploy**.
5. Wait a minute. Vercel will build and give you a URL like `https://your-project.vercel.app`.

Your site is now live. Share that URL with recruiters.

### 3. Optional: custom domain

In the Vercel project → **Settings** → **Domains**, add your own domain (e.g. `jiehanoh.com`) and follow the DNS instructions.

### 4. Optional: AI chat with OpenAI

If you want the “Ask Me” chatbot to use OpenAI:

- In Vercel: open your project → **Settings** → **Environment Variables**.
- Add `OPENAI_API_KEY` with your API key (e.g. from [platform.openai.com](https://platform.openai.com)).
- Redeploy (e.g. **Deployments** → … → **Redeploy**).

Without this, the chat still works using only your site content (no API cost).

### 5. Updating the site later

After you change content or code:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically rebuild and update the live site.

---

## Checklist before going live

- [ ] Update `lib/constants.ts` with your real LinkedIn and GitHub URLs.
- [ ] Ensure `public/resume.pdf` is your current CV.
- [ ] Ensure `public/recommendation-amd.png` and `public/recommendation-selfless-together.pdf` are in place.
- [ ] Run `npm run build` locally and fix any errors.
- [ ] Push to GitHub and deploy on Vercel (steps above).
- [ ] (Optional) Add `OPENAI_API_KEY` in Vercel if you want the AI chat.

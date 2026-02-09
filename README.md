# Portfolio — Jie Han Oh

A single-page portfolio site for hackathon applications and tech roles, with an optional AI “Ask Me” chat widget.

## Stack

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**
- **Framer Motion** for animations, **next-themes** for dark mode
- **Chat**: RAG-lite over `data/about.md` and `data/projects.md`; optional **Groq** (free, Vercel AI SDK) or **OpenAI** when `GROQ_API_KEY` or `OPENAI_API_KEY` is set

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

- **Without OpenAI**: The chat returns the most relevant snippets from `data/about.md` and `data/projects.md` (no hallucinations). A “digital twin” intro message sets the tone.
- **With OpenAI**: Create `.env.local` and set `OPENAI_API_KEY=sk-...`. The API will use GPT-4o-mini with the same context and a personality prompt (“Jie Han’s digital twin”, expert on 2024–2026 roadmap).
- **Personality**: Edit `CHAT_SYSTEM_MESSAGE` in `lib/constants.ts` to change the intro and twin persona.
- **Keep costs minimal**: See **[docs/OPENAI_BUDGET.md](docs/OPENAI_BUDGET.md)** for budget limits, alerts, and optional `OPENAI_CHAT_MAX_TOKENS`.
- **Free-tier option**: Using a free AI tier (e.g. **Vercel AI SDK** with **Groq** or **Together AI** for Llama/Mixtral free credits) is viable: you’d keep this RAG + UI and swap the provider in `lib/chat.ts`. Services like Chatbase/Mendable offer ~10–20 free messages/month but replace the widget; the SDK approach keeps your chat and adds a free model.

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

### 6. Troubleshooting Vercel deployment

**Build fails on Vercel**

1. **Check the build log**  
   In Vercel: your project → **Deployments** → click the failed deployment → open the **Building** log. The error message at the bottom usually says what went wrong.

2. **Test the build locally**  
   On your machine run:
   ```bash
   cd "c:\Users\User\Desktop\Job applications"
   npm install
   npm run build
   ```
   If this fails, fix the errors (e.g. TypeScript or missing files) then commit and push again.

3. **Root Directory**  
   In Vercel → **Settings** → **General** → **Root Directory** must be empty or `./` (this repo only has one app). If you put the app in a subfolder, set Root Directory to that folder (e.g. `Job applications`).

4. **Node version**  
   The project uses Node 18+. In Vercel → **Settings** → **General** → **Node.js Version** choose **18.x** or **20.x** if the dropdown is there.

5. **“Module not found” or missing `data/`**  
   Make sure `data/` and `public/` are committed to GitHub (they are not in `.gitignore`). Run `git status` and add any missing files:
   ```bash
   git add data public
   git commit -m "Add data and public assets"
   git push
   ```

6. **Re-import the repo**  
   If the repo was connected before you pushed everything, in Vercel remove the project and **Add New** → **Project** → import the same GitHub repo again so it picks up the latest code.

---

## Checklist before going live

- [ ] Update `lib/constants.ts` with your real LinkedIn and GitHub URLs.
- [ ] Ensure `public/resume.pdf` is your current CV.
- [ ] Ensure `public/recommendation-amd.png` and `public/recommendation-selfless-together.pdf` are in place.
- [ ] Run `npm run build` locally and fix any errors.
- [ ] Push to GitHub and deploy on Vercel (steps above).
- [ ] (Optional) Add `OPENAI_API_KEY` in Vercel if you want the AI chat.

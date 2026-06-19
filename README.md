# Sadiya Rehman — Portfolio

A premium, minimal, glassmorphism-inspired portfolio built with **React 19**, **TanStack Start**, **Tailwind CSS v4**, and **Framer Motion**. Showcases projects (DealMind, Connect Care, Playora), experience, education and contact info.

🔗 **Live:** _add your Vercel URL here after deploy_

---

## ✨ Tech Stack

- **Framework:** TanStack Start (React 19 + Vite 7)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package manager:** Bun (npm / pnpm also work)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 20
- [Bun](https://bun.sh/) ≥ 1.1 (recommended) — or npm / pnpm / yarn

### 1. Clone the repository

```bash
git clone https://github.com/sadiyarehman78/<repo-name>.git
cd <repo-name>
```

### 2. Install dependencies

```bash
bun install
# or
npm install
```

### 3. Run the dev server

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
bun run build
bun run start    # preview the production build
```

---

## 📁 Project Structure

```
src/
├── assets/                  # Images, PDFs, CDN asset pointers
├── components/
│   └── portfolio/           # Hero, Navbar, Sections, etc.
├── lib/
│   └── portfolio-data.ts    # All portfolio content (edit me!)
├── routes/
│   ├── __root.tsx           # Root layout + SEO head
│   └── index.tsx            # Homepage
└── styles.css               # Tailwind v4 + design tokens
```

To update content (name, projects, skills, experience), edit **`src/lib/portfolio-data.ts`**.

---

## ☁️ Deploy to Vercel

### Option A — One-click (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects **Vite**. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `bun run build` (or `npm run build`)
   - **Output Directory:** `dist`
   - **Install Command:** `bun install` (or `npm install`)
4. Click **Deploy**. Done — your portfolio is live at `<project>.vercel.app`.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel            # follow prompts (link / create project)
vercel --prod     # deploy to production
```

### Environment Variables

This portfolio has **no required environment variables**. If you later add features (e.g. EmailJS contact form), set keys in **Vercel → Project → Settings → Environment Variables**.

### Custom Domain

In Vercel → Project → **Settings → Domains** → add your domain and follow the DNS instructions.

---

## 📝 Customization

- **Profile info, projects, skills:** `src/lib/portfolio-data.ts`
- **Hero copy:** `src/components/portfolio/Hero.tsx`
- **Colors & theme tokens:** `src/styles.css`
- **SEO meta tags:** `src/routes/index.tsx`
- **Resume PDF:** replace `src/assets/resume.pdf.asset.json` pointer

---

## 📄 License

© Sadiya Rehman. All rights reserved.

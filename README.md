# WriteEase AI — GitHub Pages Upload Guide

**Live website:** https://rupeshpisal11.github.io/writeease/

---

## Upload Instructions

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com)
2. Click **+** → **New repository**
3. Repository name: `writeease` *(exactly)*
4. Leave it **Public**
5. Do **NOT** initialize with README (we'll upload one)
6. Click **Create repository**

---

### Step 2 — Upload all website files

1. Inside your new empty repository, click **Add file → Upload files**
2. Drag and drop **all files and folders** from this ZIP into the upload area:
   - `index.html`
   - `404.html`
   - `README.md`
   - `favicon.svg`
   - `css/` folder
   - `js/` folder
   - All `.html` pages
3. Scroll down, add commit message: `Initial website upload`
4. Click **Commit changes**

---

### Step 3 — Enable GitHub Pages

1. Go to your repository → **Settings** tab
2. In the left sidebar, click **Pages**
3. Under **Source**, select: **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**

---

### Step 4 — Wait for deployment

GitHub Pages takes 1–3 minutes to deploy. Then visit:

```
https://rupeshpisal11.github.io/writeease/
```

> If the page doesn't load immediately, wait 2–3 minutes and refresh.

---

## What's Included

### Public Pages
| Page | File |
|------|------|
| Homepage | `index.html` |
| All Tools | `tools.html` |
| Pricing | `pricing.html` |
| FAQ | `faq.html` |
| Privacy Policy | `privacy.html` |
| Terms of Service | `terms.html` |
| Refund Policy | `refund.html` |

### Authentication
| Page | File |
|------|------|
| Login | `login.html` |
| Register | `register.html` |

### App / Dashboard
| Page | File |
|------|------|
| Dashboard | `dashboard.html` |
| AI Paraphraser | `paraphraser.html` |
| AI Humanizer | `humanizer.html` |
| Grammar Fixer | `grammar.html` |
| Email Writer | `email.html` |
| Writing Templates | `templates.html` |
| Plagiarism Checker | `plagiarism.html` |
| History | `history.html` |
| Profile | `profile.html` |
| Settings | `settings.html` |

---

## Technical Notes

- **Pure static HTML/CSS/JS** — no build step required
- **Demo authentication** — login stores session in `localStorage`
- **AI tools** — frontend demo engine, no API keys needed
- **History** — saved to browser `localStorage`
- **Plagiarism checker** — demo mode, not a real scan
- **GitHub Pages compatible** — all routing uses static `.html` files

---

## Customization

To connect real AI APIs later:
1. Replace the `AIDemo.*` functions in `js/app.js` with real API calls
2. Add a backend or use a serverless function (Cloudflare Workers, Vercel Functions)
3. Update the auth logic in `Auth.*` to use real JWT tokens

---

## Brand

- **Product:** WriteEase AI
- **Tagline:** Write smarter. Express better.
- **Theme:** Ink & Sapphire
- **Primary color:** #3157D5
- **Fonts:** DM Serif Display (headings) + DM Sans (body)

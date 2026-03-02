# Finsweet Clone (React + TypeScript + Vite)

A beginner-friendly React + TypeScript clone of the Finsweet homepage design.
This repo currently contains the complete **Home page layout** with reusable layout components.

# Directory
src/
  components/
    home/
    layout/
    icons/
  pages/
  data/
  types/
  assets/

## ✅ What’s implemented so far

### Layout
- Navbar (reusable)
- Footer (reusable)
- Global container + section spacing styles

### Home page sections
- Hero section (background image + overlay)
- Featured Post + All Posts grid (hover states, author color)
- About Us / Our Mission (with white → yellow → purple top bar)
- Choose a Category (SVG icons, active state)
- Special Post (“Why we started” with overlapping card)
- List of Authors (avatars + social icons)
- Featured In row (logo placeholders)
- Testimonials block (arrows + basic switching)
- Home CTA (“Join our team…”)

## 🧱 Tech Stack
- React
- TypeScript
- Vite
- CSS Modules

## 🚀 Getting started (for your friend)

### 1) Clone the repository


```bash
git clone https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
cd <REPO-NAME>


2) Install dependencies
npm install
3) Run the dev server
npm run dev

Open the URL Vite prints (usually http://localhost:5173).

4) Build (optional)
npm run build
npm run preview
👥 Team workflow (branches + PR review)
Create a new feature branch
git checkout -b feature/<short-name>
Commit your work
git add .
git commit -m "Add <thing>"
git push -u origin feature/<short-name>
Open a Pull Request on GitHub

Go to GitHub → Pull Requests → New PR

Base: main

Compare: your feature/... branch

Request review from the teammate

After approval → Merge

📝 Notes

Images are stored in src/assets/

Home page sections live in src/components/home/

SVG icons live in src/components/icons/Icons.tsx


**Important:** Replace `<YOUR-USERNAME>` and `<REPO-NAME>` before pushing.

---

Collaborator:
1. Pull latest `main`
2. Create a feature branch for the next page (example: `feature/blog-page`)
3. Build page components
4. Open PR for review

Commands for them:

```bash
git checkout main
git pull
git checkout -b feature/blog-page
# work...
git add .
git commit -m "Build Blog page layout"
git push -u origin feature/blog-page
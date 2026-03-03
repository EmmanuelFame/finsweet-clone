# Finsweet Clone (React + TypeScript + Vite)

👋 This is a collaborative project between:
- **EmmanuelFame**
- **HarrySneh**

We are rebuilding the Finsweet blog homepage using React + TypeScript + Vite, focusing on clean structure, reusable components, and proper team workflow (PR reviews & approvals).

---

# 📁 Project Structure


src/
components/
home/ → All Home page sections
layout/ → Navbar + Footer
icons/ → Reusable SVG icons
pages/ → Route-level pages
data/ → Mock data
types/ → TypeScript types
assets/ → Images (PNG, SVG)


---

# ✅ What Has Been Completed (Home Page)

## Layout
- Reusable Navbar
- Reusable Footer
- Global container & spacing system

## Home Page Sections
- Hero section (background image + overlay)
- Featured Post + All Posts grid
- About Us / Our Mission (white → yellow → purple top bar)
- Choose a Category (custom SVG icons + active state)
- Special Post (image + overlapping card)
- List of Authors (avatars + social icons)
- Featured In row
- Testimonials (arrow switching)
- Home CTA (“Join our team…”)

---

# 🧱 Tech Stack

- React
- TypeScript
- Vite
- CSS Modules

---

#  Setup Instructions 

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/EmmanuelFame/finsweet-clone.git
cd finsweet-clone
2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev

Then open:

http://localhost:5173
4️⃣ Optional: Build Production
npm run build
npm run preview
👥 Team Workflow (IMPORTANT)

⚠️ The main branch is protected.

No direct pushes to main.

All changes must go through Pull Requests.

🔹 Step 1: Pull Latest Code

Before starting work:

git checkout main
git pull origin main
🔹 Step 2: Create a Feature Branch

Example for Blog page:

git checkout -b feature/blog-page

Branch naming convention:

feature/<page-or-feature-name>
fix/<bug-name>
refactor/<section-name>
🔹 Step 3: Work & Commit
git add .
git commit -m "Build Blog page layout"
🔹 Step 4: Push Branch
git push -u origin feature/blog-page
🔹 Step 5: Open Pull Request

On GitHub:

Go to Pull Requests

Click "New Pull Request"

Base branch: main

Compare: feature/blog-page

Request review from EmmanuelFame or HarrySneh

Wait for approval

Merge

📌 Next Development Plan

Suggested next page:

Blog listing page

Single blog post page

Responsive polishing

Component refactoring for reuse

📂 Important Notes

All images are inside src/assets/

Home page sections live inside src/components/home/

Icons are inside src/components/icons/Icons.tsx

Avoid large image files (>1MB)

Do not commit node_modules

🛡 Branch Protection

main branch:

Requires Pull Request

Requires approval before merge

This keeps the project clean and professional.
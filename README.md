# 🌍 Ramkin Global Link — Official Website

> **Ethiopia's Most Trusted International Recruitment Agency** (Licensed by MoLS #247/2010 • ISO 9001:2015 • IOM Verified)

Connecting talented Ethiopian professionals with premium employment opportunities across the Gulf Cooperation Council (KSA, UAE, Qatar, Kuwait, Bahrain, Oman) since 2010.

---

## ⚡️ Live Site • 👇

[![Build & Deploy Status](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2FRiter-Rob%2FRamkin_Website%2Fdeployments&query=%24%5B0%5D.status&label=Latest%20Deployment&logo=githubactions&logoColor=white&colorB=0a2463&labelColor=1e3a5f) [![CI/CD Pipeline](https://github.com/Riter-Rob/Ramkin_Website/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Riter-Rob/Ramkin_Website/actions/workflows/deploy.yml) [![Quality Gate](https://img.shields.io/badge/quality-lint%20%2B%20lighthouse-passing?label=0)](.github/workflows/deploy.yml) [![Pages Env](https://img.shields.io/badge/Environment-GitHub%20Pages-0a2463?logo=github&logoColor=white)](https://riter-rob.github.io/Ramkin_Website/) [![Made With](https://img.shields.io/badge/Built_with-HTML5_%2B_CSS3_%2B_JS-c9a961?logo=html5&logoColor=white)](index.html)

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Markup** | HTML5 — semantic & accessible (`<br>(index.html`)
| **Styling** | CSS3 custom design system (CSS variables, Grid, Flexbox) |
| **Interactivity** | Vanilla ES6+ JavaScript (no frameworks → zero bloat) |
| **Hosting** | [GitHub Pages](https://pages.github.com/) — deployed from `gh-pages` branch |
| **CI/CD** | GitHub Actions — **quality audit** then **auto force-orphan push to gh-pages** on every push to `main` (uses `peaceiris/actions-gh-pages@v4`)
| **Fonts** | Google Fonts (Playfair Display + Inter) |
| **Icons** | Font Awesome 6.5.1 CDN |
| **Images** | AI-generated professional photography (SDXL via Trae TTI API) |

---

## 🗂️ Project Structure

```
Ramkin_Website/
├── 📄 index.html            # All sections in one file (Hero → Footer)
├── 🎨 styles.css            # Design system + responsive (1,000+ lines)
├── ⚙️ script.js            # Modals, carousels, quiz, filters, reveal
├── 🔧 .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD Pipeline (2-job: quality + deploy)
├── 📊 lighthouserc.json  # Lighthouse CI config (Perf/A11y/SEO/BP)
├── 🌐 CNAME               # (reserved for custom domain)
├── 🚫 .gitignore          # Ignore OS/editor/env
├── ⚪ .nojekyll            # Bypass Jekyll (serve _files directly)
└── 📝 README.md           # This file.
```

---

## 🎨 Design System

The design aesthetic: **Clean, luxurious, modern, high visual impact**

```css
/* Color Palette */
:root {
  --deep-ocean:    #0a2463;    /* Primary */
  --deep-ocean-2:  #1e3a5f;    /* Primary gradient */
  --deep-ocean-dark: #05142e;  /* Footer / dark sections */
  --gold:           #c9a961;    /* Accent 1 — sand/gold */
  --gold-light:     #d4a574;    /* Lighter gold */
  --gold-dark:      #a88747;    /* Darker gold */
  --sand:           #f5f0e8;      /* Neutral warm */
  --white:          #ffffff;
  --off-white:      #fafbfc;
}
```

---

## 📑 Sections Implemented

| # | Section | Interactive Features |
|---|---------|---------------------|
| 1 | **Fixed Navbar** | Scroll-to-solid, Language/Currency toggles (EN/AM/AR + USD/ETB/SAR/AED), mobile hamburger |
| 2 | **Immersive Hero** | Full-cover background image, 4-field search (Dest/Dates/Type/Budget), stats bar, scroll indicator |
| 3 | **Featured Destinations** | 6-card grid (🇸🇦🇦🇪🇶🇦🇰🇼🇧🇭🇴🇲), badges, star ratings, **Detail Modals (inclusions + salary breakdown) |
| 4 | **Category Explorer** | 7 filterable chips → 6-card job categories with openings count & salary ranges |
| 5 | **Why Choose Us** | Dark navy gradient, 4 feature cards + 4-item trust badges (ISO 9001, MoLS, 500+ employers, 2023 Award) |
| 6 | **3-Step Quiz Builder** | Profile → Preferences → Review (animated progress bar, range input, multi-select chips, AI-like Top Matches) |
| 7 | **Testimonials** | Auto-rotating carousel (arrows/dots/swipe) + 6-grid Instagram feed with hover overlays |
| 8 | **Newsletter CTA** | Email subscribe form w/ toasts |
| 9 | **Footer** | 4-column, address/contact/socials, language/currency toggles + copyright bar |

---

## 🚀 GitHub Actions — CI/CD Pipeline

### Trigger
- **`push main`** or **`workflow_dispatch`** (manual) → runs full pipeline
- **`pull_request main`** → runs only the **quality job** (no deploy!)

### 2 Jobs

```
                ┌──────────────────────────────────────┐
                │   🧪 JOB 1: QUALITY GATE       │
                │   ┌──────────────────────────┐   │
                │   │ 1. File validation       │   │
                │   │ 2. Stylelint (CSS)          │   │
                │   │ 3. Lighthouse CI audit      │   │
                │   │ 4. Summary to GH Step Summary│ │
                │   └───────────────┬──────────────┘   │
                └───────────────────┼──────────────────┘
                                    │
                     (only on push / dispatch)
                                    │
                ┌───────────────────▼──────────────────┐
                │   🌐 JOB 2: BUILD + DEPLOY           │
                │   ┌──────────────────────────┐        │
                │   │ actions/configure-pages@v5   │        │
                │   │ upload-pages-artifact@v3    │        │
                │   │ actions/deploy-pages@v4     │        │
                │   └──────────────────────────┘        │
                └──────────────────────────────────────┘
```

### Lighthouse Scores Monitors
The CI runs a full Lighthouse audit against these minimums (warn mode = no deploys blocked):

| Category | Target |
|----------|--------|
| ⚡️ Performance | ≥ 75 |
| ♿️ Accessibility | ≥ 85 |
| ✅ Best Practices | ≥ 85 |
| 🔍 SEO | ≥ 80 |

Reports are auto-uploaded to temporary public storage (see the Actions run details → Summary tab).

---

## 🧑‍💻 Local Development

```bash
# 1. Clone (already done here)
git clone https://github.com/Riter-Rob/Ramkin_Website.git
cd Ramkin_Website

# 2. Run local server (any of these work — pick one)
python -m http.server 8000     # visit http://localhost:8000
npx serve .
php -S localhost:8000

# 3. Make changes, then deploy (it's auto!)
git add -A
git commit -m "feat: update hero image + new Saudi package"
git push origin main
# → GitHub Actions auto-deploys in ~2 min 🎉
```

---

## 🌐 Enabling GitHub Pages (one-time step ⚠️ REQUIRED ⚠️ — do this NOW)

The **deploy job pushes content to the `gh-pages` branch**, so GitHub Pages just needs to be told to serve from that branch:

1. Go to **[Settings → Pages](https://github.com/Riter-Rob/Ramkin_Website/settings/pages)**
2. Under **Build and deployment → Source**, select **`Deploy from a branch`** (NOT "GitHub Actions")
3. Under the new **Branch** section that appears:
   - Dropdown #1: choose **`gh-pages`**
   - Dropdown #2: choose **`/ (root)`**
   - Click **Save**
4. Wait ~30 seconds. Your site goes live at:
   > **https://Riter-Rob.github.io/Ramkin_Website/**

**Optional — add a custom domain** (e.g. `ramkingloballink.com`):
1. Buy a domain → create these DNS records with your registrar/dns host:
   ```
   Type   Name   Value
   A      @      185.199.108.153
   A      @      185.199.109.153
   A      @      185.199.110.153
   A      @      185.199.111.153
   CNAME  www    Riter-Rob.github.io.
   ```
2. In the **`CNAME`** file in this repo, uncomment the last line and set it to your real apex domain (e.g. `ramkingloballink.com`)
3. Back on the Pages settings page: paste the same domain into **Custom domain** → Save → check **Enforce HTTPS** once the TLS certificate provisions (can take minutes to a few hours)

---

## 📈 GitHub Statistics Badges

Paste these anywhere for live status indicators:

```markdown
[![CI/CD Pipeline](https://github.com/Riter-Rob/Ramkin_Website/actions/workflows/deploy.yml/badge.svg?branch=main)]
(https://github.com/Riter-Rob/Ramkin_Website/actions)
```

---

## 🔐 Licensing & Legal

- **Website code:** © 2026 Ramkin Global Link PLC. All rights reserved.
- **License:** Proprietary — for internal use by Ramkin Global Link only.
- **Government Registration:** Ministry of Labor and Skills (Ethiopia) License #247/2010
- **ISO 9001:2015** — Quality Management Certified
- **IOM Verified** Recruitment Agency

---

## 📞 Contact

| Channel | Details |
|---------|---------|
| 🏢 Head Office | Bole Medhanealem, Addis Ababa, Ethiopia |
| 📞 Call / WhatsApp | +251 11 123 4567 · +251 90 123 4567 |
| 📧 Email | info@ramkingloballink.com · apply@ramkingloballink.com |
| ⏰ Hours | Mon–Sat 08:00 – 18:00 (EAT) |
| 🌐 Web | [Riter-Rob.github.io/Ramkin_Website](https://Riter-Rob.github.io/Ramkin_Website/) |

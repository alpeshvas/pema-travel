# 🐉 Druk Yul — Bhutan Travel Website

A Next.js travel website for Bhutan with authentic Bhutanese theming, built with TypeScript and Tailwind CSS.

## Pages

- `/` — Homepage (hero, destinations, experiences, culture, testimonials, GNH banner, practical info)
- `/about` — About Bhutan (history, GNH, environment, tourism)
- `/tours` — Curated tour packages (6 tours)
- `/blog` — Travel journal / blog posts
- `/contact` — Guide profile (Pema Wangchuk) + WhatsApp contact form

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom Bhutanese theme
- **Fonts:** Cormorant Garamond, Philosopher, Noto Serif

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (navbar, footer, borders)
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx
│   ├── tours/page.tsx
│   ├── blog/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                 # Reusable UI (BhutanBorder, Logo, RevealOnScroll)
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Page sections (Hero, Destinations, GuideCard, etc.)
├── lib/
│   └── config.ts           # Site config, guide info, nav links
└── styles/
    └── globals.css          # Tailwind + custom Bhutanese patterns
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## Customization

- **Guide info:** Edit `src/lib/config.ts` to update Pema's details
- **Nav links:** Edit `navLinks` in `src/lib/config.ts`
- **Colors:** Edit the Bhutanese theme in `tailwind.config.ts`
- **Add pages:** Create a new folder in `src/app/` with a `page.tsx`

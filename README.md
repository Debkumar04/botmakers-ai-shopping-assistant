# BotLeague — India's Ultimate Robotics Arena

A modern, responsive landing page for **BotLeague**, India's premier competitive robotics platform connecting builders, innovators, and engineers across the nation.

> Built as a Figma-to-Code assignment for the Full Stack Developer Intern position at **BotMakers Pvt Ltd**.

---

## 🚀 Live Preview

```bash
npm run dev
# → http://localhost:5173
```

---

## 🖼️ Design Reference

**Figma:** [AI Shopping Assistant – BotLeague](https://www.figma.com/design/9iGNHKi7vwCCnPrBLwwQxc/AI-Shopping-Assistant?node-id=52-2&t=nmiYgJNxr0RVwGiY-1)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **TypeScript** | Type-safe development |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **Lucide React** | Icon library |
| **React Icons** | Social media icons |

---

## 📁 Project Structure

```
botMaker/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images & media
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Responsive navigation with mobile hamburger menu
│   │   │   └── Footer.tsx       # Footer with sponsors, links & social media
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Hero banner with CTA
│   │   │   ├── Competitions.tsx     # Upcoming & past competitions
│   │   │   ├── PathToLeague.tsx     # Step-by-step journey
│   │   │   ├── WhatIsBotLeague.tsx  # Feature highlights
│   │   │   ├── Categories.tsx       # Age-based categories
│   │   │   ├── Disciplines.tsx      # Robotics disciplines
│   │   │   ├── WhyRegister.tsx      # Advantages / CTA
│   │   │   └── JoinEcosystem.tsx    # Sign-up forms (Judge, Volunteer, Community)
│   │   └── ui/
│   │       └── SectionHeading.tsx   # Reusable section heading component
│   ├── constants/
│   │   └── data.ts          # All static data & content
│   ├── App.tsx              # Root app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles, theme & Tailwind config
├── index.html               # HTML entry with Google Fonts
├── vite.config.ts           # Vite + React + Tailwind plugin config
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## ✨ Key Features

- **Pixel-perfect Figma implementation** — Faithful recreation of the provided design
- **Fully responsive** — Optimized for mobile, tablet, and desktop breakpoints
- **Dark theme** — Sleek dark UI with red accent (#E63946) throughout
- **Custom typography** — Orbitron (headings), Rajdhani (UI elements), Inter (body)
- **Interactive components** — Hover effects, smooth transitions, and micro-animations
- **Horizontal scroll cards** — Mobile-friendly swipeable cards in key sections
- **Form-based Join Ecosystem** — Sign-up forms for Judge, Volunteer & Community roles
- **Sponsors section** — Brand logos with hover interactions
- **SEO optimized** — Proper meta tags, semantic HTML, heading hierarchy

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 768px | Single column, stacked layout |
| Tablet | 768px – 1023px | Two-column grids |
| Desktop | ≥ 1024px | Full multi-column layout |

---

## 🏃 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/botMaker.git

# Navigate to the project
cd botMaker

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| Background Primary | `#0A0A0F` | Page background |
| Background Card | `#16161E` | Card surfaces |
| Accent Red | `#E63946` | CTAs, highlights, hover states |
| Text Primary | `#FFFFFF` | Headings, primary text |
| Text Secondary | `#A0A0B0` | Body text |
| Text Muted | `#6B6B7B` | Subtle text, placeholders |
| Border | `#2A2A35` | Card borders, dividers |

### Fonts

- **Orbitron** — Section headings, brand name
- **Rajdhani** — Buttons, labels, navigation
- **Inter** — Body text, descriptions

---

## 📝 Sections Overview

1. **Navbar** — Fixed top navigation with mobile hamburger menu
2. **Hero** — Full-width banner with headline and CTA buttons
3. **Competitions** — Upcoming events and past results with card grid
4. **Path to League** — 5-step visual journey from building to championship
5. **What is BotLeague** — Feature cards explaining the platform
6. **Categories** — Age-based participation categories
7. **Disciplines** — Robotics competition types (Robo Race, Line Follower, etc.)
8. **Why Register** — Advantages and call to action
9. **Join the Ecosystem** — Sign-up forms for Judge, Volunteer, Community
10. **Sponsors** — Partner brand logos
11. **Footer** — Brand info, quick links, social media, copyright

---

## 👤 Author

**Debkumar**

---

## 📄 License

This project is created as part of an assignment for BotMakers Pvt Ltd.

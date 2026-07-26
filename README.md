# Data Science Club Recruitment 2026–27 | Software Dev Team Round

This repository contains the complete assignment submission for the **Software Development Team Recruitment Round 1** of the **Data Science Club (2026–27)**.

---

## 📑 Table of Contents
1. [Task 1: Product Thinking Challenge](#task-1-product-thinking-challenge)
2. [Task 2: Frontend Development Challenge (NEXUS 2026)](#task-2-frontend-development-challenge)
3. [✨ Key Features & Creative Bonus Implementation](#-key-features--creative-bonus-implementation)
4. [💻 Tech Stack & Architecture](#-tech-stack--architecture)
5. [🚀 Local Setup & Installation](#-local-setup--installation)
6. [🌐 One-Click Live Deployment Guide (Vercel / Netlify)](#-one-click-live-deployment-guide)

---

## Task 1: Product Thinking Challenge

### Chosen Platform: **Spotify** (Desktop & Mobile)
**Proposed Feature**: *Contextual Audio-Spatial Focus Engine & Collaborative Dynamic Jam Queue*

### Executive Summary
Spotify excels at algorithmic music discovery, but group listening ("Spotify Jam") suffers from single-host bias, while deep-work listeners experience friction manually selecting focus playlists.

### Core Product Proposal
1. **Real-Time Fair-Queue Algorithm**: Introduces weighted pulse voting for group Jam sessions. A background scoring model dynamically boosts queue priority for users who haven't had a song played in 30+ minutes.
2. **Context-Aware Biometric Focus Engine**: Automatically transitions playlist energy from vocals to binaural ambient synthwave when an IDE or Pomodoro timer enters deep-work mode.

> **Full Detailed Analysis**: See [`TASK1_PRODUCT_THINKING.md`](./TASK1_PRODUCT_THINKING.md) for UX wireframe specs, KPI targets, edge case handling, and system architecture.

---

## Task 2: Frontend Development Challenge

### Project Title: **NEXUS 2026 — AI & Quantum Frontiers Hackathon**

An elite, futuristic glassmorphic Hackathon Registration Website engineered with custom canvas particle dynamics, glowing UI cards, responsive layouts, multi-theme customization, interactive event schedule, and multi-step registration validation with dynamic ticket generation.

### Mandatory Sections Completed
- [x] **Home / Hero**: Cyberpunk headline, status badge, total prize ticker ($50,000+), live event image banner.
- [x] **About**: Core highlights, GPU infrastructure, VC incubator pathways, and 3 specialized tracks (**Autonomous AI**, **Quantum Computing**, **Decentralized Infra**).
- [x] **Schedule**: Day 1 / Day 2 / Day 3 interactive tabs, category filter pills, timeline detail cards.
- [x] **Prizes**: 3D-styled trophy podium cards (Grand Champion $20k, 1st Runner Up $12k, 2nd Runner Up $8k) plus special sponsor bounties.
- [x] **Sponsors**: Tiered partner grid (Google Cloud, NVIDIA, IBM Quantum, Vercel, OpenAI, GitHub) and interactive FAQs.
- [x] **Registration Form**: Multi-step interactive registration modal with client validation and dynamic ticket pass modal.

---

## ✨ Key Features & Creative Bonus Implementation

1. ⏳ **Live Dynamic Countdown Timer**: Flip countdown timer calculating days, hours, minutes, and seconds to launch date.
2. 🎨 **Interactive HTML5 Particle Canvas**: Custom mathematical particle system with magnetic mouse reactivity and dynamic distance vectors.
3. 🌓 **Multi-Preset Theme Switcher**: Instant switching between **Cyber Neon**, **Obsidian Dark**, and **Light Void** themes.
4. 📝 **Multi-Step Form Validation**: Real-time error tooltips, email format checks, and solo vs team registration logic.
5. 🎟️ **Digital Ticket Generator & Confetti Burst**: Submission fires a celebration confetti burst and renders a customized digital hackathon badge ticket with downloadable pass.
6. 🔖 **Interactive Schedule Bookmarking**: Users can bookmark sessions across Day 1, 2, and 3 to build their personalized hackathon itinerary.
7. 🖼️ **High-Res Event Gallery & Speaker Spotlight**: Visual gallery modal lightbox showcasing the hacker arena and keynote speakers.

---

## 💻 Tech Stack & Architecture

- **Core Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Icons & Visuals**: Lucide React + Generated AI High-Res Visual Assets
- **Effects & Feedback**: Canvas-Confetti + HTML5 Canvas API

---

## 🚀 Local Setup & Installation

Follow these steps to run the application locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/hackathon-website.git

# 2. Navigate into the project folder
cd hackathon-website

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 🌐 One-Click Live Deployment Guide

### Deploying on Vercel
1. Push this repository to your GitHub account.
2. Visit [vercel.com/new](https://vercel.com/new) and log in.
3. Import your `hackathon-website` repository.
4. Click **Deploy**. Vercel will automatically detect Vite and publish your live link!

### Deploying on Netlify
1. Go to [app.netlify.com](https://app.netlify.com/) and click **Add new site** -> **Import an existing project**.
2. Connect your GitHub repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **Deploy Site**.

---

## 👨‍💻 Submission Details
- **Applicant**: Data Science Club Software Dev Candidate
- **Repository**: [GitHub Repository Link](https://github.com/)
- **Live Demo Link**: [Live Deployment URL](https://vercel.app)

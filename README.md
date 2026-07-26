# Data Science Club Recruitment 2026–27 | Software Dev Team Task Round

**Candidate Name**: Diyaa Poulkar  
**GitHub Profile**: [diyaapoulkar-alt](https://github.com/diyaapoulkar-alt)  
**Repository**: [diyaapoulkar-alt/hackathon-website](https://github.com/diyaapoulkar-alt/hackathon-website)

---

## 📌 Task 1: Product Thinking Challenge

### Platform: **Spotify** (Desktop & Mobile)
**Proposed Feature**: *Contextual Audio-Spatial Focus Engine & Collaborative Dynamic Jam Queue*

### Executive Summary
Spotify is an industry benchmark for personalized music recommendations. However, two distinct product frictions exist:
1. **Group Session Friction ("Aux Cable Tug-of-War")**: In collaborative Spotify Jam sessions, queues favor the primary host, leading to song skipping and participant frustration.
2. **Focus-State Friction**: Manual playlist swapping during deep work, coding, or study sessions breaks user flow.

### Proposed Product Solution
- **Real-Time Fair-Queue Algorithm**: Introduces a weighted pulse-voting queue for Spotify Jam. A background algorithm dynamically boosts queue priority for participants who haven't had a track played in 30+ minutes.
- **Biometric & Focus-State Adaptive Queueing**: Integrates with device focus timers and IDE plugins to transition audio energy from lyrics to ambient binaural synthwave during intense coding sprints.

### Quantitative Success Metrics (KPIs)
- **Engagement**: +14% increase in average Spotify Jam session duration.
- **UX Quality**: -32% reduction in manual track skips within 5 minutes of play.
- **Retention**: +8% increase in 30-day DAU retention for collaborative listeners.

> **Full Architectural Spec**: See [`TASK1_PRODUCT_THINKING.md`](./TASK1_PRODUCT_THINKING.md) for full technical breakdown and edge-case handling.

---

## 🚀 Task 2: Frontend Development Challenge

### Project Title: **NEXUS 2026 — AI & Quantum Frontiers Hackathon**

An elite, futuristic glassmorphic Hackathon Registration Website featuring interactive 3D perspective cyber grid dynamics, glowing UI cards, responsive layouts, multi-theme customization, interactive event schedule, and multi-step registration validation with dynamic ticket pass generation.

### Implemented Mandatory Sections
- **Home**: Cyberpunk headline, live countdown timer, status ticker ($50,000+ total prizes, 1,200+ hackers), custom visual banner.
- **About**: Core highlights, GPU compute clusters, VC incubator pathways, and 3 specialized tracks (**Autonomous AI**, **Quantum Computing**, **Decentralized Infra**).
- **Schedule**: Day 1 / Day 2 / Day 3 interactive tabs, category filter pills, timeline detail cards, and event bookmarking.
- **Prizes**: 3D-styled trophy podium cards (Grand Champion $20k, 1st Runner Up $12k, 2nd Runner Up $8k) plus special sponsor bounties.
- **Sponsors & FAQs**: Google Cloud, NVIDIA, IBM Quantum, Vercel, OpenAI, GitHub partner grid + collapsible accordion FAQs.
- **Registration Form**: Multi-step interactive registration modal with client validation, solo vs team mode, and confetti celebration ticket generator.

### Creative Features & Enhancements
- ⏳ **Live Dynamic Countdown Timer**: Flip countdown timer calculating days, hours, minutes, and seconds to launch date.
- 🌐 **3D Perspective Cyber Matrix Grid Canvas**: Perspective grid with moving laser lines and 40+ orbiting geometric nodes.
- 🎴 **3D Tilt Cards (`TiltCard`)**: Vanishing-point 3D rotation and dynamic holographic light reflectance on hover.
- 🤖 **Floating "NEXUS AI" Assistant Widget**: Interactive 24/7 AI chatbot answering hackathon questions on tracks, prizes, and rules.
- 🔊 **Cyber Audio Synthesizer (SFX)**: Web Audio API synthesized sound effects on button hover and click.
- 🌓 **Multi-Preset Theme Switcher**: Instant switching between **Cyber Neon**, **Obsidian Dark**, and **Light Void** themes.
- 🎟️ **Digital Ticket Generator & Confetti Burst**: Submission fires a celebration confetti burst and renders a customized digital hackathon pass.
- 🔖 **Interactive Schedule Bookmarking**: Users can bookmark sessions across Day 1, 2, and 3 to build their personalized itinerary.

---

## 🛠️ Tech Stack & Local Setup

**Stack**: React 19, Vite 6, Tailwind CSS v4, Lucide React, HTML5 Canvas API, Web Audio API

To run this project locally:
```bash
git clone https://github.com/diyaapoulkar-alt/hackathon-website.git
cd hackathon-website
npm install
npm run dev
```

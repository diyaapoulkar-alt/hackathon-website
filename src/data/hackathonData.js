export const HACKATHON_DETAILS = {
  title: "NEXUS 2026",
  tagline: "HACK THE FUTURE // AI & QUANTUM FRONTIERS",
  date: "October 24–26, 2026",
  location: "Data Science Club Innovation Hub / Hybrid",
  prizePool: "$50,000+",
  participants: "1,200+",
  countries: "35+",
  duration: "48 Hours",
};

export const TRACKS = [
  {
    id: "ai-ml",
    title: "Autonomous AI & Agentic Systems",
    tag: "Track 01",
    description: "Build Next-Gen autonomous AI agents, multi-agent frameworks, LLM tools, or multimodal generative AI solutions.",
    image: "/assets/ai_track.jpg",
    prize: "$18,000",
    tags: ["LLMs", "Multi-Agent", "Computer Vision", "RAG Pipeline"]
  },
  {
    id: "quantum",
    title: "Quantum Computing & Algorithms",
    tag: "Track 02",
    description: "Architect hybrid quantum-classical algorithms, Qiskit simulations, or quantum cryptography protocols.",
    image: "/assets/quantum_track.jpg",
    prize: "$17,000",
    tags: ["Quantum Gates", "Qiskit", "Optimization", "QKD Security"]
  },
  {
    id: "web3",
    title: "Decentralized Tech & Smart Infra",
    tag: "Track 03",
    description: "Develop zero-knowledge privacy layers, decentralized data networks, or autonomous IoT smart contracts.",
    image: "/assets/hero_banner.jpg",
    prize: "$15,000",
    tags: ["ZK-Rollups", "Smart Contracts", "IoT Data", "DeFi Infra"]
  }
];

export const SCHEDULE = [
  {
    day: "Day 1",
    date: "Oct 24, 2026",
    events: [
      { time: "09:00 AM", title: "Opening Ceremony & Keynote", category: "General", desc: "Welcome address, hackathon guidelines & surprise keynote by AI researchers." },
      { time: "11:00 AM", title: "Hacking Starts // Team Formation", category: "Hacking", desc: "Official countdown starts. Team matching channel opens." },
      { time: "03:00 PM", title: "Workshop: Building Agentic Workflows", category: "Workshop", desc: "Hands-on masterclass with Google DeepMind & NVIDIA engineers." },
      { time: "08:00 PM", title: "Mentor Checkpoint #1", category: "Mentorship", desc: "Technical feedback & architecture review with industry mentors." }
    ]
  },
  {
    day: "Day 2",
    date: "Oct 25, 2026",
    events: [
      { time: "10:00 AM", title: "Workshop: Hybrid Quantum Algorithms", category: "Workshop", desc: "Deep dive into IBM Quantum Qiskit SDK & optimization benchmarks." },
      { time: "02:00 PM", title: "Mid-Hack Sync & Snack Drop", category: "Social", desc: "Live music stream, mini gaming tournament & energy drink giveaway." },
      { time: "07:00 PM", title: "Mentor Checkpoint #2 (Pitch Review)", category: "Mentorship", desc: "Slide deck review and live pitch dry-runs." }
    ]
  },
  {
    day: "Day 3",
    date: "Oct 26, 2026",
    events: [
      { time: "11:00 AM", title: "Hacking Ends & Code Freeze", category: "Hacking", desc: "GitHub repository push & video demo submission deadline." },
      { time: "01:30 PM", title: "Top 10 Finalist Presentations", category: "Judging", desc: "Live demo pitches in front of high-profile VC & AI judges." },
      { time: "05:00 PM", title: "Grand Award Ceremony & Closing Party", category: "General", desc: "Prize distribution, trophies, and networking mixer." }
    ]
  }
];

export const PRIZES = [
  {
    rank: "1st Place",
    title: "Grand Champion",
    amount: "$20,000",
    color: "from-amber-400 to-yellow-600",
    shadow: "shadow-amber-500/20",
    perks: ["$20,000 Cash Prize", "VC Pitch Meeting & Incubation", "NVIDIA H100 Cloud Credits", "Custom Gold Trophy & Swag Box"]
  },
  {
    rank: "2nd Place",
    title: "1st Runner Up",
    amount: "$12,000",
    color: "from-slate-300 to-slate-500",
    shadow: "shadow-slate-400/20",
    perks: ["$12,000 Cash Prize", "Accelerator Fast-Track Pass", "$5,000 AWS Cloud Credits", "Silver Trophy & Swag Box"]
  },
  {
    rank: "3rd Place",
    title: "2nd Runner Up",
    amount: "$8,000",
    color: "from-amber-700 to-amber-900",
    shadow: "shadow-amber-800/20",
    perks: ["$8,000 Cash Prize", "$2,500 Cloud Credits", "Bronze Trophy & Swag Box"]
  }
];

export const SPONSORS = [
  { name: "Google Cloud", tier: "Platinum", logo: "⚡ GOOGLE CLOUD" },
  { name: "NVIDIA", tier: "Platinum", logo: "🟢 NVIDIA AI" },
  { name: "IBM Quantum", tier: "Gold", logo: "🔵 IBM QUANTUM" },
  { name: "Vercel", tier: "Gold", logo: "▲ VERCEL" },
  { name: "OpenAI", tier: "Silver", logo: "✳ OPENAI" },
  { name: "GitHub", tier: "Silver", logo: "🐙 GITHUB" }
];

export const SPEAKERS = [
  {
    name: "Dr. Elena Rostova",
    role: "Lead Quantum Researcher",
    org: "Quantum Core Lab",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Marcus Vance",
    role: "Head of AI Architecture",
    org: "Synthetix Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Aria Chen",
    role: "Senior Staff AI Engineer",
    org: "Nexus AI Labs",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
  }
];

export const FAQS = [
  {
    q: "Who is eligible to participate in NEXUS 2026?",
    a: "NEXUS 2026 is open to students, developers, researchers, and tech enthusiasts worldwide! Beginners and seasoned hackathon veterans are all welcome."
  },
  {
    q: "What is the maximum team size?",
    a: "Teams can range from 1 to 4 members. If you don't have a team, you can join our Discord server's team-formation channel prior to the event."
  },
  {
    q: "Is there any registration fee?",
    a: "No! Registration for NEXUS 2026 is 100% FREE thanks to our generous sponsors."
  },
  {
    q: "Can I work on a pre-existing project?",
    a: "No. All code and assets must be created during the 48-hour hacking window. Open-source libraries and APIs are permitted."
  }
];

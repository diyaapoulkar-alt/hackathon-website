import React from 'react';
import Countdown from './Countdown';
import CyberHeroCanvas from './CyberHeroCanvas';
import TiltCard from './TiltCard';
import { HACKATHON_DETAILS } from '../data/hackathonData';
import { ArrowRight, Sparkles, Trophy, Users, Zap, Globe, Shield } from 'lucide-react';
import { audioSFX } from './AudioSFX';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Extraordinary 3D Perspective Cyber Grid + Pulsing Hologram Canvas */}
      <CyberHeroCanvas />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Badge */}
        <div
          onMouseEnter={() => audioSFX.playHoverSFX()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide mb-8 animate-bounce-slow"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>DATA SCIENCE CLUB RECRUITMENT 2026–27 // TASK ROUND</span>
        </div>

        {/* Extraordinary Glitch / Hologram Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-6">
          <span className="block text-slate-200 drop-shadow-lg">BUILD THE</span>
          <span className="gradient-text glow-text-cyan hover:scale-105 transition-transform inline-block">
            UNIMAGINABLE.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light mb-10 leading-relaxed">
          Join <span className="text-cyan-400 font-semibold">{HACKATHON_DETAILS.participants}</span> visionaries, developers, and AI researchers in a 48-hour global hackathon pushing the frontiers of <span className="text-purple-400 font-semibold">Autonomous AI</span> & <span className="text-pink-400 font-semibold">Quantum Computing</span>.
        </p>

        {/* Action CTAs with SFX */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onMouseEnter={() => audioSFX.playHoverSFX()}
            onClick={() => {
              audioSFX.init();
              audioSFX.playClickSFX();
              onOpenRegister();
            }}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Register Your Team</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#about"
            onMouseEnter={() => audioSFX.playHoverSFX()}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:border-cyan-500/50 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Explore Tracks & Prizes
          </a>
        </div>

        {/* Live Countdown Component */}
        <Countdown />

        {/* Extraordinary 3D Tilt Hero Visual Banner */}
        <TiltCard maxTilt={8} className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-3xl p-3 glass-card border border-cyan-500/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <img
              src="/assets/hero_banner.jpg"
              alt="NEXUS 2026 Hackathon Banner"
              className="w-full h-[340px] sm:h-[480px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-left">
              <div>
                <span className="text-xs font-mono text-cyan-400 tracking-widest block uppercase">GLOBAL FLAGSHIP HACKATHON</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">NEXUS 2026 Innovation Arena</h3>
              </div>
              <div className="flex gap-3">
                <span className="px-4 py-2 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  OCTOBER 24–26
                </span>
                <span className="px-4 py-2 rounded-xl bg-slate-950/80 border border-purple-500/30 text-xs font-mono text-purple-300">
                  HYBRID EVENT
                </span>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Key Metrics Stats Ticker with 3D Tilt */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <TiltCard maxTilt={10}>
            <div className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800 flex flex-col items-center">
              <Trophy className="w-8 h-8 text-amber-400 mb-2" />
              <span className="text-3xl font-extrabold text-white">{HACKATHON_DETAILS.prizePool}</span>
              <span className="text-xs text-slate-400 font-mono mt-1">TOTAL PRIZE POOL</span>
            </div>
          </TiltCard>

          <TiltCard maxTilt={10}>
            <div className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800 flex flex-col items-center">
              <Users className="w-8 h-8 text-cyan-400 mb-2" />
              <span className="text-3xl font-extrabold text-white">{HACKATHON_DETAILS.participants}</span>
              <span className="text-xs text-slate-400 font-mono mt-1">HACKERS REGISTERED</span>
            </div>
          </TiltCard>

          <TiltCard maxTilt={10}>
            <div className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800 flex flex-col items-center">
              <Zap className="w-8 h-8 text-purple-400 mb-2" />
              <span className="text-3xl font-extrabold text-white">{HACKATHON_DETAILS.duration}</span>
              <span className="text-xs text-slate-400 font-mono mt-1">NON-STOP HACKING</span>
            </div>
          </TiltCard>

          <TiltCard maxTilt={10}>
            <div className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800 flex flex-col items-center">
              <Globe className="w-8 h-8 text-pink-400 mb-2" />
              <span className="text-3xl font-extrabold text-white">{HACKATHON_DETAILS.countries}</span>
              <span className="text-xs text-slate-400 font-mono mt-1">NATIONS REPRESENTED</span>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

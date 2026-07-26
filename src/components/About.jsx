import React, { useState } from 'react';
import { TRACKS } from '../data/hackathonData';
import TiltCard from './TiltCard';
import { Cpu, Award, Layers, ChevronRight } from 'lucide-react';
import { audioSFX } from './AudioSFX';

export default function About() {
  const [activeTrack, setActiveTrack] = useState(null);

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-2">
            // ABOUT THE HACKATHON
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Pioneering The Next Digital Epoch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            NEXUS 2026 brings together the brightest minds to solve high-stakes challenges across artificial intelligence, quantum algorithms, and decentralized ecosystems.
          </p>
        </div>

        {/* Feature Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <TiltCard maxTilt={12}>
            <div
              onMouseEnter={() => audioSFX.playHoverSFX()}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-slate-800 relative overflow-hidden group h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Infrastructure</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Access premium GPU compute clusters, NVIDIA H100 pods, and Qiskit quantum simulators provided by our industry partners.
              </p>
            </div>
          </TiltCard>

          <TiltCard maxTilt={12}>
            <div
              onMouseEnter={() => audioSFX.playHoverSFX()}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-slate-800 relative overflow-hidden group h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1:1 Elite Mentorship</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Direct guidance from senior staff engineers at Google DeepMind, OpenAI, Vercel, and leading university researchers.
              </p>
            </div>
          </TiltCard>

          <TiltCard maxTilt={12}>
            <div
              onMouseEnter={() => audioSFX.playHoverSFX()}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-slate-800 relative overflow-hidden group h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct Venture Incubation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Top winning projects earn fast-track pitch meetings with premier tech VCs and up to $100k seed grant funding.
              </p>
            </div>
          </TiltCard>
        </div>

        {/* Tracks Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase block mb-2">
            // HACKATHON TRACKS
          </span>
          <h3 className="text-3xl font-bold text-white">Select Your Challenge Domain</h3>
        </div>

        {/* Tracks Grid with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRACKS.map((track) => (
            <TiltCard key={track.id} maxTilt={10}>
              <div
                onMouseEnter={() => audioSFX.playHoverSFX()}
                onClick={() => {
                  audioSFX.init();
                  audioSFX.playClickSFX();
                  setActiveTrack(track);
                }}
                className="rounded-3xl glass-card glass-card-hover border border-slate-800 overflow-hidden flex flex-col group cursor-pointer h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300">
                    {track.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded-xl bg-purple-600/80 text-xs font-bold text-white shadow-lg">
                    Track Prize: {track.prize}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {track.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {track.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {track.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-cyan-400 transition-all flex items-center justify-center gap-2">
                      <span>View Track Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Modal for Track Detail */}
      {activeTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-xl w-full rounded-3xl glass-card border border-cyan-500/40 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveTrack(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{activeTrack.tag}</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-4">{activeTrack.title}</h3>
            <img src={activeTrack.image} alt="" className="w-full h-40 object-cover rounded-xl mb-4" />
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">{activeTrack.description}</p>
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 mb-6">
              <span className="text-xs font-mono text-slate-400 block mb-1">TOTAL TRACK PRIZE ALLOCATION</span>
              <span className="text-2xl font-extrabold text-amber-400">{activeTrack.prize}</span>
            </div>
            <button
              onClick={() => setActiveTrack(null)}
              className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

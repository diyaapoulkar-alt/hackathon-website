import React, { useState } from 'react';
import { SPEAKERS } from '../data/hackathonData';
import { Camera, Sparkles, User, ExternalLink } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      url: "/assets/hacker_arena.jpg",
      title: "Hacker Arena at Midnight",
      caption: "Over 1,200 developers collaborating during non-stop hacking hours."
    },
    {
      url: "/assets/hero_banner.jpg",
      title: "Main Auditorium Keynotes",
      caption: "Industry keynotes on agentic LLMs and quantum hardware."
    },
    {
      url: "/assets/ai_track.jpg",
      title: "AI Track Live Demos",
      caption: "Teams testing autonomous multi-agent pipelines."
    },
    {
      url: "/assets/quantum_track.jpg",
      title: "Quantum Lab Workshop",
      caption: "Hands-on Qiskit quantum circuit optimization session."
    }
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-2">
            // ATMOSPHERE & GALLERY
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            NEXUS Community & Speakers
          </h2>
          <p className="mt-4 text-slate-400">
            Witness the energy, keynotes, and collaborative hacker spirit of NEXUS.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {galleryImages.map((img, idx) => (
            <div
              key={img.title}
              onClick={() => setSelectedImg(img)}
              className="group rounded-3xl glass-card border border-slate-800 overflow-hidden relative h-64 sm:h-80 cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">NEXUS MOMENTS</span>
                  <h4 className="text-xl font-bold text-white mt-0.5">{img.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 max-w-sm">{img.caption}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Speakers Showcase Sub-section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase block mb-1">
              // MENTORS & JUDGES
            </span>
            <h3 className="text-3xl font-bold text-white">Featured Keynote Speakers</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {SPEAKERS.map((speaker) => (
              <div
                key={speaker.name}
                className="p-6 rounded-3xl glass-card glass-card-hover border border-slate-800 flex items-center gap-4"
              >
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-cyan-500/30 shadow-md"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{speaker.name}</h4>
                  <p className="text-xs text-cyan-400 font-mono">{speaker.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{speaker.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg">
          <div className="max-w-4xl w-full rounded-3xl overflow-hidden glass-card border border-cyan-500/40 relative p-4">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-950/80 text-white font-bold flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-colors"
            >
              ✕
            </button>
            <img src={selectedImg.url} alt="" className="w-full max-h-[70vh] object-cover rounded-2xl mb-4" />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-white">{selectedImg.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{selectedImg.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

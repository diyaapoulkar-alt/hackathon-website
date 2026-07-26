import React from 'react';
import { Terminal, Code, Globe, MessageSquare, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-slate-800/80 bg-slate-950 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold gradient-text">NEXUS 2026</span>
              <span className="text-xs text-slate-400 font-mono block">Data Science Club Recruitment Assignment</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
              <Code className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-400 gap-4">
          <p>© 2026 NEXUS Hackathon. Built for Data Science Club Recruitment Round 1.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> & React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

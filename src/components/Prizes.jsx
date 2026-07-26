import React from 'react';
import { PRIZES } from '../data/hackathonData';
import { Trophy, Gift, Sparkles, CheckCircle2, Flame } from 'lucide-react';

export default function Prizes() {
  return (
    <section id="prizes" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-amber-400 tracking-widest uppercase block mb-2">
            // REWARDS & BOUNTIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            $50,000+ Prize Pool
          </h2>
          <p className="mt-4 text-slate-400">
            Non-stop recognition, cash prizes, hardware credits, and seed incubation opportunities.
          </p>
        </div>

        {/* Prize Podium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {PRIZES.map((prize, idx) => (
            <div
              key={prize.rank}
              className={`p-8 rounded-3xl glass-card border border-slate-800 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 ${
                idx === 0 ? 'border-amber-500/50 shadow-2xl shadow-amber-500/10 md:-translate-y-4' : ''
              }`}
            >
              {idx === 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-yellow-600 px-4 py-1.5 rounded-bl-2xl text-[11px] font-black text-slate-950 uppercase tracking-widest flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-slate-950" /> GRAND CHAMPION
                </div>
              )}

              <div>
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className={`w-8 h-8 ${idx === 0 ? 'text-amber-400' : idx === 1 ? 'text-slate-300' : 'text-amber-700'}`} />
                </div>

                <span className="text-xs font-mono text-slate-400 tracking-wider block uppercase">{prize.rank}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{prize.title}</h3>
                <div className="text-4xl font-extrabold font-mono gradient-text mb-6">
                  {prize.amount}
                </div>

                <div className="space-y-3 mb-8">
                  {prize.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400">Includes Hardware & Cloud Perks</span>
              </div>
            </div>
          ))}
        </div>

        {/* Special Category Bounties */}
        <div className="p-8 rounded-3xl glass-card border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <Gift className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Special Sponsor Bounties & Hardware Grants</h4>
              <p className="text-slate-400 text-sm">Best Beginner Team, Best Hardware Hack, and Best Open Source Tooling prizes ($10,000 Total Allocation).</p>
            </div>
          </div>

          <a
            href="#sponsors"
            className="px-6 py-3 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 hover:text-white font-semibold text-sm transition-all whitespace-nowrap"
          >
            Explore Bounties
          </a>
        </div>
      </div>
    </section>
  );
}

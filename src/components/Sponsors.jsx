import React, { useState } from 'react';
import { SPONSORS, FAQS } from '../data/hackathonData';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function Sponsors() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="sponsors" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sponsors Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-2">
            // OUR POWERHOUSE PARTNERS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Backed By Global Tech Leaders
          </h2>
          <p className="mt-4 text-slate-400">
            Empowering hackathon participants with platform APIs, cloud compute grants, and career opportunities.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800 flex flex-col items-center justify-center text-center group"
            >
              <span className="text-lg font-black tracking-wider text-slate-300 group-hover:text-cyan-400 group-hover:glow-text-cyan transition-colors">
                {sponsor.logo}
              </span>
              <span className="text-[10px] font-mono text-slate-400 mt-2 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800">
                {sponsor.tier}
              </span>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div id="faq" className="max-w-4xl mx-auto pt-10">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase block mb-1">
              // GOT QUESTIONS?
            </span>
            <h3 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={faq.q}
                  className="rounded-2xl glass-card border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-white font-bold hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3 text-base sm:text-lg">
                      <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

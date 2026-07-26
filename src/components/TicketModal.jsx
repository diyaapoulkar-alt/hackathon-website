import React from 'react';
import { Terminal, Download, Sparkles, CheckCircle2, QrCode, Calendar, MapPin } from 'lucide-react';
import { HACKATHON_DETAILS } from '../data/hackathonData';

export default function TicketModal({ ticketData, onClose }) {
  if (!ticketData) return null;

  const ticketId = `NEXUS-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-xl w-full rounded-3xl glass-card border border-cyan-500/50 p-6 sm:p-8 relative shadow-2xl shadow-cyan-500/20 animate-float">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold text-lg cursor-pointer"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">REGISTRATION SUCCESSFUL</span>
          <h3 className="text-2xl font-black text-white mt-1">You Are Confirmed For NEXUS '26!</h3>
        </div>

        {/* Digital Ticket Card Graphic */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 relative overflow-hidden mb-6 shadow-inner">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="font-bold font-mono text-white text-base">NEXUS '26 PASS</span>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-[10px] font-mono text-cyan-300 border border-cyan-500/40">
              {ticketId}
            </span>
          </div>

          <div className="space-y-3 mb-6">
            <div>
              <span className="text-[10px] font-mono text-slate-400 block uppercase">HACKER NAME</span>
              <span className="text-lg font-bold text-white">{ticketData.fullName}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">SELECTED TRACK</span>
                <span className="text-xs font-semibold text-cyan-400">{ticketData.track}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">PARTICIPATION TYPE</span>
                <span className="text-xs font-semibold text-purple-400">
                  {ticketData.participationType === 'team' ? `Team: ${ticketData.teamName}` : 'Solo Hacker'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex justify-between items-center text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{HACKATHON_DETAILS.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{HACKATHON_DETAILS.location}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => alert(`Ticket PDF saved for ${ticketData.fullName}!`)}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Digital Ticket</span>
          </button>
        </div>
      </div>
    </div>
  );
}

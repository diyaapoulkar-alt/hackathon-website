import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function Countdown() {
  // Target date: October 24, 2026 09:00:00 AM IST
  const targetDate = new Date('2026-10-24T09:00:00+05:30').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 rounded-2xl glass-card border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
      <div className="flex items-center justify-center gap-2 mb-4 text-xs font-mono text-cyan-400 tracking-widest uppercase">
        <Clock className="w-4 h-4 animate-spin-slow" />
        <span>HACKATHON COUNTDOWN TO LAUNCH</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {timeUnits.map((unit, idx) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-4xl sm:text-5xl font-black font-mono gradient-text tracking-tighter">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 tracking-widest mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

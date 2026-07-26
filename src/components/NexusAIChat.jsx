import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Terminal, User } from 'lucide-react';
import { HACKATHON_DETAILS, TRACKS, PRIZES } from '../data/hackathonData';
import { audioSFX } from './AudioSFX';

export default function NexusAIChat() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Greetings Hacker! I am NEXUS AI. Ask me anything about challenge tracks, prize allocations, or team requirements.'
    }
  ]);

  const [input, setInput] = useState('');

  const quickPrompts = [
    'What is the total prize pool?',
    'What are the 3 tracks?',
    'What is the max team size?',
    'When does hacking start?'
  ];

  const handleSend = (userText) => {
    const textToSubmit = userText || input;
    if (!textToSubmit.trim()) return;

    audioSFX.init();
    audioSFX.playClickSFX();

    const newMsgs = [...messages, { sender: 'user', text: textToSubmit }];
    setMessages(newMsgs);
    if (!userText) setInput('');

    // Generate AI response based on query
    setTimeout(() => {
      let botReply = "NEXUS 2026 is a 48-hour global hybrid hackathon hosted by Data Science Club. Feel free to register using the 'Register Now' button!";

      const q = textToSubmit.toLowerCase();
      if (q.includes('prize') || q.includes('money') || q.includes('$')) {
        botReply = `The total prize pool is ${HACKATHON_DETAILS.prizePool}! Grand Champion wins $20,000 + VC Pitch meetings. 1st Runner Up wins $12,000, and 2nd Runner Up wins $8,000.`;
      } else if (q.includes('track') || q.includes('category') || q.includes('domain')) {
        botReply = `NEXUS '26 features 3 tracks: 1) Autonomous AI & Agentic Systems ($18k prize), 2) Quantum Computing & Algorithms ($17k prize), 3) Decentralized Tech & Smart Infra ($15k prize).`;
      } else if (q.includes('team') || q.includes('size') || q.includes('solo')) {
        botReply = `Teams can range from 1 to 4 members. You can register as a Solo Hacker or build a team of up to 4 developers.`;
      } else if (q.includes('start') || q.includes('schedule') || q.includes('date') || q.includes('when')) {
        botReply = `NEXUS 2026 runs from ${HACKATHON_DETAILS.date}. Hacking officially starts on Day 1 at 11:00 AM IST.`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => {
            audioSFX.init();
            audioSFX.playClickSFX();
            setIsOpen(true);
          }}
          onMouseEnter={() => audioSFX.playHoverSFX()}
          className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 text-white shadow-2xl shadow-cyan-500/40 hover:scale-110 transition-all flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <Bot className="w-7 h-7 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline font-bold text-sm">Ask NEXUS AI</span>
        </button>
      )}

      {/* AI Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 rounded-3xl glass-card border border-cyan-500/50 shadow-2xl overflow-hidden flex flex-col animate-float">
          {/* Header */}
          <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>NEXUS AI Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </h4>
                <span className="text-[10px] font-mono text-cyan-400">ONLINE // 24/7 SUPPORT</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-slate-950/60">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 text-xs ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Preset Prompts Pills */}
          <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-900 flex gap-2 overflow-x-auto">
            {quickPrompts.map((p) => (
              <button
                key={p}
                onClick={() => handleSend(p)}
                className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-400 hover:border-cyan-500/40 shrink-0 cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask NEXUS AI..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

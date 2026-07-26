import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Terminal, Sun, Moon, Sparkles, Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About & Tracks', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider gradient-text">NEXUS '26</span>
            <span className="text-[10px] tracking-widest text-cyan-400 font-mono">DSC RECRUITMENT</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Presets Dropdown */}
          <div className="flex items-center bg-slate-900/80 border border-slate-800 rounded-full p-1 text-xs">
            <button
              onClick={() => toggleTheme('cyber')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
                theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Cyber Neon"
            >
              <Sparkles className="w-3.5 h-3.5" /> Cyber
            </button>
            <button
              onClick={() => toggleTheme('obsidian')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
                theme === 'obsidian' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Obsidian Dark"
            >
              <Moon className="w-3.5 h-3.5" /> Dark
            </button>
            <button
              onClick={() => toggleTheme('light')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
                theme === 'light' ? 'bg-amber-500/20 text-amber-500 border border-amber-500/40' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Light Void"
            >
              <Sun className="w-3.5 h-3.5" /> Light
            </button>
          </div>

          {/* Register CTA Button */}
          <button
            onClick={onOpenRegister}
            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-4">
            <div className="flex justify-between items-center bg-slate-900 p-2 rounded-xl border border-slate-800">
              <span className="text-xs font-mono text-slate-400">THEME PRESET</span>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleTheme('cyber')}
                  className={`p-2 rounded-lg ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'}`}
                >
                  <Sparkles className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleTheme('obsidian')}
                  className={`p-2 rounded-lg ${theme === 'obsidian' ? 'bg-purple-500/20 text-purple-400' : 'text-slate-400'}`}
                >
                  <Moon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleTheme('light')}
                  className={`p-2 rounded-lg ${theme === 'light' ? 'bg-amber-500/20 text-amber-500' : 'text-slate-400'}`}
                >
                  <Sun className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white text-center shadow-lg shadow-cyan-500/20"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

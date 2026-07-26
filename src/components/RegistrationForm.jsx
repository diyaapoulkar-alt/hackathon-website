import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { User, Mail, Code, Users, Layers, AlertCircle, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { TRACKS } from '../data/hackathonData';

export default function RegistrationForm({ isOpen, onClose, onSuccess }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    github: '',
    college: '',
    participationType: 'team', // 'solo' or 'team'
    teamName: '',
    teammate1: '',
    teammate2: '',
    teammate3: '',
    track: TRACKS[0].title,
    experience: 'Intermediate',
    agreedTerms: false
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateStep = () => {
    const errs = {};
    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid Email is required';
      if (!formData.github.trim()) errs.github = 'GitHub Profile URL is required';
    } else if (step === 2) {
      if (formData.participationType === 'team' && !formData.teamName.trim()) {
        errs.teamName = 'Team Name is required';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    if (!formData.agreedTerms) {
      setErrors({ terms: 'You must agree to the Hackathon Code of Conduct' });
      return;
    }

    // Trigger Confetti Burst
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }

    onSuccess(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
      <div className="max-w-2xl w-full rounded-3xl glass-card border border-cyan-500/40 p-6 sm:p-10 relative my-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white font-bold text-lg cursor-pointer"
        >
          ✕
        </button>

        {/* Form Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-1">
            // HACKATHON ENTRY REGISTRATION
          </span>
          <h3 className="text-3xl font-black text-white">Join NEXUS 2026</h3>
          <p className="text-slate-400 text-sm mt-1">Complete all steps to secure your spot in the hackathon round.</p>
        </div>

        {/* Step Progress Indicator */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-10" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-cyan-400 transition-all duration-300 -z-10"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />

          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all ${
                step >= s
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400'
              }`}
            >
              {step > s ? <CheckCircle className="w-5 h-5" /> : s}
            </div>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* STEP 1: Personal Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">FULL NAME *</label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-pink-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}</p>}
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">EMAIL ADDRESS *</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@university.edu"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                {errors.email && <p className="text-xs text-pink-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.email}</p>}
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">GITHUB PROFILE URL *</label>
                <div className="relative">
                  <Code className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                {errors.github && <p className="text-xs text-pink-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.github}</p>}
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">COLLEGE / INSTITUTION / COMPANY</label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  placeholder="e.g. Data Science Institute / MIT"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Participation & Team */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-2">PARTICIPATION MODE</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, participationType: 'team' })}
                    className={`p-4 rounded-xl border font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.participationType === 'team'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Users className="w-4 h-4" /> Team (2-4 Hackers)
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, participationType: 'solo' })}
                    className={`p-4 rounded-xl border font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.participationType === 'solo'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <User className="w-4 h-4" /> Solo Hacker
                  </button>
                </div>
              </div>

              {formData.participationType === 'team' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">TEAM NAME *</label>
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="e.g. CyberSynapse Labs"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                    {errors.teamName && <p className="text-xs text-pink-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.teamName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">TEAM MEMBER EMAILS (OPTIONAL)</label>
                    <div className="space-y-2">
                      <input
                        type="email"
                        value={formData.teammate1}
                        onChange={(e) => setFormData({ ...formData, teammate1: e.target.value })}
                        placeholder="Teammate #2 Email"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm placeholder-slate-500"
                      />
                      <input
                        type="email"
                        value={formData.teammate2}
                        onChange={(e) => setFormData({ ...formData, teammate2: e.target.value })}
                        placeholder="Teammate #3 Email"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm placeholder-slate-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-2">TARGET HACKATHON TRACK</label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  {TRACKS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.prize})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* STEP 3: Confirm & Submit */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h4 className="text-base font-bold text-white mb-2">Registration Summary</h4>
                <div className="flex justify-between text-xs font-mono border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Lead Hacker:</span>
                  <span className="text-white font-bold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between text-xs font-mono border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Email:</span>
                  <span className="text-cyan-400">{formData.email}</span>
                </div>
                <div className="flex justify-between text-xs font-mono border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Track:</span>
                  <span className="text-purple-400">{formData.track}</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Participation:</span>
                  <span className="text-amber-400">
                    {formData.participationType === 'team' ? `Team: ${formData.teamName}` : 'Solo Hacker'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreedTerms}
                  onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-cyan-400 rounded cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-slate-300 cursor-pointer">
                  I agree to adhere to the NEXUS 2026 Code of Conduct and confirm all information submitted is accurate.
                </label>
              </div>
              {errors.terms && <p className="text-xs text-pink-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.terms}</p>}
            </div>
          )}

          {/* Form Actions Footer */}
          <div className="flex justify-between items-center pt-6 border-t border-slate-800">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-xs hover:text-white flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all cursor-pointer"
              >
                Confirm Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Prizes from './components/Prizes';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import RegistrationForm from './components/RegistrationForm';
import TicketModal from './components/TicketModal';
import NexusAIChat from './components/NexusAIChat';
import Footer from './components/Footer';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registeredData, setRegisteredData] = useState(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {/* Interactive Particle Canvas */}
        <ParticleBackground />

        {/* Navigation Bar */}
        <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* Hero Section */}
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* About & Challenge Tracks */}
        <About />

        {/* Interactive Schedule */}
        <Schedule />

        {/* Prizes & Bounties */}
        <Prizes />

        {/* Gallery & Speakers */}
        <Gallery />

        {/* Sponsors & FAQs */}
        <Sponsors />

        {/* Interactive Floating AI Assistant Bot */}
        <NexusAIChat />

        {/* Footer */}
        <Footer />

        {/* Multi-step Registration Modal */}
        <RegistrationForm
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onSuccess={(data) => setRegisteredData(data)}
        />

        {/* Digital Ticket Modal on Success */}
        <TicketModal
          ticketData={registeredData}
          onClose={() => setRegisteredData(null)}
        />
      </div>
    </ThemeProvider>
  );
}

import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ChatPopup from './components/ChatPopup';
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 1.5 }}>
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {/* Sales Conversion Tools */}
      <ChatPopup />
      <FloatingButtons />
      <Analytics />
      <SpeedInsights />
    </div>
    </ReactLenis>
  );
}

export default App;

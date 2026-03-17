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

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="h-20 bg-gradient-to-b from-white to-black" />
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
    </div>
  );
}

export default App;

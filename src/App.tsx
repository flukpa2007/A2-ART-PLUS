import CustomCursor from './components/CustomCursor';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import DesignPreview from './components/DesignPreview';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ChatPopup from './components/ChatPopup';
import { ReactLenis } from 'lenis/react'

function App() {
  return (

    <ReactLenis root options={{ lerp: 0.5, duration: 1.5 }}>
    <div className="min-h-screen bg-[#0c0c0c] font-sans text-zinc-900 selection:bg-red-600 selection:text-white">
      <CustomCursor />
      <main>
        <DesignPreview />
        <Portfolio />
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

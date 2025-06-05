import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Technologies from './components/sections/Technologies';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
      <div className="min-h-screen transition-colors duration-300 overflow-hidden">
        <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Portfolio />
            <Technologies />
            <Testimonials />
            <Process />
            {/* <Contact /> */}
          </main>
          <Footer />
          {/* <ChatWidget /> */}
        </div>
      </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 30;
      const moveY = (y - centerY) / 30;
      
      const orbs = heroRef.current.querySelectorAll('.orb');
      orbs.forEach((orb, index) => {
        const speed = index === 0 ? 0.5 : index === 1 ? 0.75 : 1;
        const el = orb as HTMLElement;
        el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      ref={heroRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb absolute top-[10%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-[60px] opacity-70"></div>
        <div className="orb absolute bottom-[10%] left-[10%] w-[20vw] h-[20vw] rounded-full bg-gradient-to-tr from-primary/20 to-success/20 blur-[80px] opacity-60"></div>
        <div className="orb absolute top-[30%] left-[20%] w-[15vw] h-[15vw] rounded-full bg-gradient-to-bl from-accent/10 to-warning/10 blur-[50px] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left lg:pr-8">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {t('hero.badge')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.title.part1')} <span className="gradient-text">{t('hero.title.highlight')}</span> {t('hero.title.part2')}
            </h1>
            
            <p className="text-base md:text-lg opacity-80 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn btn-primary">
                {t('hero.startProject')} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <a href="#portfolio" className="btn btn-outline">
                {t('hero.exploreWork')}
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* 3D Abstract Shape */}
               {/* 3D Abstract Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 aspect-square">
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/20 rotate-6 blur-sm"></div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/40 rotate-12 shadow-lg"></div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/80 rotate-6 shadow-xl backdrop-blur-md"></div>
                  
                  <div className="absolute top-[10%] left-[10%] w-[20%] h-[20%] rounded-full bg-white/50 floating-item-1"></div>
                  <div className="absolute bottom-[15%] right-[15%] w-[15%] h-[15%] rounded-full bg-white/50 floating-item-2"></div>
                  <div className="absolute bottom-[30%] left-[25%] w-[10%] h-[10%] rounded-md bg-white/40 floating-item-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </section>
  );
};

export default Hero;
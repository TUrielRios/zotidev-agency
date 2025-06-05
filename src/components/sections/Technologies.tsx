import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface Tech {
  name: string;
  icon: string;
  category: string;
}

const Technologies: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.tech-item');
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (containerTop < windowHeight * 0.75) {
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('animate-in');
          }, index * 100);
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const technologies: Tech[] = [
    // Frontend
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "frontend" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "frontend" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
    
    // Backend
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "backend" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "backend" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", category: "backend" },
    
    // Mobile
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "mobile" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "mobile" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", category: "mobile" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", category: "mobile" },
    
    // Database & Cloud
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "cloud" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "cloud" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "cloud" },
    
    // AI & ML
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "ai" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", category: "ai" },
  ];

  const features = [
    t('technologies.features.learning'),
    t('technologies.features.assessments'),
    t('technologies.features.labs'),
    t('technologies.features.contributions')
  ];
  
  return (
    <section id="technologies" className="py-24 bg-secondary">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            {t('technologies.title')} <span className="gradient-text">{t('technologies.titleHighlight')}</span>
          </h2>
          <p className="section-subtitle">
            {t('technologies.subtitle')}
          </p>
        </div>
        
        <div className="relative overflow-hidden" ref={containerRef}>
          {/* Tech Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="tech-item opacity-0 transform translate-y-10 transition-all duration-500 ease-out flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-3 bg-background rounded-xl p-3 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="text-xs font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
          
          {/* Floating Particles */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="floating-item-1 absolute top-[10%] left-[5%] w-6 h-6 rounded-full bg-primary/20"></div>
            <div className="floating-item-2 absolute top-[20%] right-[10%] w-10 h-10 rounded-full bg-accent/20"></div>
            <div className="floating-item-3 absolute bottom-[15%] left-[15%] w-8 h-8 rounded-full bg-success/20"></div>
            <div className="floating-item-1 absolute bottom-[25%] right-[20%] w-12 h-12 rounded-full bg-warning/20"></div>
          </div>
        </div>
        
        {/* Feature Callout */}
        <div className="mt-16 bg-background rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('technologies.callout.title')} <span className="gradient-text">{t('technologies.callout.titleHighlight')}</span>
              </h3>
              <p className="mb-6 opacity-80">
                {t('technologies.callout.description')}
              </p>
              <ul className="space-y-3">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-success/20 text-success flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-16 h-16 absolute top-0 left-[10%] floating-item-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12 absolute top-[20%] right-[15%] floating-item-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-full h-full" />
                  </div>
                  <div className="w-14 h-14 absolute bottom-[15%] left-[20%] floating-item-3">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-full h-full" />
                  </div>
                  <div className="w-16 h-16 absolute bottom-[10%] right-[10%] floating-item-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-full h-full" />
                  </div>
                  <div className="w-20 h-20 rounded-full bg-background shadow-xl flex items-center justify-center z-10">
                    <div className="w-12 h-12">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
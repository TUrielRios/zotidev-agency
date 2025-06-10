import React, { useEffect, useRef } from 'react';
import { AlignLeft, Code, Layout, Zap, CheckCircle, BarChart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Step {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const Process: React.FC = () => {
  const { t, language } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  const CONTACT_EMAIL = 'zotidevelopment@gmail.com'; // Reemplaza con tu email real

    // Función para abrir el cliente de correo
  const handleEmailContact = () => {
    // Textos según el idioma seleccionado
    const emailSubject = language === 'es' 
      ? 'Nuevo proyecto - Consulta desde el sitio web' 
      : 'New project - Inquiry from website';
    
    const emailBody = language === 'es'
      ? 'Hola, estoy interesado en iniciar un nuevo proyecto. Me gustaría obtener más información sobre sus servicios y discutir mis necesidades.'
      : 'Hello, I am interested in starting a new project. I would like to get more information about your services and discuss my needs.';
    
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.timeline-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);
  
  const steps: Step[] = [
    {
      icon: <AlignLeft className="h-6 w-6" />,
      titleKey: "process.discovery.title",
      descriptionKey: "process.discovery.description",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      titleKey: "process.design.title",
      descriptionKey: "process.design.description",
    },
    {
      icon: <Code className="h-6 w-6" />,
      titleKey: "process.development.title",
      descriptionKey: "process.development.description",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      titleKey: "process.testing.title",
      descriptionKey: "process.testing.description",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      titleKey: "process.deployment.title",
      descriptionKey: "process.deployment.description",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      titleKey: "process.maintenance.title",
      descriptionKey: "process.maintenance.description",
    }
  ];
  
  return (
    <section id="process" className="py-24 bg-white dark:bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            {t('process.title')} <span className="gradient-text">{t('process.titleHighlight')}</span>
          </h2>
          <p className="section-subtitle">
            {t('process.subtitle')}
          </p>
        </div>
        
        <div className="relative" ref={timelineRef}>
          {/* Vertical line for larger screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`timeline-item opacity-0 transition-all duration-700 ${
                  index % 2 === 0 ? 'md:translate-x-[-50px]' : 'md:translate-x-[50px]'
                }`}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Step Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-background p-6 rounded-xl shadow-lg border border-primary/10">
                      <h3 className="text-xl font-bold mb-3">{t(step.titleKey)}</h3>
                      <p className="opacity-80">{t(step.descriptionKey)}</p>
                    </div>
                  </div>
                  
                  {/* Center Icon - Mobile at left, Desktop in center */}
                  <div className="flex md:block my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white z-10 shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      {step.icon}
                    </div>
                    {/* Mobile timeline line */}
                    <div className="h-full md:hidden w-0.5 bg-primary/20 ml-6 flex-grow"></div>
                  </div>
                  
                  {/* Empty div for layout on Desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            {t('process.cta.title')} <span className="gradient-text">{t('process.cta.titleHighlight')}</span>?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 opacity-80">
            {t('process.cta.description')}
          </p>
          <a                 onClick={handleEmailContact}
 className="btn btn-primary">
            {t('process.cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
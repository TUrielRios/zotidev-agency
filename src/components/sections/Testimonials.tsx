import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext'; // Ajustar la ruta según tu estructura

interface Testimonial {
  id: number;
  nameKey: string;
  positionKey: string;
  companyKey: string;
  image: string;
  testimonialKey: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      nameKey: "testimonials.sarah.name",
      positionKey: "testimonials.sarah.position",
      companyKey: "testimonials.sarah.company",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonialKey: "testimonials.sarah.text",
      rating: 5
    },
    {
      id: 2,
      nameKey: "testimonials.michael.name",
      positionKey: "testimonials.michael.position",
      companyKey: "testimonials.michael.company",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonialKey: "testimonials.michael.text",
      rating: 5
    },
    {
      id: 3,
      nameKey: "testimonials.emily.name",
      positionKey: "testimonials.emily.position",
      companyKey: "testimonials.emily.company",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonialKey: "testimonials.emily.text",
      rating: 5
    },
    {
      id: 4,
      nameKey: "testimonials.david.name",
      positionKey: "testimonials.david.position",
      companyKey: "testimonials.david.company",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonialKey: "testimonials.david.text",
      rating: 4
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            {t('testimonials.title')} <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="relative overflow-hidden"
            ref={testimonialRef}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass card max-w-4xl mx-auto p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/10">
                        <img 
                          src={testimonial.image} 
                          alt={t(testimonial.nameKey)} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-warning fill-warning' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        
                        <p className="text-lg md:text-xl italic mb-6">
                          "{t(testimonial.testimonialKey)}"
                        </p>
                        
                        <div>
                          <h4 className="text-lg font-bold">{t(testimonial.nameKey)}</h4>
                          <p className="text-sm opacity-80">{t(testimonial.positionKey)}, {t(testimonial.companyKey)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-primary w-8' 
                    : 'bg-secondary-dark hover:bg-primary/50'
                }`}
                aria-label={`${t('testimonials.goTo')} ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            onClick={prevTestimonial}
            aria-label={t('testimonials.previous')}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            onClick={nextTestimonial}
            aria-label={t('testimonials.next')}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-24">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-12">
            {t('testimonials.trustIndicators')}
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Google', 'Microsoft', 'Amazon', 'IBM', 'Adobe'].map((company, index) => (
              <div 
                key={index} 
                className="text-xl md:text-2xl font-bold opacity-40 hover:opacity-100 transition-opacity font-['Orbitron']"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
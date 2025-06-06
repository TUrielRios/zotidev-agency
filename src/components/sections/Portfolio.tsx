import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import lacocina from '../../assets/lacocina-admin.png';
import defrancisco from '../../assets/defrancisco.png';
import pacta from '../../assets/pacta.png';
import martinvirasoro from '../../assets/martinvirasoro.png';
import robochef from '../../assets/robochef.png';
import cocteler from '../../assets/cocteler.png';

interface Project {
  id: number;
  titleKey: string;
  category: string;
  image: string;
  descriptionKey: string;
  technologies: string[];
  externalUrl?: string;
}

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      titleKey: "portfolio.project1.title",
      category: "web",
      image: defrancisco,
      descriptionKey: "portfolio.project1.description",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
      externalUrl: "https://defrancisco.com.ar"
    },
    {
      id: 2,
      titleKey: "portfolio.project2.title",
      category: "mobile",
      image: robochef,
      descriptionKey: "portfolio.project2.description",
      technologies: ["React Native", "Expo", "Typescript", "Android", "IOS"]
    },
    {
      id: 3,
      titleKey: "portfolio.project3.title",
      category: "enterprise",
      image: lacocina,
      descriptionKey: "portfolio.project3.description",
      technologies: ["Next.js", "Typescript", "Node.js", "Express.js", "PostgreSQL"]
    },
    {
      id: 4,
      titleKey: "portfolio.project4.title",
      category: "web",
      image: martinvirasoro,
      descriptionKey: "portfolio.project4.description",
      technologies: ["Wordpress", "Elementor", "HTML", "CSS", "JavaScript"]
    },
    {
      id: 5,
      titleKey: "portfolio.project5.title",
      category: "mobile",
      image: cocteler,
      descriptionKey: "portfolio.project5.description",
      technologies: ["React Native", "Expo", "Typescript", "Android", "IOS"]
    },
    {
      id: 6,
      titleKey: "portfolio.project6.title",
      category: "web",
      image: pacta,
      descriptionKey: "portfolio.project6.description",
      technologies: ["Next.js", "Typescript", "Tailwind"]
    }
  ];
  
  const categories = [
    { id: 'all', nameKey: 'portfolio.categories.all' },
    { id: 'web', nameKey: 'portfolio.categories.web' },
    { id: 'mobile', nameKey: 'portfolio.categories.mobile' },
    { id: 'enterprise', nameKey: 'portfolio.categories.enterprise' },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Función para navegar al detalle del proyecto usando el ID
  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  // Función para abrir proyecto externo
  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            {t('portfolio.title')} <span className="gradient-text">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="section-subtitle">
            {t('portfolio.subtitle')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'bg-secondary hover:bg-secondary-dark'
              }`}
            >
              {t(category.nameKey)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="group card bg-background overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 flex gap-4">
                    <button 
                      className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                    >
                      {t('portfolio.viewDetails')} <ExternalLink className="h-4 w-4" />
                    </button>
                    {project.externalUrl && (
                      <button 
                        className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                        onClick={(e) => handleExternalLink(project.externalUrl!, e)}
                      >
                        {t('portfolio.viewLive')} <ExternalLink className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t(project.titleKey)}</h3>
                <p className="mb-4 text-sm opacity-80">{t(project.descriptionKey)}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
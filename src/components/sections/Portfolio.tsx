import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Project {
  id: number;
  titleKey: string;
  category: string;
  image: string;
  descriptionKey: string;
  technologies: string[];
}

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      titleKey: "portfolio.project1.title",
      category: "web",
      image: "https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      descriptionKey: "portfolio.project1.description",
      technologies: ["React", "TypeScript", "Node.js", "D3.js", "WebSockets"]
    },
    {
      id: 2,
      titleKey: "portfolio.project2.title",
      category: "mobile",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      descriptionKey: "portfolio.project2.description",
      technologies: ["Flutter", "Firebase", "Stripe", "ARKit", "ARCore"]
    },
    {
      id: 3,
      titleKey: "portfolio.project3.title",
      category: "enterprise",
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      descriptionKey: "portfolio.project3.description",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "AWS"]
    },
    {
      id: 4,
      titleKey: "portfolio.project4.title",
      category: "ai",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      descriptionKey: "portfolio.project4.description",
      technologies: ["Python", "TensorFlow", "GPT-3", "Next.js", "MongoDB"]
    },
    {
      id: 5,
      titleKey: "portfolio.project5.title",
      category: "mobile",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      descriptionKey: "portfolio.project5.description",
      technologies: ["React Native", "GraphQL", "IoT", "AWS", "Machine Learning"]
    },
    {
      id: 6,
      titleKey: "portfolio.project6.title",
      category: "web",
      image: "https://res-console.cloudinary.com/dhiss395i/media_explorer_thumbnails/84e3e25e51bb7ace68b6776efec0441a/detailed",
      descriptionKey: "portfolio.project6.description",
      technologies: ["Vue.js", "Three.js", "Node.js", "PostgreSQL", "AWS"]
    }
  ];
  
  const categories = [
    { id: 'all', nameKey: 'portfolio.categories.all' },
    { id: 'web', nameKey: 'portfolio.categories.web' },
    { id: 'mobile', nameKey: 'portfolio.categories.mobile' },
    { id: 'enterprise', nameKey: 'portfolio.categories.enterprise' },
    { id: 'ai', nameKey: 'portfolio.categories.ai' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
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
              className="group card bg-background overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <a href="#" className="text-white hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                      {t('portfolio.viewProject')} <ExternalLink className="h-4 w-4" />
                    </a>
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
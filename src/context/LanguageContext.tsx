import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.technologies': 'Tecnologías',
    'nav.process': 'Proceso',
    'nav.contact': 'Contacto',
    'nav.getInTouch': 'Contáctanos',
    'nav.switchToDark': 'Cambiar a modo oscuro',
    'nav.switchToLight': 'Cambiar a modo claro',
    'nav.toggleMenu': 'Alternar menú',
    
    // Hero
    'hero.badge': 'Desarrollo de Software de Próxima Generación',
    'hero.title.part1': 'Construimos',
    'hero.title.highlight': 'Soluciones Digitales',
    'hero.title.part2': 'Para los Desafíos del Mañana',
    'hero.description': 'Creando experiencias digitales excepcionales a través de tecnologías de vanguardia y diseño innovador. Transformamos ideas complejas en soluciones de software elegantes y preparadas para el futuro.',
    'hero.startProject': 'Inicia Tu Proyecto',
    'hero.exploreWork': 'Explora Nuestro Trabajo',
    'hero.stats.years': 'Años de Experiencia',
    'hero.stats.projects': 'Proyectos Entregados',
    'hero.stats.team': 'Miembros del Equipo',
    'hero.stats.satisfaction': 'Satisfacción del Cliente',
    
    // Services
    'services.title': 'Nuestros',
    'services.titleHighlight': 'Servicios',
    'services.subtitle': 'Ofrecemos soluciones de software integrales adaptadas a las necesidades de tu negocio, combinando experiencia técnica con diseño innovador.',
    
    // Service Items
  'services.web.title': 'Desarrollo Web',
  'services.web.description': 'Creando aplicaciones web potentes y escalables con tecnologías y frameworks de vanguardia.',
  'services.web.feature1': 'Aplicaciones Web Progresivas',
  'services.web.feature2': 'Arquitectura SPA/MPA',
  'services.web.feature3': 'Diseño Responsivo',
  'services.web.feature4': 'Integración de APIs',
  'services.web.feature5': 'Desarrollo de CMS',

  'services.mobile.title': 'Aplicaciones Móviles',
  'services.mobile.description': 'Desarrollando aplicaciones móviles nativas y multiplataforma para iOS y Android.',
  'services.mobile.feature1': 'Apps Nativas (iOS/Android)',
  'services.mobile.feature2': 'Soluciones Multiplataforma',
  'services.mobile.feature3': 'UI/UX Móvil',
  'services.mobile.feature4': 'Notificaciones Push',
  'services.mobile.feature5': 'Capacidades Offline',

  'services.custom.title': 'Sistemas Personalizados',
  'services.custom.description': 'Desarrollando software a medida para optimizar operaciones, automatizar procesos y cubrir necesidades específicas.',
  'services.custom.feature1': 'Automatización de Procesos',
  'services.custom.feature2': 'Dashboards Personalizados',
  'services.custom.feature3': 'Gestión de Recursos',
  'services.custom.feature4': 'Integración con Sistemas Existentes',
  'services.custom.feature5': 'Arquitectura Escalable',

  'services.api.title': 'Integración de APIs y Microservicios',
  'services.api.description': 'Diseñando soluciones para conectar sistemas mediante APIs y arquitecturas de microservicios escalables.',
  'services.api.feature1': 'Diseño e Implementación de APIs',
  'services.api.feature2': 'Integración de Servicios Externos',
  'services.api.feature3': 'Arquitectura de Microservicios',
  'services.api.feature4': 'Soluciones de Backend Escalables',
  'services.api.feature5': 'Manejo de Autenticación y Seguridad',

  'services.analytics.title': 'Herramientas de Análisis de Datos',
  'services.analytics.description': 'Desarrollando herramientas personalizadas para procesar, visualizar y analizar datos de forma efectiva.',
  'services.analytics.feature1': 'Dashboards Interactivos',
  'services.analytics.feature2': 'Procesamiento de Datos en Tiempo Real',
  'services.analytics.feature3': 'Visualización de Datos Personalizada',
  'services.analytics.feature4': 'Integración con Fuentes de Datos',
  'services.analytics.feature5': 'Análisis Predictivo',

  'services.transformation.title': 'Transformación Digital',
  'services.transformation.description': 'Guiando empresas a través de procesos integrales de transformación digital.',
  'services.transformation.feature1': 'Estrategia Digital',
  'services.transformation.feature2': 'Optimización de Procesos',
  'services.transformation.feature3': 'Evaluación Tecnológica',
  'services.transformation.feature4': 'Migración a la Nube',
  'services.transformation.feature5': 'Hoja de Ruta de Innovación',

    // Portfolio
    'portfolio.title': 'Nuestro',
    'portfolio.titleHighlight': 'Portafolio',
    'portfolio.subtitle': 'Explora nuestros últimos proyectos y descubre cómo hemos ayudado a empresas de diversas industrias a alcanzar sus objetivos digitales.',
    'portfolio.viewProject': 'Ver Proyecto',
    
    // Portfolio Categories
    'portfolio.categories.all': 'Todos los Proyectos',
    'portfolio.categories.web': 'Aplicaciones Web',
    'portfolio.categories.mobile': 'Apps Móviles',
    'portfolio.categories.enterprise': 'Empresarial',
    'portfolio.categories.ai': 'IA y ML',
    
    // Portfolio Projects
    'portfolio.project1.title': 'Dashboard Fintech',
    'portfolio.project1.description': 'Un dashboard integral de análisis financiero con visualización de datos en tiempo real para clientes empresariales.',
    
    'portfolio.project2.title': 'App Móvil E-commerce',
    'portfolio.project2.description': 'Aplicación móvil de e-commerce con funciones avanzadas, visualización AR de productos y procesamiento seguro de pagos.',
    
    'portfolio.project3.title': 'Plataforma de Cadena de Suministro',
    'portfolio.project3.description': 'Plataforma de gestión de cadena de suministro basada en blockchain para rastrear autenticidad y procedencia de productos.',
    
    'portfolio.project4.title': 'Generador de Contenido IA',
    'portfolio.project4.description': 'Herramienta avanzada de creación de contenido impulsada por IA para equipos de marketing con soporte multiidioma.',
    
    'portfolio.project5.title': 'Sistema de Monitoreo de Salud',
    'portfolio.project5.description': 'Aplicación móvil de monitoreo de salud conectada a IoT para pacientes con condiciones crónicas.',
    
    'portfolio.project6.title': 'Plataforma Inmobiliaria',
    'portfolio.project6.description': 'Marketplace inmobiliario con tours virtuales y recomendaciones de propiedades impulsadas por IA.',

    // Technologies
    'technologies.title': 'Stack',
    'technologies.titleHighlight': 'Tecnológico',
    'technologies.subtitle': 'Aprovechamos tecnologías de vanguardia para construir soluciones digitales escalables, eficientes y preparadas para el futuro.',
    'technologies.callout.title': 'Nos Mantenemos a la Vanguardia de la',
    'technologies.callout.titleHighlight': 'Curva Tecnológica',
    'technologies.callout.description': 'Nuestro equipo explora y adopta continuamente tecnologías emergentes para asegurar que tu proyecto sea construido con las soluciones más eficientes, seguras y preparadas para el futuro disponibles.',
    'technologies.features.learning': 'Cultura de aprendizaje continuo',
    'technologies.features.assessments': 'Evaluaciones tecnológicas regulares',
    'technologies.features.labs': 'Laboratorios de innovación',
    'technologies.features.contributions': 'Contribuciones de código abierto',

    // Testimonials
    'testimonials.title': 'Testimonios de',
    'testimonials.titleHighlight': 'Clientes',
    'testimonials.subtitle': 'No solo escuches nuestras palabras. Descubre lo que nuestros clientes dicen sobre su experiencia trabajando con nosotros.',
    'testimonials.previous': 'Testimonio anterior',
    'testimonials.next': 'Siguiente testimonio',
    'testimonials.goTo': 'Ir al testimonio',
    'testimonials.trustIndicators': 'Confianza de Líderes de la Industria',
    
    // Testimonials Content
    'testimonials.sarah.name': 'Sarah Johnson',
    'testimonials.sarah.position': 'CTO',
    'testimonials.sarah.company': 'FinTech Innovations',
    'testimonials.sarah.text': 'Zotidev transformó nuestra visión en una plataforma financiera de vanguardia. Su experiencia técnica y atención al detalle resultaron en un producto que superó nuestras expectativas. No son solo desarrolladores; son socios estratégicos.',
    
    'testimonials.michael.name': 'Michael Chen',
    'testimonials.michael.position': 'Gerente de Producto',
    'testimonials.michael.company': 'RetailNow',
    'testimonials.michael.text': 'La aplicación móvil que Zotidev desarrolló para nosotros revolucionó nuestra experiencia de cliente. La capacidad del equipo para combinar características innovadoras con diseño intuitivo ha aumentado significativamente nuestro engagement y conversión de ventas.',
    
    'testimonials.emily.name': 'Emily Rodríguez',
    'testimonials.emily.position': 'Directora de Operaciones',
    'testimonials.emily.company': 'LogiTech Solutions',
    'testimonials.emily.text': 'Implementar la plataforma de cadena de suministro de Zotidev nos ha dado una visibilidad sin precedentes de nuestras operaciones. La integración blockchain asegura la integridad de datos, y el dashboard intuitivo se ha vuelto esencial para nuestras decisiones diarias.',
    
    'testimonials.david.name': 'David Okafor',
    'testimonials.david.position': 'CMO',
    'testimonials.david.company': 'ContentGenius',
    'testimonials.david.text': 'Su herramienta de generación de contenido con IA ha transformado completamente nuestras capacidades de marketing. Ahora producimos contenido de alta calidad a escala, lo que ha mejorado significativamente nuestra presencia digital y generación de leads.',
    //Process
    'process.title': 'Nuestro',
    'process.titleHighlight': 'Proceso',
    'process.subtitle': 'Seguimos una metodología de desarrollo probada que garantiza calidad, eficiencia y transparencia a lo largo de tu proyecto.',
    
    // Process Steps
    'process.discovery.title': 'Descubrimiento y Planificación',
    'process.discovery.description': 'Comenzamos entendiendo tus objetivos de negocio, audiencia objetivo y requisitos del proyecto a través de consultas exhaustivas e investigación.',
    
    'process.design.title': 'Diseño y Prototipado',
    'process.design.description': 'Nuestro equipo de diseño crea interfaces de usuario intuitivas y experiencias, con prototipos interactivos para visualizar el producto final.',
    
    'process.development.title': 'Desarrollo',
    'process.development.description': 'Usando metodologías ágiles, nuestros ingenieros construyen tu solución con código limpio y mantenible, con actualizaciones regulares de progreso.',
    
    'process.testing.title': 'Pruebas y Control de Calidad',
    'process.testing.description': 'Pruebas rigurosas en diferentes dispositivos y escenarios aseguran que tu producto funcione perfectamente y cumpla con los más altos estándares de calidad.',
    
    'process.deployment.title': 'Despliegue',
    'process.deployment.description': 'Manejamos el lanzamiento fluido de tu producto, asegurando un rendimiento óptimo y seguridad en el entorno de producción.',
    
    'process.maintenance.title': 'Mantenimiento y Crecimiento',
    'process.maintenance.description': 'Nuestra relación continúa con soporte continuo, monitoreo de rendimiento y mejoras estratégicas para impulsar el éxito continuo.',
    
    // Process CTA
    'process.cta.title': '¿Listo para iniciar tu',
    'process.cta.titleHighlight': 'próximo proyecto',
    'process.cta.description': 'Asóciate con nosotros para transformar tus ideas en experiencias digitales excepcionales. Creemos algo increíble juntos.',
    'process.cta.button': 'Comenzar',

     // Footer
    'footer.description': 'Zotidev es una agencia de desarrollo de software de vanguardia especializada en crear experiencias digitales excepcionales a través de diseño innovador y tecnología avanzada.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.backToTop': 'Volver arriba',
    
    // Footer - Company
    'footer.company.title': 'Empresa',
    'footer.company.about': 'Acerca de Nosotros',
    'footer.company.team': 'Nuestro Equipo',
    'footer.company.careers': 'Carreras',
    'footer.company.news': 'Noticias',
    'footer.company.contact': 'Contacto',
    
    // Footer - Services
    'footer.services.title': 'Servicios',
    'footer.services.web': 'Desarrollo Web',
    'footer.services.mobile': 'Aplicaciones Móviles',
    'footer.services.enterprise': 'Soluciones Empresariales',
    'footer.services.ai': 'Desarrollo de IA',
    'footer.services.blockchain': 'Blockchain',
    
    // Footer - Resources
    'footer.resources.title': 'Recursos',
    'footer.resources.blog': 'Blog',
    'footer.resources.cases': 'Casos de Estudio',
    'footer.resources.whitepapers': 'Documentos Técnicos',
    'footer.resources.technologies': 'Tecnologías',
    'footer.resources.faq': 'Preguntas Frecuentes',
    
    // Footer - Legal
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Política de Privacidad',
    'footer.legal.terms': 'Términos de Servicio',
    'footer.legal.cookies': 'Política de Cookies',
    'footer.legal.gdpr': 'Cumplimiento GDPR',
},
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.technologies': 'Technologies',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.getInTouch': 'Get in Touch',
    'nav.switchToDark': 'Switch to dark mode',
    'nav.switchToLight': 'Switch to light mode',
    'nav.toggleMenu': 'Toggle menu',
    
    // Hero
    'hero.badge': 'Next-Generation Software Development',
    'hero.title.part1': 'We Build',
    'hero.title.highlight': 'Digital Solutions',
    'hero.title.part2': 'For Tomorrow\'s Challenges',
    'hero.description': 'Crafting exceptional digital experiences through cutting-edge technologies and innovative design. We transform complex ideas into elegant, future-proof software solutions.',
    'hero.startProject': 'Start Your Project',
    'hero.exploreWork': 'Explore Our Work',
    'hero.stats.years': 'Years Experience',
    'hero.stats.projects': 'Projects Delivered',
    'hero.stats.team': 'Team Members',
    'hero.stats.satisfaction': 'Client Satisfaction',
    
    // Services
    'services.title': 'Our',
    'services.titleHighlight': 'Services',
    'services.subtitle': 'We deliver end-to-end software solutions tailored to your business needs, combining technical expertise with innovative design.',
    
    // Service Items
'services.web.title': 'Web Development',
'services.web.description': 'Creating powerful, scalable web applications with cutting-edge technologies and frameworks.',
'services.web.feature1': 'Progressive Web Apps',
'services.web.feature2': 'SPA/MPA Architecture',
'services.web.feature3': 'Responsive Design',
'services.web.feature4': 'API Integration',
'services.web.feature5': 'CMS Development',

'services.mobile.title': 'Mobile Applications',
'services.mobile.description': 'Building native and cross-platform mobile applications for iOS and Android platforms.',
'services.mobile.feature1': 'Native Apps (iOS/Android)',
'services.mobile.feature2': 'Cross-Platform Solutions',
'services.mobile.feature3': 'Mobile UI/UX',
'services.mobile.feature4': 'Push Notifications',
'services.mobile.feature5': 'Offline Capabilities',

'services.custom.title': 'Custom Systems',
'services.custom.description': 'Developing tailored software to optimize operations, automate processes, and meet specific needs.',
'services.custom.feature1': 'Process Automation',
'services.custom.feature2': 'Custom Dashboards',
'services.custom.feature3': 'Resource Management',
'services.custom.feature4': 'Legacy System Integration',
'services.custom.feature5': 'Scalable Architecture',

'services.api.title': 'API and Microservices Integration',
'services.api.description': 'Designing solutions to connect systems through APIs and scalable microservices architectures.',
'services.api.feature1': 'API Design and Implementation',
'services.api.feature2': 'External Service Integration',
'services.api.feature3': 'Microservices Architecture',
'services.api.feature4': 'Scalable Backend Solutions',
'services.api.feature5': 'Authentication and Security Management',

'services.analytics.title': 'Data Analysis Tools',
'services.analytics.description': 'Creating custom tools to process, visualize, and analyze data effectively.',
'services.analytics.feature1': 'Interactive Dashboards',
'services.analytics.feature2': 'Real-Time Data Processing',
'services.analytics.feature3': 'Custom Data Visualization',
'services.analytics.feature4': 'Integration with Data Sources',
'services.analytics.feature5': 'Predictive Analysis',

'services.transformation.title': 'Digital Transformation',
'services.transformation.description': 'Guiding businesses through comprehensive digital transformation journeys.',
'services.transformation.feature1': 'Digital Strategy',
'services.transformation.feature2': 'Process Optimization',
'services.transformation.feature3': 'Technology Assessment',
'services.transformation.feature4': 'Cloud Migration',
'services.transformation.feature5': 'Innovation Roadmap',


    // Portfolio
    'portfolio.title': 'Our',
    'portfolio.titleHighlight': 'Portfolio',
    'portfolio.subtitle': 'Explore our latest projects and discover how we\'ve helped businesses across industries achieve their digital goals.',
    'portfolio.viewProject': 'View Project',
    
    // Portfolio Categories
    'portfolio.categories.all': 'All Projects',
    'portfolio.categories.web': 'Web Apps',
    'portfolio.categories.mobile': 'Mobile Apps',
    'portfolio.categories.enterprise': 'Enterprise',
    'portfolio.categories.ai': 'AI & ML',
    
    // Portfolio Projects
    'portfolio.project1.title': 'Fintech Dashboard',
    'portfolio.project1.description': 'A comprehensive financial analytics dashboard with real-time data visualization for enterprise clients.',
    
    'portfolio.project2.title': 'E-commerce Mobile App',
    'portfolio.project2.description': 'Feature-rich e-commerce mobile application with AR product visualization and secure payment processing.',
    
    'portfolio.project3.title': 'Supply Chain Platform',
    'portfolio.project3.description': 'Blockchain-based supply chain management platform for tracking product authenticity and provenance.',
    
    'portfolio.project4.title': 'AI Content Generator',
    'portfolio.project4.description': 'Advanced AI-powered content creation tool for marketing teams with multi-language support.',
    
    'portfolio.project5.title': 'Health Monitoring System',
    'portfolio.project5.description': 'IoT-connected health monitoring mobile application for patients with chronic conditions.',
    
    'portfolio.project6.title': 'Real Estate Platform',
    'portfolio.project6.description': 'Virtual tour-enabled real estate marketplace with AI-powered property recommendations.',

    // Technologies
    'technologies.title': 'Tech',
    'technologies.titleHighlight': 'Stack',
    'technologies.subtitle': 'We leverage cutting-edge technologies to build scalable, efficient, and future-proof digital solutions.',
    'technologies.callout.title': 'We Stay Ahead of the',
    'technologies.callout.titleHighlight': 'Technology Curve',
    'technologies.callout.description': 'Our team continuously explores and adopts emerging technologies to ensure your project is built with the most efficient, secure, and future-proof solutions available.',
    'technologies.features.learning': 'Continuous learning culture',
    'technologies.features.assessments': 'Regular technology assessments',
    'technologies.features.labs': 'Innovation labs',
    'technologies.features.contributions': 'Open-source contributions',

    // Testimonials
    'testimonials.title': 'Client',
    'testimonials.titleHighlight': 'Testimonials',
    'testimonials.subtitle': 'Don\'t just take our word for it. Hear what our clients have to say about their experience working with us.',
    'testimonials.previous': 'Previous testimonial',
    'testimonials.next': 'Next testimonial',
    'testimonials.goTo': 'Go to testimonial',
    'testimonials.trustIndicators': 'Trusted by Industry Leaders',
    
    // Testimonials Content
    'testimonials.sarah.name': 'Sarah Johnson',
    'testimonials.sarah.position': 'CTO',
    'testimonials.sarah.company': 'FinTech Innovations',
    'testimonials.sarah.text': 'Zotidev transformed our vision into a cutting-edge financial platform. Their technical expertise and attention to detail resulted in a product that exceeded our expectations. They\'re not just developers; they\'re strategic partners.',
    
    'testimonials.michael.name': 'Michael Chen',
    'testimonials.michael.position': 'Product Manager',
    'testimonials.michael.company': 'RetailNow',
    'testimonials.michael.text': 'The mobile app Zotidev developed for us revolutionized our customer experience. The team\'s ability to blend innovative features with intuitive design has significantly increased our customer engagement and sales conversion.',
    
    'testimonials.emily.name': 'Emily Rodriguez',
    'testimonials.emily.position': 'Director of Operations',
    'testimonials.emily.company': 'LogiTech Solutions',
    'testimonials.emily.text': 'Implementing Zotidev\'s supply chain platform has given us unprecedented visibility into our operations. The blockchain integration ensures data integrity, and the intuitive dashboard has become essential for our daily decision-making.',
    
    'testimonials.david.name': 'David Okafor',
    'testimonials.david.position': 'CMO',
    'testimonials.david.company': 'ContentGenius',
    'testimonials.david.text': 'Their AI content generation tool has completely transformed our marketing capabilities. We\'re now producing high-quality content at scale, which has significantly improved our digital presence and lead generation efforts.',
    //Process
    // Process
    'process.title': 'Our',
    'process.titleHighlight': 'Process',
    'process.subtitle': 'We follow a proven development methodology that ensures quality, efficiency, and transparency throughout your project.',
    
    // Process Steps
    'process.discovery.title': 'Discovery & Planning',
    'process.discovery.description': 'We begin by understanding your business goals, target audience, and project requirements through in-depth consultations and research.',
    
    'process.design.title': 'Design & Prototyping',
    'process.design.description': 'Our design team creates intuitive user interfaces and experiences, with interactive prototypes to visualize the final product.',
    
    'process.development.title': 'Development',
    'process.development.description': 'Using agile methodologies, our engineers build your solution with clean, maintainable code and regular progress updates.',
    
    'process.testing.title': 'Testing & QA',
    'process.testing.description': 'Rigorous testing across devices and scenarios ensures your product performs flawlessly and meets the highest quality standards.',
    
    'process.deployment.title': 'Deployment',
    'process.deployment.description': 'We handle the seamless launch of your product, ensuring optimal performance and security in the production environment.',
    
    'process.maintenance.title': 'Maintenance & Growth',
    'process.maintenance.description': 'Our relationship continues with ongoing support, performance monitoring, and strategic enhancements to drive continued success.',
    
    // Process CTA
    'process.cta.title': 'Ready to start your',
    'process.cta.titleHighlight': 'next project',
    'process.cta.description': 'Partner with us to transform your ideas into exceptional digital experiences. Let\'s create something amazing together.',
    'process.cta.button': 'Get Started',

    // Footer
    'footer.description': 'Zotidev is a cutting-edge software development agency specializing in crafting exceptional digital experiences through innovative design and advanced technology.',
    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'Back to top',
    
    // Footer - Company
    'footer.company.title': 'Company',
    'footer.company.about': 'About Us',
    'footer.company.team': 'Our Team',
    'footer.company.careers': 'Careers',
    'footer.company.news': 'News',
    'footer.company.contact': 'Contact',
    
    // Footer - Services
    'footer.services.title': 'Services',
    'footer.services.web': 'Web Development',
    'footer.services.mobile': 'Mobile Applications',
    'footer.services.enterprise': 'Enterprise Solutions',
    'footer.services.ai': 'AI Development',
    'footer.services.blockchain': 'Blockchain',
    
    // Footer - Resources
    'footer.resources.title': 'Resources',
    'footer.resources.blog': 'Blog',
    'footer.resources.cases': 'Case Studies',
    'footer.resources.whitepapers': 'Whitepapers',
    'footer.resources.technologies': 'Technologies',
    'footer.resources.faq': 'FAQ',
    
    // Footer - Legal
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.cookies': 'Cookie Policy',
    'footer.legal.gdpr': 'GDPR Compliance',
}
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Español por defecto

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
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
    'hero.title.highlight': 'soluciones digitales',
    'hero.title.part2': 'para los desafíos del mañana',
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
    'portfolio.viewDetails': 'Ver Detalles',
    
    // Portfolio Categories
    'portfolio.categories.all': 'Todos los Proyectos',
    'portfolio.categories.web': 'Web',
    'portfolio.categories.mobile': 'Apps Móviles',
    'portfolio.categories.enterprise': 'Empresarial',
    'portfolio.categories.ai': 'IA y ML',
    
    // Portfolio Projects
'portfolio.project1.title': 'Web App de Estudio de Arquitectura',
'portfolio.project1.description': 'Diseño y desarrollo de una plataforma web para un estudio de arquitectura, mostrando proyectos destacados, servicios ofrecidos y contacto profesional. Cuenta con panel de administrador personalizado para gestión de contenidos.',

'portfolio.project2.title': 'App Móvil de Recetas',
'portfolio.project2.description': 'Aplicación móvil intuitiva que permite a los usuarios explorar, guardar y compartir recetas, con funciones como filtros por ingredientes y temporizadores integrados.',

'portfolio.project3.title': 'Plataforma de Análisis Empresarial',
'portfolio.project3.description': 'Herramienta web para análisis de datos empresariales, que incluye dashboards personalizados y generación de informes automáticos.',

'portfolio.project4.title': 'Página Web de Escritor',
'portfolio.project4.description': 'Sitio web personal para un escritor, destacando su portafolio literario, blog personal y una tienda en línea para venta de libros.',

'portfolio.project5.title': 'Aplicación Móvil de Coctelería',
'portfolio.project5.description': 'App móvil interactiva que ofrece recetas de cócteles, consejos de mixología y una sección de favoritos para los amantes de la coctelería.',

'portfolio.project6.title': 'Página Web de Estudio Jurídico',
'portfolio.project6.description': 'Página profesional para un estudio jurídico, con secciones detalladas de áreas de práctica, perfiles de abogados y un formulario de consulta en línea.',

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

    // Portfolio Detail Pages
    'portfolio.backToProjects': 'Volver al Inicio',
    'portfolio.overview': 'Descripción General',
    'portfolio.challenge': 'Desafío',
    'portfolio.solution': 'Solución',
    'portfolio.results': 'Resultados',
    'portfolio.client': 'Cliente',
    'portfolio.keyFeatures': 'Características Principales',
    'portfolio.links': 'Enlaces',
    'portfolio.visitWebsite': 'Visitar Sitio Web',
    'portfolio.appStore': 'Descargar en App Store',
    'portfolio.playStore': 'Descargar en Play Store',

    // Project 1 - Architecture Studio
    'portfolio.project1.challenge': 'El estudio de arquitectura necesitaba una plataforma web moderna que reflejara su prestigio y permitiera mostrar su portafolio de manera elegante y profesional.',
    'portfolio.project1.solution': 'Desarrollamos una plataforma web personalizada con un diseño minimalista y sofisticado, incorporando un sistema de gestión de contenidos intuitivo.',
    'portfolio.project1.results': 'El nuevo sitio web ha aumentado significativamente la visibilidad online del estudio y ha mejorado la experiencia de los clientes potenciales.',
    'portfolio.project1.client': 'Estudio de Arquitectura De Francisco',
    'portfolio.project1.feature1': 'Galería de proyectos interactiva',
    'portfolio.project1.feature2': 'Panel de administración personalizado',
    'portfolio.project1.feature3': 'Optimización SEO',
    'portfolio.project1.feature4': 'Integración con redes sociales',
    'portfolio.project1.image1.caption': 'Página principal del sitio web',
    
    'portfolio.project2.challenge': 'Los usuarios necesitaban una forma inteligente de encontrar recetas basadas en lo que tenían en su refrigerador, sin tener que buscar manualmente.',
    'portfolio.project2.solution': 'Desarrollamos una app con reconocimiento de ingredientes mediante IA, sistema de recomendación personalizado y funciones interactivas de cocina.',
    'portfolio.project2.results': 'Más de 5.000 recetas, con integración IA incluída. Permite a los usuarios cocinar de manera más eficiente y disfrutar de una experiencia culinaria personalizada.',
    'portfolio.project2.client': 'Startup de Tecnología Alimentaria',
    'portfolio.project2.feature1': 'Búsqueda por ingredientes disponibles',
    'portfolio.project2.feature2': 'Temporizadores inteligentes para cada paso',
    'portfolio.project2.feature3': 'Listas de compras generadas automáticamente',
    'portfolio.project2.feature4': 'Sistema de valoración y comentarios',
    'portfolio.project2.image1.caption': 'Interfaz principal de la app RoboChef',

    'portfolio.project3.challenge': 'La empresa necesitaba consolidar datos de múltiples fuentes en una sola plataforma con capacidades avanzadas de análisis y reporting.',
    'portfolio.project3.solution': 'Creamos una plataforma modular con integración de datos en tiempo real, herramientas de visualización y generación automática de informes.',
    'portfolio.project3.results': 'Reducción del 70% en tiempo de generación de reportes, mejor toma de decisiones basada en datos y escalabilidad para futuras integraciones.',
    'portfolio.project3.client': 'Corporación de Servicios Alimentarios',
    'portfolio.project3.feature1': 'Dashboards personalizables por usuario',
    'portfolio.project3.feature2': 'Integración con múltiples fuentes de datos',
    'portfolio.project3.feature3': 'Exportación de informes en varios formatos',
    'portfolio.project3.feature4': 'Sistema de alertas y notificaciones',
    'portfolio.project3.image1.caption': 'Panel de control principal de la plataforma',

    'portfolio.project4.challenge': 'El escritor necesitaba una plataforma centralizada para conectar con sus lectores, promocionar sus obras y gestionar su agenda pública.',
    'portfolio.project4.solution': 'Desarrollamos un sitio elegante y fácil de navegar con secciones para publicaciones, eventos, tienda de libros y contacto profesional.',
    'portfolio.project4.results': 'Aumento del 35% en ventas directas de libros, mayor interacción con lectores y plataforma unificada para gestión de contenido.',
    'portfolio.project4.client': 'Martín Virasoro - Escritor',
    'portfolio.project4.feature1': 'Catálogo completo de obras publicadas',
    'portfolio.project4.feature2': 'Blog integrado con sistema de comentarios',
    'portfolio.project4.feature3': 'Calendario de eventos y presentaciones',
    'portfolio.project4.feature4': 'Tienda en línea para venta directa',
    'portfolio.project4.image1.caption': 'Página de inicio del sitio web del autor',

    'portfolio.project5.challenge': 'Los entusiastas de los cócteles necesitaban una app que fuera más allá de simples recetas, ofreciendo guías prácticas y personalización.',
    'portfolio.project5.solution': 'Creamos una aplicación con realidad aumentada para visualizar preparaciones, sistema de inventario y comunidad para compartir creaciones.',
    'portfolio.project5.results': 'Usuarios activos mensuales y una comunidad creciente de mixólogos.',
    'portfolio.project5.client': 'Empresa de Entretenimiento Gastronómico',
    'portfolio.project5.feature1': 'Base de datos con 500+ recetas de cócteles',
    'portfolio.project5.feature2': 'Tutoriales en video paso a paso',
    'portfolio.project5.feature3': 'Sistema de inventario personalizado',
    'portfolio.project5.feature4': 'Realidad aumentada para visualización',
    'portfolio.project5.image1.caption': 'Interfaz de búsqueda de recetas en Cocteler',

    'portfolio.project6.challenge': 'El estudio necesitaba un sitio web que transmitiera profesionalismo y confianza, con acceso seguro a consultas de clientes potenciales.',
    'portfolio.project6.solution': 'Desarrollamos un diseño sobrio y profesional con sistema de citas en línea, blog jurídico y área privada para clientes existentes.',
    'portfolio.project6.results': 'Aumento del 60% en consultas calificadas, mejor posicionamiento en búsquedas legales y plataforma unificada para el equipo.',
    'portfolio.project6.client': 'Estudio Jurídico Pacta',
    'portfolio.project6.feature1': 'Perfiles detallados de abogados',
    'portfolio.project6.feature2': 'Sistema de citas en línea',
    'portfolio.project6.feature3': 'Blog con artículos jurídicos',
    'portfolio.project6.feature4': 'Área privada para clientes',
    'portfolio.project6.image1.caption': 'Página principal del estudio jurídico',
     // Footer
    'footer.description': 'Zotidev es una agencia de desarrollo de software de vanguardia especializada en crear experiencias digitales excepcionales a través de diseño innovador y tecnología avanzada.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.backToTop': 'Volver arriba',
    
    // Footer - Company
    'footer.company.title': 'Empresa',
    'footer.company.about': 'Acerca de Nosotros',
    'footer.company.team': 'Nuestro Stack',
    'footer.company.careers': 'Nuestro Proceso',
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
    'hero.title.part1': 'We build',
    'hero.title.highlight': 'digital solutions',
    'hero.title.part2': 'for tomorrow\'s Challenges',
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
    'portfolio.viewDetails': 'View Details',
    
    // Portfolio Categories
    'portfolio.categories.all': 'All Projects',
    'portfolio.categories.web': 'Web',
    'portfolio.categories.mobile': 'Mobile Apps',
    'portfolio.categories.enterprise': 'Enterprise',
    'portfolio.categories.ai': 'AI & ML',
    
    // Portfolio Projects (English)
    'portfolio.project1.title': 'Architecture Studio Web App',
    'portfolio.project1.description': 'Design and development of a web platform for an architecture studio, showcasing featured projects, offered services, and professional contact options. Includes a custom admin panel for content management.',

    'portfolio.project2.title': 'Recipe Mobile App',
    'portfolio.project2.description': 'Intuitive mobile application allowing users to explore, save, and share recipes, with features like ingredient filters and integrated timers.',

    'portfolio.project3.title': 'Business Analytics Platform',
    'portfolio.project3.description': 'Web tool for business data analysis, including customized dashboards and automated report generation.',

    'portfolio.project4.title': 'Writer’s Personal Website',
    'portfolio.project4.description': 'Personal website for a writer, highlighting their literary portfolio, personal blog, and an online store for selling books.',

    'portfolio.project5.title': 'Cocktail Mobile App',
    'portfolio.project5.description': 'Interactive mobile app offering cocktail recipes, mixology tips, and a favorites section for cocktail enthusiasts.',

    'portfolio.project6.title': 'Law Firm Website',
    'portfolio.project6.description': 'Professional website for a law firm, with detailed sections on practice areas, attorney profiles, and an online consultation form.',

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


    // Portfolio Detail Pages
'portfolio.backToProjects': 'Back to Home',
'portfolio.overview': 'Overview',
'portfolio.challenge': 'Challenge',
'portfolio.solution': 'Solution',
'portfolio.results': 'Results',
'portfolio.client': 'Client',
'portfolio.keyFeatures': 'Key Features',
'portfolio.links': 'Links',
'portfolio.visitWebsite': 'Visit Website',
'portfolio.appStore': 'Download on App Store',
'portfolio.playStore': 'Download on Play Store',
    //Project Detail Pages
    'portfolio.project1.challenge': 'The studio needed a professional digital presence that reflected their brand identity and displayed their portfolio of architectural projects in an elegant and organized manner.',
'portfolio.project1.solution': 'We developed a custom website with minimalist design, interactive project gallery, and content management system allowing the team to easily update their portfolio.',
'portfolio.project1.results': '40% increase in potential client inquiries, improved search engine ranking, and an easy-to-maintain platform that reflects the studio\'s quality.',
'portfolio.project1.client': 'De Francisco Architecture Studio',
'portfolio.project1.feature1': 'Interactive project gallery with filters',
'portfolio.project1.feature2': 'Custom admin dashboard',
'portfolio.project1.feature3': 'Responsive, mobile-optimized design',
'portfolio.project1.feature4': 'Social media and Google Maps integration',
'portfolio.project1.image1.caption': 'Studio website homepage',

'portfolio.project2.challenge': 'Users needed a smart way to find recipes based on what they had in their fridge, without having to search manually.',
'portfolio.project2.solution': 'We developed an app with AI-powered ingredient recognition, personalized recommendation system, and interactive cooking features.',
'portfolio.project2.results': 'Over 5.000 recipes, including AI integration. It allows users to cook more efficiently and enjoy a personalized culinary experience.',
'portfolio.project2.client': 'Food Tech Startup',
'portfolio.project2.feature1': 'Search by available ingredients',
'portfolio.project2.feature2': 'Smart timers for each cooking step',
'portfolio.project2.feature3': 'Automatically generated shopping lists',
'portfolio.project2.feature4': 'Rating and review system',
'portfolio.project2.image1.caption': 'RoboChef app main interface',

'portfolio.project3.challenge': 'The company needed to consolidate data from multiple sources into a single platform with advanced analysis and reporting capabilities.',
'portfolio.project3.solution': 'We created a modular platform with real-time data integration, visualization tools, and automated report generation.',
'portfolio.project3.results': '70% reduction in report generation time, improved data-driven decision making, and scalability for future integrations.',
'portfolio.project3.client': 'Food Services Corporation',
'portfolio.project3.feature1': 'User-customizable dashboards',
'portfolio.project3.feature2': 'Integration with multiple data sources',
'portfolio.project3.feature3': 'Multi-format report export',
'portfolio.project3.feature4': 'Alert and notification system',
'portfolio.project3.image1.caption': 'Platform main dashboard',

'portfolio.project4.challenge': 'The writer needed a centralized platform to connect with readers, promote his works, and manage his public schedule.',
'portfolio.project4.solution': 'We developed an elegant, easy-to-navigate site with sections for publications, events, book store, and professional contact.',
'portfolio.project4.results': '35% increase in direct book sales, higher reader engagement, and unified content management platform.',
'portfolio.project4.client': 'Martín Virasoro - Writer',
'portfolio.project4.feature1': 'Complete catalog of published works',
'portfolio.project4.feature2': 'Integrated blog with comment system',
'portfolio.project4.feature3': 'Event and presentation calendar',
'portfolio.project4.feature4': 'Online store for direct sales',
'portfolio.project4.image1.caption': 'Author website homepage',

'portfolio.project5.challenge': 'Cocktail lovers needed an app that went beyond simple recipes, offering practical guides and personalization.',
'portfolio.project5.solution': 'We created an app with augmented reality for preparation visualization, inventory system, and community for sharing creations.',
'portfolio.project5.results': 'Monthly active users and a growing community of mixologists.',
'portfolio.project5.client': 'Gastronomic Entertainment Company',
'portfolio.project5.feature1': 'Database with 500+ cocktail recipes',
'portfolio.project5.feature2': 'Step-by-step video tutorials',
'portfolio.project5.feature3': 'Custom inventory system',
'portfolio.project5.feature4': 'Augmented reality visualization',
'portfolio.project5.image1.caption': 'Cocteler recipe search interface',

'portfolio.project6.challenge': 'The firm needed a website that conveyed professionalism and trust, with secure access for potential client inquiries.',
'portfolio.project6.solution': 'We developed a sober, professional design with online appointment system, legal blog, and private area for existing clients.',
'portfolio.project6.results': '60% increase in qualified inquiries, better ranking for legal searches, and unified platform for the team.',
'portfolio.project6.client': 'Pacta Law Firm',
'portfolio.project6.feature1': 'Detailed attorney profiles',
'portfolio.project6.feature2': 'Online appointment system',
'portfolio.project6.feature3': 'Legal blog with articles',
'portfolio.project6.feature4': 'Private client area',
'portfolio.project6.image1.caption': 'Law firm homepage',

    // Footer
    'footer.description': 'Zotidev is a cutting-edge software development agency specializing in crafting exceptional digital experiences through innovative design and advanced technology.',
    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'Back to top',
    
    // Footer - Company
    'footer.company.title': 'Company',
    'footer.company.about': 'About Us',
    'footer.company.team': 'Our Stack',
    'footer.company.careers': 'Our Process',
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

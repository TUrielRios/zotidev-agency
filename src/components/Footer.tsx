import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import logowhite from '../assets/1.png';
import logoblack from '../assets/3.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const footerLinks = [
    {
      titleKey: 'footer.company.title',
      links: [
        { nameKey: 'footer.company.team', href: '#technologies' },
        { nameKey: 'footer.company.careers', href: '#process' },
      ],
    },
    {
      titleKey: 'footer.services.title',
      links: [
        { nameKey: 'footer.services.web', href: '#services' },
        { nameKey: 'footer.services.mobile', href: '#services' },
        { nameKey: 'footer.services.enterprise', href: '#services' },
        { nameKey: 'footer.services.ai', href: '#services' },
      ],
    },
    {
      titleKey: 'footer.resources.title',
      links: [
        { nameKey: 'footer.resources.blog', href: '#' },
        { nameKey: 'footer.resources.cases', href: '#portfolio' },
        { nameKey: 'footer.resources.whitepapers', href: '#' },
        { nameKey: 'footer.resources.technologies', href: '#technologies' },
        { nameKey: 'footer.resources.faq', href: '#' },
      ],
    },
    {
      titleKey: 'footer.legal.title',
      links: [
        { nameKey: 'footer.legal.privacy', href: '#' },
        { nameKey: 'footer.legal.terms', href: '#' },
        { nameKey: 'footer.legal.cookies', href: '#' },
        { nameKey: 'footer.legal.gdpr', href: '#' },
      ],
    },
  ];
  
  const socialLinks = [
    // { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: '' },
    // { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    // { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/zotidev/' },
  ];
  
  return (
    <footer className="bg-secondary-dark text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="#" className="inline-block">
                <img 
                  src={theme === 'dark' ? logowhite : logoblack} 
                  alt="Logo"
                  className="h-40 w-auto transition-opacity duration-300"
                />
              </a>
            </div>
            
            <p className="mb-6 opacity-80 max-w-md">
              {t('footer.description')}
            </p>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h4 className="text-lg font-bold mb-4">{t(group.titleKey)}</h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="opacity-80 hover:opacity-100 hover:text-primary transition-colors inline-flex items-center"
                    >
                      {t(link.nameKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zotidev. {t('footer.rights')}
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#hero" 
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors"
              aria-label={t('footer.backToTop')}
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
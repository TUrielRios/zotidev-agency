import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import logowhite from '../assets/1.png';
import logoblack from '../assets/3.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.technologies'), href: '#technologies' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src={theme === 'dark' ? logowhite : logoblack} 
                alt="Logo"
                className="h-40 w-auto transition-opacity duration-300 -my-8"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={toggleLanguageMenu}
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors flex items-center space-x-1"
                aria-label="Cambiar idioma"
              >
                <Globe size={20} />
                <span className="text-sm font-medium uppercase">{language}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg p-2 min-w-[120px]">
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors hover:bg-secondary/50 ${
                      language === 'es' ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors hover:bg-secondary/50 ${
                      language === 'en' ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
              aria-label={theme === 'light' ? t('nav.switchToDark') : t('nav.switchToLight')}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <a 
              href="#contact" 
              className="btn btn-primary"
            >
              {t('nav.getInTouch')}
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button 
                onClick={toggleLanguageMenu}
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors flex items-center space-x-1"
                aria-label="Cambiar idioma"
              >
                <Globe size={20} />
                <span className="text-xs font-medium uppercase">{language}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg p-2 min-w-[120px]">
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors hover:bg-secondary/50 ${
                      language === 'es' ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors hover:bg-secondary/50 ${
                      language === 'en' ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
              aria-label={theme === 'light' ? t('nav.switchToDark') : t('nav.switchToLight')}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              aria-label={t('nav.toggleMenu')}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-lg transition-all duration-300 shadow-lg ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4 pb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block py-2 text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className="btn btn-primary w-full flex justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.getInTouch')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
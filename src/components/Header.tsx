import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    en: ['Home', 'Services', 'Contact'],
    ar: ['الرئيسية', 'الخدمات', 'اتصل بنا'],
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="bg-white text-gray-800 shadow-md"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/workwell-logo.png"
              alt="WorkWell Logo"
              className="h-12 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-primary">
              {language === 'en' ? 'WorkWell' : 'وورك ويل'}
            </span>
          </div>
          <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex space-x-6 mr-6">
                {navItems[language].map((item, index) => (
                  <li key={index}>
                    <RouterLink
                      to={
                        index === 0
                          ? '/'
                          : `/${navItems.en[index].toLowerCase()}`
                      }
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageToggle
              language={language}
              toggleLanguage={toggleLanguage}
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav>
              <ul className="flex flex-col space-y-2">
                {navItems[language].map((item, index) => (
                  <li key={index}>
                    <RouterLink
                      to={
                        index === 0
                          ? '/'
                          : `/${navItems.en[index].toLowerCase()}`
                      }
                      className="block py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4">
              <LanguageToggle
                language={language}
                toggleLanguage={toggleLanguage}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

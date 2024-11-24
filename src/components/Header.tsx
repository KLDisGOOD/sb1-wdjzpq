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
      className={`bg-gray-900 text-gray-200 shadow-md ${
        language === 'ar' ? 'font-arabic' : 'font-english'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img
              src="/workwell-logo.png"
              alt="WorkWell Logo"
              className={`h-12 w-auto ${language === 'ar' ? 'ml-2' : 'mr-2'}`}
            />
            <span className="text-2xl font-bold text-">
              {language === 'en' ? 'WorkWell' : 'ورك ويل'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav>
              <ul className={`flex space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''} mr-6`}>
                {navItems[language].map((item, index) => (
                  <li key={index}>
                    <RouterLink
                      to={index === 0 ? '/' : `/${navItems.en[index].toLowerCase()}`}
                      className="hover:text-accent transition-colors"
                    >
                      {item}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Language Toggle Button */}
            <div className={`ml-4 ${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
              <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-lg p-4">
            <nav>
              <ul className="flex flex-col space-y-2">
                {navItems[language].map((item, index) => (
                  <li key={index}>
                    <RouterLink
                      to={index === 0 ? '/' : `/${navItems.en[index].toLowerCase()}`}
                      className="block py-2 text-gray-200 hover:text-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`mt-4 ${language === 'ar' ? 'text-right' : ''}`}>
              <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

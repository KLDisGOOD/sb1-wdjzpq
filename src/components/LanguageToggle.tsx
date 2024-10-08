import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center text-primary hover:text-purple-700 transition-colors"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="w-5 h-5 mr-2" />
      {language === 'en' ? 'عربي' : 'English'}
    </button>
  );
};

export default LanguageToggle;
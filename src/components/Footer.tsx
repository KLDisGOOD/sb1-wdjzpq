import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      title: 'WorkWell',
      tagline: 'Bridging Saudi recruitment offices with Ethiopian agencies',
      quickLinks: 'Quick Links',
      connect: 'Connect With Us',
      rights: '© 2024 WorkWell. All rights reserved.'
    },
    ar: {
      title: 'ورك ويل',
      tagline: 'ربط مكاتب التوظيف السعودية بالوكالات الإثيوبية',
      quickLinks: 'روابط سريعة',
      connect: 'تواصل معنا',
      rights: '© 2024 ورك ويل. جميع الحقوق محفوظة.'
    }
  };

  return (
    <footer className="bg-gray-100 text-gray-800 py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-primary">{content[language].title}</h3>
            <p className="text-gray-600">{content[language].tagline}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-primary">{content[language].quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition-colors">{language === 'en' ? 'Home' : 'الرئيسية'}</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">{language === 'en' ? 'Services' : 'الخدمات'}</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">{language === 'en' ? 'Contact' : 'اتصل بنا'}</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-primary">{content[language].connect}</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>{content[language].rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
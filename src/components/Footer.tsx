import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

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
      rights: '© 2024 WorkWell. All rights reserved.',
      navigation: [
        { text: 'Home', path: '/' },
        { text: 'Services', path: '/services' },
        { text: 'Contact', path: '/contact' },
      ],
    },
    ar: {
      title: 'ورك ويل',
      tagline: 'ربط مكاتب التوظيف السعودية بالوكالات الإثيوبية',
      quickLinks: 'روابط سريعة',
      connect: 'تواصل معنا',
      rights: '© 2024 ورك ويل. جميع الحقوق محفوظة.',
      navigation: [
        { text: 'الرئيسية', path: '/' },
        { text: 'الخدمات', path: '/services' },
        { text: 'اتصل بنا', path: '/contact' },
      ],
    },
  };

  return (
    <footer
      className={`bg-gray-900 text-gray-200 py-8 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Brand and Tagline */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-accent">{content[language].title}</h3>
            <p className="text-gray-400">{content[language].tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 mr-8">
            <h4 className="text-lg font-semibold mb-2 text-accent">{content[language].quickLinks}</h4>
            <ul className="space-y-2">
              {content[language].navigation.map((item, index) => (
                <li key={index}>
                  <RouterLink
                    to={item.path}
                    className="hover:text-accent transition-colors"
                  >
                    {item.text}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-accent">{content[language].connect}</h4>
            <div className={`flex ${language === 'ar' ? 'space-x-reverse' : 'space-x-4'} items-center`}>
              <a
                href="https://wa.me/+251701396715"
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/workwell-et"
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400">
          <p>{content[language].rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

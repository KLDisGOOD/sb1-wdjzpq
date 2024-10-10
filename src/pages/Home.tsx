import React from 'react';
import { ArrowRight, Users, Building, Briefcase, Globe } from 'lucide-react';

interface HomeProps {
  language: 'en' | 'ar';
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'Connecting Saudi Recruitment Offices with Ethiopian Agencies',
        subtitle: 'Streamlining the process of sourcing qualified Ethiopian workers',
        cta: 'Our Services'
      },
      features: {
        title: 'Why Choose WorkWell Solutions?',
        items: [
          {
            icon: Users,
            title: 'Extensive Network',
            description: 'Access to a wide network of vetted Ethiopian housemaid agencies.'
          },
          {
            icon: Building,
            title: 'Compliance Expertise',
            description: 'Ensuring all placements meet Saudi and Ethiopian regulatory requirements.'
          },
          {
            icon: Briefcase,
            title: 'Efficient Matching',
            description: 'Advanced systems to match Saudi office needs with Ethiopian agency capabilities.'
          },
          {
            icon: Globe,
            title: 'Cross-Cultural Support',
            description: 'Facilitating smooth communication between Saudi offices and Ethiopian agencies.'
          }
        ]
      },
      stats: {
        title: 'Our Impact',
        items: [
          { value: '50+', label: 'Partner Agencies' },
          { value: '2,000+', label: 'Successful Placements' },
          { value: '98%', label: 'Client Satisfaction' }
        ]
      }
    },
    ar: {
      hero: {
        title: 'ربط مكاتب التوظيف السعودية بالوكالات الإثيوبية',
        subtitle: 'تبسيط عملية توفير خادمات منزلية إثيوبيات مؤهلات',
        cta: 'خدماتنا'
      },
      features: {
        title: 'لماذا تختار حلول وورك ويل؟',
        items: [
          {
            icon: Users,
            title: 'شبكة واسعة',
            description: 'الوصول إلى شبكة واسعة من وكالات الخادمات الإثيوبية الموثوقة.'
          },
          {
            icon: Building,
            title: 'خبرة في الامتثال',
            description: 'ضمان تلبية جميع التعيينات للمتطلبات التنظيمية السعودية والإثيوبية.'
          },
          {
            icon: Briefcase,
            title: 'مطابقة فعالة',
            description: 'أنظمة متقدمة لمطابقة احتياجات المكاتب السعودية مع قدرات الوكالات الإثيوبية.'
          },
          {
            icon: Globe,
            title: 'دعم متعدد الثقافات',
            description: 'تسهيل التواصل السلس بين المكاتب السعودية والوكالات الإثيوبية.'
          }
        ]
      },
      stats: {
        title: 'تأثيرنا',
        items: [
          { value: '+50', label: 'وكالة شريكة' },
          { value: '+2,000', label: 'تعيين ناجح' },
          { value: '98%', label: 'رضا العملاء' }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{content[language].hero.title}</h1>
          <p className="text-xl mb-8 text-white">{content[language].hero.subtitle}</p>
          <a href="/services" className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            {content[language].hero.cta} {language === 'en' ? <ArrowRight className="ml-2" /> : <ArrowRight className="mr-2" />}
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">{content[language].features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content[language].features.items.map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start">
                <item.icon className="w-12 h-12 text-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">{content[language].stats.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[language].stats.items.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">{item.value}</p>
                <p className="text-lg text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
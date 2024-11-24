import React from 'react';
import { ArrowRight, Users, Building, Briefcase, Globe } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

interface HomeProps {
  language: 'en' | 'ar';
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'Sourcing Ethiopian Talent for Global Opportunities',
        subtitle: 'Connecting skilled Ethiopian workers with employers worldwide through direct sourcing and agency partnerships',
        cta: 'Our Services'
      },
      features: {
        title: 'Why Choose WorkWell Solutions?',
        items: [
          {
            icon: Users,
            title: 'Direct Sourcing Expertise',
            description: 'We specialize in sourcing skilled Ethiopian workers tailored to meet employer needs globally.'
          },
          {
            icon: Building,
            title: 'Global Agency Network',
            description: 'Collaborate with our extensive network of trusted agencies for seamless hiring solutions.'
          },
          {
            icon: Briefcase,
            title: 'Customized Placements',
            description: 'Leveraging advanced systems to ensure workers are matched precisely with employer requirements.'
          },
          {
            icon: Globe,
            title: 'Worldwide Reach',
            description: 'Facilitating placements across the globe with full cultural and logistical support.'
          }
        ]
      },
      stats: {
        title: 'Our Impact',
        items: [
          { value: '100+', label: 'Partner Agencies' },
          { value: '6,000+', label: 'Successful Placements' },
          { value: '98%', label: 'Client Satisfaction' }
        ]
      }
    },
    ar: {
      hero: {
        title: 'توفير المواهب الإثيوبية للفرص العالمية',
        subtitle: 'ربط العمال المهرة من إثيوبيا بأصحاب العمل حول العالم من خلال التوفير المباشر وشبكة الوكالات',
        cta: 'خدماتنا'
      },
      features: {
        title: 'لماذا تختار حلول وورك ويل؟',
        items: [
          {
            icon: Users,
            title: 'خبرة في التوفير المباشر',
            description: 'نحن متخصصون في توفير العمال المهرة من إثيوبيا لتلبية احتياجات أصحاب العمل على مستوى العالم.'
          },
          {
            icon: Building,
            title: 'شبكة وكالات عالمية',
            description: 'التعاون مع شبكتنا الواسعة من الوكالات الموثوقة لحلول توظيف سلسة.'
          },
          {
            icon: Briefcase,
            title: 'تعيينات مخصصة',
            description: 'نستفيد من أنظمة متقدمة لضمان توافق العمال بشكل دقيق مع متطلبات أصحاب العمل.'
          },
          {
            icon: Globe,
            title: 'وصول عالمي',
            description: 'تسهيل التعيينات في جميع أنحاء العالم مع دعم ثقافي ولوجستي متكامل.'
          }
        ]
      },
      stats: {
        title: 'تأثيرنا',
        items: [
          { value: '+100', label: 'وكالة شريكة' },
          { value: '+15,000', label: 'تعيين ناجح' },
          { value: '98%', label: 'رضا العملاء' }
        ]
      }
    }
  };
  
  return (
    <div className={`min-h-screen bg-gray-900 text-gray-200 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1647316703389-e114712500e5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          filter: 'grayscale(100%)'
        }}
      >
         <div className="absolute inset-0 bg-purple-500 opacity-30 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{content[language].hero.title}</h1>
          <p className="text-xl mb-8 text-white">{content[language].hero.subtitle}</p>
          <RouterLink
            to="/services"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            {content[language].hero.cta}
            {language === 'en' ? <ArrowRight className="ml-2" /> : <ArrowRight className="mr-2" />}
          </RouterLink>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-light">{content[language].features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content[language].features.items.map((item, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md flex items-start">
                <item.icon className="w-12 h-12 text-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-light">{content[language].stats.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[language].stats.items.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text- mb-2">{item.value}</p>
                <p className="text-lg text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

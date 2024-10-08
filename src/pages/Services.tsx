import React from 'react';
import { Briefcase, Users, Clipboard, BarChart, Search, FileCheck } from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'ar';
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our Services',
      services: [
        {
          icon: Search,
          title: 'Agency Sourcing',
          description: 'We identify and vet top Ethiopian agencies to ensure quality housemaid candidates for Saudi recruitment offices.'
        },
        {
          icon: Briefcase,
          title: 'Placement Facilitation',
          description: 'Streamlined process for matching Saudi office requirements with Ethiopian agency offerings.'
        },
        {
          icon: FileCheck,
          title: 'Documentation Support',
          description: 'Assistance with all necessary paperwork and legal requirements for smooth cross-border recruitment.'
        },
        {
          icon: Users,
          title: 'Cultural Training',
          description: 'Providing resources for cultural orientation to ease the transition for housemaids and employers.'
        },
        {
          icon: Clipboard,
          title: 'Compliance Management',
          description: 'Ensuring all placements adhere to both Saudi and Ethiopian labor laws and regulations.'
        },
        {
          icon: BarChart,
          title: 'Performance Tracking',
          description: 'Ongoing monitoring and reporting on placement success rates and agency performance.'
        }
      ]
    },
    ar: {
      title: 'خدماتنا',
      services: [
        {
          icon: Search,
          title: 'توفير الوكالات',
          description: 'نحدد ونتحقق من أفضل الوكالات الإثيوبية لضمان مرشحات خادمات منزليات ذوات جودة عالية لمكاتب التوظيف السعودية.'
        },
        {
          icon: Briefcase,
          title: 'تسهيل التوظيف',
          description: 'عملية مبسطة لمطابقة متطلبات المكاتب السعودية مع عروض الوكالات الإثيوبية.'
        },
        {
          icon: FileCheck,
          title: 'دعم الوثائق',
          description: 'المساعدة في جميع الأوراق والمتطلبات القانونية اللازمة للتوظيف عبر الحدود بسلاسة.'
        },
        {
          icon: Users,
          title: 'التدريب الثقافي',
          description: 'توفير موارد للتوجيه الثقافي لتسهيل الانتقال للخادمات وأصحاب العمل.'
        },
        {
          icon: Clipboard,
          title: 'إدارة الامتثال',
          description: 'ضمان امتثال جميع التعيينات لقوانين ولوائح العمل السعودية والإثيوبية.'
        },
        {
          icon: BarChart,
          title: 'تتبع الأداء',
          description: 'المراقبة المستمرة وإعداد التقارير عن معدلات نجاح التوظيف وأداء الوكالات.'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 py-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">{content[language].title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
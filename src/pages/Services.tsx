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
          title: 'Global Talent Sourcing',
          description: 'We source skilled Ethiopian workers and connect them with opportunities worldwide through vetted agencies.'
        },
        {
          icon: Briefcase,
          title: 'Placement Facilitation',
          description: 'Streamlined processes to match global employer needs with Ethiopian talent and agency offerings.'
        },
        {
          icon: FileCheck,
          title: 'Documentation Support',
          description: 'Comprehensive assistance with paperwork and legal requirements for international recruitment.'
        },
        {
          icon: Users,
          title: 'Cultural Training',
          description: 'Providing tailored resources for cultural orientation to ensure smooth transitions for workers and employers.'
        },
        {
          icon: Clipboard,
          title: 'Regulatory Compliance',
          description: 'Ensuring all placements comply with Ethiopian and destination country labor laws and regulations.'
        },
        {
          icon: BarChart,
          title: 'Performance Monitoring',
          description: 'Tracking placement success and providing insights on agency and worker performance for ongoing improvement.'
        }
      ]
    },
    ar: {
      title: 'خدماتنا',
      services: [
        {
          icon: Search,
          title: 'توفير المواهب العالمية',
          description: 'نقوم بتوفير العمال المهرة من إثيوبيا وربطهم بفرص في جميع أنحاء العالم من خلال وكالات موثوقة.'
        },
        {
          icon: Briefcase,
          title: 'تسهيل التوظيف',
          description: 'عمليات مبسطة لمطابقة احتياجات أصحاب العمل حول العالم مع المواهب الإثيوبية وعروض الوكالات.'
        },
        {
          icon: FileCheck,
          title: 'دعم الوثائق',
          description: 'تقديم مساعدة شاملة في الأوراق والمتطلبات القانونية للتوظيف الدولي.'
        },
        {
          icon: Users,
          title: 'التدريب الثقافي',
          description: 'توفير موارد مخصصة للتوجيه الثقافي لضمان انتقال سلس للعمال وأصحاب العمل.'
        },
        {
          icon: Clipboard,
          title: 'الامتثال التنظيمي',
          description: 'ضمان أن جميع التعيينات تلتزم بقوانين ولوائح العمل الإثيوبية وبلد الوجهة.'
        },
        {
          icon: BarChart,
          title: 'مراقبة الأداء',
          description: 'تتبع نجاح التوظيف وتقديم رؤى حول أداء الوكالات والعمال للتحسين المستمر.'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-accent">{content[language].title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-">{service.title}</h2>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ar';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    en: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      thanks: 'Thank you for your message. We will get back to you soon!'
    },
    ar: {
      title: 'اتصل بنا',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      thanks: 'شكرا لرسالتك. سنعود إليك قريبا!'
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(content[language].thanks);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 py-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">{content[language].title}</h1>
        <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-primary font-semibold mb-2">{content[language].name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-primary font-semibold mb-2">{content[language].email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-primary font-semibold mb-2">{content[language].message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
              ></textarea>
            </div>
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center">
              {content[language].send} {language === 'en' ? <Send className="ml-2" /> : <Send className="mr-2" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
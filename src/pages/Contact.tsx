import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ar';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      title: 'Contact Us',
      name: 'Name',
      phone: 'Phone',
      message: 'Message',
      send: 'Send Message',
      thanks: 'Thank you for your message. We will get back to you soon!',
    },
    ar: {
      title: 'تواصل معنا',
      name: 'الاسم',
      phone: 'رقم الهاتف',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      thanks: 'شكرا لرسالتك. سنعود إليك قريبا!',
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch('https://formspree.io/f/mlderkql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(content[language].thanks);
        setFormData({ name: '', phone: '', message: '' });
        setSubmitted(true);
      } else {
        console.error('Form submission error:', response);
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-white text-gray-800 py-12 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">{content[language].title}</h1>
        <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
          {submitted && (
            <div className="mb-4 p-4 text-green-800 bg-green-100 rounded-lg">
              {content[language].thanks}
            </div>
          )}
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
              <label htmlFor="phone" className="block text-primary font-semibold mb-2">{content[language].phone}</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
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
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              {loading ? (
                <>
                  <span className="spinner-border animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Sending...
                </>
              ) : (
                <>
                  {content[language].send} <Send className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .spinner-border {
          border-color: #ffffff; /* Customize the spinner color */
          border-width: 2px; /* Customize the width of the spinner */
          border-style: solid;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;

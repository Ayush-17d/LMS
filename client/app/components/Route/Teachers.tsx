import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactCards = [
    {
      name: 'Maria Santos',
      role: 'Customer Support',
      image: '/api/placeholder/400/400',
      email: 'maria@diveacademy.com'
    },
    {
      name: 'Jack Wilson',
      role: 'Booking Manager',
      image: '/api/placeholder/400/400',
      email: 'jack@diveacademy.com'
    },
    {
      name: 'Elena Kim',
      role: 'Course Advisor',
      image: '/api/placeholder/400/400',
      email: 'elena@diveacademy.com'
    }
  ];

  return (
    <section className="bg-[#F4F7FA] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with our expert team for personalized diving guidance
          </p>
        </div>

        <div className="flex justify-center space-x-8">
          {contactCards.map((contact) => (
            <div 
              key={contact.name}
              className="group relative w-64 h-64 rounded-full bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                <img 
                  src={contact.image} 
                  alt={contact.name}
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                <div className="relative z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                  <p className="text-sm mb-2">{contact.role}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail size={18} />
                    <span className="text-sm">{contact.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
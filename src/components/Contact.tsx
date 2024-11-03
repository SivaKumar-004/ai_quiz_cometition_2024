import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      center: "Technical Higher Secondary School, Muttada",
      phone: "9447207206"
    },
    {
      center: "College of Applied Science, Dhanuvachapuram",
      phone: "8078310908"
    },
    {
      center: "College of Engineering, Attingal",
      phone: "9447076474"
    }
  ];

  return (
    <div id="contact" className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Contact Information</h2>
          <p className="text-gray-400 mt-4">Get in touch with our center coordinators</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {contacts.map((contact, index) => (
            <div key={index} className="w-full md:w-96 bg-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">{contact.center}</h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${contact.phone}`} className="hover:text-emerald-500">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
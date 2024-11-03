import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">

                

                <a href="#">
                  <img style={{ width: '58%' }}
                    src="https://i.ibb.co/9s1NhpJ/Screenshot-2024-11-03-115253-removebg-preview.png"
                    alt="Screenshot-2024-11-03-115253-removebg-preview"
                  />
                </a>
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#events"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Events
              </a>
              <a
                href="#schedule"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Schedule
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                FAQ
              </a>
              <a
                href="https://forms.gle/CWwfvvC2X2sRU6eZA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition-colors duration-300"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#events"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Events
            </a>
            <a
              href="#schedule"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Schedule
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              FAQ
            </a>
            <a
              href="https://forms.gle/CWwfvvC2X2sRU6eZA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white block px-4 py-2 rounded-md text-base font-medium hover:bg-emerald-600"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

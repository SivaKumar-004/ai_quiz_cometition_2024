import React from 'react';
import { Calendar, Flag, Trophy } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      date: 'November 14, 2024',
      title: 'Registration Deadline',
      description: 'Last date to register your team',
      icon: Calendar,
    },
    {
      date: 'November 16, 2024',
      title: 'District Level Competition',
      description: 'Preliminary rounds at designated centers',
      icon: Flag,
    },
    {
      date: 'December 10, 2024',
      title: 'State Finals',
      description: 'Final round at Kanakakkunnu Palace',
      icon: Trophy,
    },
  ];

  return (
    <div id="schedule" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Event Timeline</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Mark your calendar</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 pb-16 last:pb-0">
              {/* Line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>

              {/* Dot */}
              <div className="absolute left-0 top-0 -ml-3.5 card-hover">
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center border-2 border-emerald-500">
                  <event.icon className="h-4 w-4 text-emerald-500" />
                </div>
              </div>

              {/* Content */}
              <div className="glass-card rounded-xl p-6 card-hover ml-4">
                <span className="text-emerald-400 font-semibold">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

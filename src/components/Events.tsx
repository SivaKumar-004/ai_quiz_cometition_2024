import React from 'react';
import { MapPin, Calendar, Trophy, Users, Sparkles, Award } from 'lucide-react';

export default function Events() {
  return (
    <div id="events" className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Competition Events</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">District and State level competitions</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* District Level */}
          <div className="w-full md:w-96 glass-card rounded-xl p-8 card-hover card-shine">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">District Level</h3>
              <Award className="h-6 w-6 text-emerald-500" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-300">November 16, 2024</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 mt-1" />
                <div className="text-gray-300">
                  <p className="font-semibold text-white mb-2">Preliminary Round Centers:</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-400" />
                      College of Engineering, Attingal
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-400" />
                      College of Applied Science, Dhanuvachapuram
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-400" />
                      Technical Higher Secondary School, Muttada
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-300">2 members per team</span>
              </div>
            </div>
          </div>

          {/* State Level */}
          <div className="w-full md:w-96 glass-card rounded-xl p-8 card-hover card-shine">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">State Level</h3>
              <Trophy className="h-6 w-6 text-yellow-400" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-300">December 10, 2024</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 mt-1" />
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Kanakakkunnu Palace</p>
                  <p>Thiruvananthapuram</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Trophy className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">Grand Prizes</p>
                  <p className="text-gray-300">Exceptional awards await the winners!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
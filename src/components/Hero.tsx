import React from 'react';
import { Brain, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function Hero() {
  return (
    <div id="home" className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center">
        <span className="w-full h-full absolute opacity-75 bg-slate-900"></span>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap" style={{marginBottom : "20%"}}>
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative animate-float">
                <Brain className="h-20 w-20 text-emerald-500 animate-glow" />
              </div>
            </div>
            
            <h1 className="text-white font-bold text-5xl mb-8 relative">
              <span className="gradient-text">AI QUIZ</span>
              <br />
              COMPETITION 2024
              <div className="absolute -right-4 top-0">
              </div>
            </h1>

            <div className="text-pink-500 text-2xl mb-8 font-bold text-glow">
              16th November 2024
            </div>

            <div className="mb-8">
              <CountdownTimer deadline="2024-11-14T23:59:59" />
            </div>

            <p className="mt-4 text-lg text-gray-300 mb-8">
              An exciting AI Quiz competition for school and college students
            </p>

            <a 
              style={{margin : "10%"}}
              href="https://forms.gle/CWwfvvC2X2sRU6eZA"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border glass-card px-8 py-4 text-white font-bold text-lg hover:scale-105 transition-transform duration-300 inline-block"
            >
              Register Now
              <Sparkles className="inline-block ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
    </div>
  );
}
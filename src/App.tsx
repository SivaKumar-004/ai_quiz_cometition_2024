import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Timeline />
        <Contact />
        <FAQ />
      </main>
    </div>
  );
}

export default App;
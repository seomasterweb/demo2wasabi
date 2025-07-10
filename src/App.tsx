import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ComparisonSection from './components/ComparisonSection';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <ComparisonSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
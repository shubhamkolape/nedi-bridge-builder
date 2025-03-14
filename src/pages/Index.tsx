
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImpactAreas from '../components/ImpactAreas';
import InitiativesShowcase from '../components/InitiativesShowcase';
import JewelleryFeature from '../components/JewelleryFeature';
import CourseOverview from '../components/CourseOverview';
import FilmHub from '../components/FilmHub';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Add page load animation
  useEffect(() => {
    // Set initial opacity to 0
    document.body.style.opacity = '0';
    
    // Fade in the page
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.8s ease-out';
      document.body.style.opacity = '1';
    }, 100);
    
    // Clean up
    return () => {
      document.body.style.opacity = '';
      document.body.style.transition = '';
    };
  }, []);
  
  // Scroll to specific section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactAreas />
      <InitiativesShowcase />
      <JewelleryFeature />
      <CourseOverview />
      <FilmHub />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

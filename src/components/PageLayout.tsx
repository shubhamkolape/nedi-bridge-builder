
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  // Add page load animation
  useEffect(() => {
    // Set initial opacity to 0
    document.body.style.opacity = '0';
    
    // Fade in the page
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.8s ease-out';
      document.body.style.opacity = '1';
      
      // Scroll to top on page load
      window.scrollTo(0, 0);
    }, 100);
    
    // Clean up
    return () => {
      document.body.style.opacity = '';
      document.body.style.transition = '';
    };
  }, []);
  
  return (
    <div className={`min-h-screen ${className}`}>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;

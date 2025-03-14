
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';

const NorthEastConnect = () => {
  return (
    <PageLayout>
      <HeroSection
        title="North East Connect: Knowledge for Impact"
        subtitle="A specialized course for policymakers, bureaucrats, and corporate leaders"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#" variant="primary">
            Enroll Now
          </CTAButton>
          <CTAButton href="#" variant="outline">
            Get a Course Brochure
          </CTAButton>
        </div>
      </HeroSection>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
          <p className="text-lg">This page is under development. Please check back later.</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default NorthEastConnect;


import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';

const OrangeEconomy = () => {
  return (
    <PageLayout>
      <HeroSection
        title="The Orange Economy Revolution"
        subtitle="Expanding NE's creative industries through innovation"
        backgroundImage="https://images.unsplash.com/photo-1579267381358-5716fd5f4ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#" variant="primary">
            Invest in NE's Creative Future
          </CTAButton>
          <CTAButton href="#" variant="outline">
            Collaborate with Local Creators
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

export default OrangeEconomy;

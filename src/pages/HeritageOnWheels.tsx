
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { useScrollAnimation } from '../utils/animations';
import { MapPin, Play, Users, Map } from 'lucide-react';

const HeritageOnWheels = () => {
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [statsRef, isStatsVisible] = useScrollAnimation();
  
  return (
    <PageLayout>
      <HeroSection
        title="Heritage on Wheels: The Mobile Museum"
        subtitle="Bringing history & culture to the remote villages of Northeast India"
        backgroundImage="https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#about" variant="primary">
            Learn More
          </CTAButton>
          <CTAButton href="#request" variant="outline">
            Request a Visit
          </CTAButton>
        </div>
      </HeroSection>
      
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div ref={contentRef as React.RefObject<HTMLDivElement>} className={`max-w-4xl mx-auto transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-nedi-green">About the Mobile Museum</h2>
            
            <p className="text-lg mb-8 text-gray-700">
              The Heritage on Wheels initiative is NEDI's innovative solution to bring the rich cultural heritage of Northeast India to remote villages. This traveling museum showcases artifacts, interactive exhibits, and multimedia presentations that tell the stories of the region's diverse communities, traditions, and history.
            </p>
            
            <p className="text-lg mb-12 text-gray-700">
              Our specially designed vehicle transforms into an immersive cultural space, offering educational experiences to schools, communities, and villages that may not have access to traditional museums. By bringing history and culture directly to the people, we're preserving heritage while creating a sense of pride and identity among younger generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Our Mission</h3>
                <p className="text-gray-700">
                  To make cultural education accessible to all communities in Northeast India, especially those in remote areas with limited access to museums and cultural institutions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Our Approach</h3>
                <p className="text-gray-700">
                  Creating engaging, interactive exhibits that combine traditional artifacts with modern technology to provide an immersive learning experience tailored to different age groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-nedi-green">Interactive Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-nedi-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Play size={24} className="text-nedi-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Video Experiences</h3>
              <p className="text-gray-700 text-center">
                Behind-the-scenes documentaries showing the making of exhibits and interviews with cultural experts.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-nedi-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users size={24} className="text-nedi-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Community Engagement</h3>
              <p className="text-gray-700 text-center">
                Interactive sessions where village elders share their stories, creating a bridge between generations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-nedi-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Map size={24} className="text-nedi-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Live Tracking</h3>
              <p className="text-gray-700 text-center">
                Real-time updates on the museum's location and schedule, allowing communities to prepare for visits.
              </p>
            </div>
          </div>
          
          <div className="mb-16 max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pt-[56.25%]">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Heritage on Wheels Documentary"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Mobile Museum Experience</h3>
              <p className="text-gray-700">
                Watch how our mobile museum transforms the educational experience in remote villages.
              </p>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">Photo Gallery</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="aspect-square bg-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <img 
                    src={`https://picsum.photos/500/500?random=${item}`} 
                    alt={`Gallery image ${item}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-nedi-green text-white">
        <div 
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`container mx-auto px-4 transition-all duration-1000 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Impact Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">120+</div>
              <div className="text-lg">Villages Covered</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15K+</div>
              <div className="text-lg">Students Engaged</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-lg">Cultural Artifacts</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">7</div>
              <div className="text-lg">Northeast States</div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="request" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-nedi-green">Request a Visit</h2>
            <p className="text-lg mb-12 text-center text-gray-700">
              Would you like the Mobile Museum to visit your village, school, or community center? Fill out the form below and our team will get back to you with available dates and details.
            </p>
            
            <form className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nedi-green"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nedi-green"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Village/School/Location</label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nedi-green"
                    placeholder="Enter location name"
                  />
                  <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nedi-green"
                  placeholder="Tell us about your community and why you'd like the mobile museum to visit"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-nedi-green text-white font-medium py-3 px-4 rounded-md hover:bg-nedi-green/90 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HeritageOnWheels;

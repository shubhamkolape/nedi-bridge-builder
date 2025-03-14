
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { useScrollAnimation } from '../utils/animations';
import { PlayCircle } from 'lucide-react';

const YouthPower = () => {
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [statsRef, isStatsVisible] = useScrollAnimation();
  
  // Sample success stories
  const successStories = [
    {
      id: 1,
      name: "Maya Lyngdoh",
      business: "Khasi Heritage Textiles",
      image: "https://i.pravatar.cc/300?img=28",
      description: "Started a sustainable textile business that employs 35 women from her village and exports traditional Khasi fabrics globally.",
      impact: "Annual revenue of ₹1.2 crore, providing sustainable livelihoods for rural artisans.",
      location: "Shillong, Meghalaya"
    },
    {
      id: 2,
      name: "Tamo Rinya",
      business: "NE Digital Creators",
      image: "https://i.pravatar.cc/300?img=65",
      description: "Founded a digital content creation studio that tells Northeast stories through animation and documentary filmmaking.",
      impact: "Over 10 million views across platforms, bringing NE culture to global audiences.",
      location: "Itanagar, Arunachal Pradesh"
    },
    {
      id: 3,
      name: "Lalnunmawia",
      business: "Bamboo Innovations",
      image: "https://i.pravatar.cc/300?img=53",
      description: "Transformed traditional bamboo crafts into modern eco-friendly products for urban markets and international export.",
      impact: "Creating jobs for 50+ craftspeople and preserving traditional skills with modern applications.",
      location: "Aizawl, Mizoram"
    }
  ];
  
  return (
    <PageLayout>
      <HeroSection
        title="Youth Power: Skill, Startups & Stories"
        subtitle="Empowering the next generation with training, mentorship, and opportunities"
        backgroundImage="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#training" variant="primary">
            Join Our Training Program
          </CTAButton>
          <CTAButton href="#startups" variant="outline">
            Apply for Startup Funding
          </CTAButton>
        </div>
      </HeroSection>
      
      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>} 
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-nedi-green text-center">Empowering Northeast Youth</h2>
            
            <p className="text-lg mb-8 text-gray-700">
              Youth Power is NEDI's flagship initiative dedicated to nurturing and supporting the next generation of entrepreneurs, artists, and changemakers from Northeast India. Through targeted training programs, mentorship, funding opportunities, and network access, we're building a vibrant ecosystem for youth to thrive in the creative and cultural industries.
            </p>
            
            <div className="aspect-video mb-16 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Youth Power Success Stories"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">Impact Areas</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            Our comprehensive approach addresses multiple aspects of youth empowerment through these key focus areas:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-nedi-green/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nedi-green">
                  <path d="M2 3h20"></path>
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                  <path d="m7 21 5-5 5 5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Startup Incubation & Mentorship</h3>
              <p className="text-gray-700 mb-6">
                Providing end-to-end support for young entrepreneurs looking to establish businesses in the creative and cultural sectors, including ideation, business planning, market access, and funding guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">Intensive startup bootcamps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">One-on-one mentorship with industry experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">Seed funding for promising ventures</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-nedi-green/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nedi-green">
                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Employment in Creative Industries</h3>
              <p className="text-gray-700 mb-6">
                Building skills and creating pathways for Northeast youth to enter and succeed in the growing creative economy, both within the region and beyond.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">Specialized skills training programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">Industry internships and placements</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">Job fairs and recruitment drives</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-nedi-green/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nedi-green">
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 1 0-16 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Youth-led Success Stories</h3>
              <p className="text-gray-700 mb-6">
                Highlighting and amplifying the achievements of young entrepreneurs and professionals from Northeast India to inspire the next generation and change perceptions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">Documentary series on youth entrepreneurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">Regular success story features</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                  <span className="text-gray-700">Youth achievement awards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section id="stories" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">Youth-led Success Stories</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            Meet the inspiring young entrepreneurs from Northeast India who are building successful businesses and making an impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story) => (
              <div key={story.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-nedi-blue">{story.name}</h3>
                      <p className="text-nedi-orange font-medium">{story.business}</p>
                    </div>
                    <span className="text-sm text-gray-500">{story.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{story.description}</p>
                  <div className="bg-nedi-green/10 p-3 rounded-md mb-4">
                    <p className="text-nedi-green font-medium text-sm">Impact: {story.impact}</p>
                  </div>
                  <button className="text-nedi-green font-medium hover:text-nedi-green/80 transition-colors flex items-center gap-2">
                    <PlayCircle size={16} />
                    Watch Their Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Statistics */}
      <section className="py-16 bg-nedi-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact in Numbers</h2>
          
          <div 
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto transition-all duration-1000 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-nedi-orange">500+</div>
              <p className="text-white/90">Youth Trained</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-nedi-orange">75</div>
              <p className="text-white/90">Startups Launched</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-nedi-orange">₹2.5Cr</div>
              <p className="text-white/90">Funding Facilitated</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-nedi-orange">300+</div>
              <p className="text-white/90">Jobs Created</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs CTA */}
      <section id="training" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">Join Our Programs</h2>
            <p className="text-lg mb-12 text-center text-gray-700">
              Whether you're looking to start your own venture or enhance your skills for the creative industries, we have a program for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-nedi-green">
                <h3 className="text-2xl font-semibold mb-4 text-nedi-blue">Skills Training Program</h3>
                <p className="text-gray-700 mb-6">
                  A comprehensive 3-month program covering technical and soft skills needed to succeed in the creative industries, with specializations in filmmaking, digital media, traditional crafts, and more.
                </p>
                <div className="mb-6">
                  <p className="font-medium text-gray-800 mb-2">Next Batch: January 15, 2024</p>
                  <p className="text-gray-700">Applications close on December 15, 2023</p>
                </div>
                <CTAButton href="#" variant="primary" className="w-full">
                  Apply for Training Program
                </CTAButton>
              </div>
              
              <div id="startups" className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-nedi-orange">
                <h3 className="text-2xl font-semibold mb-4 text-nedi-blue">Startup Incubation Program</h3>
                <p className="text-gray-700 mb-6">
                  A 6-month intensive incubation program for early-stage startups in the creative and cultural industries, offering mentorship, workspace, networking, and seed funding opportunities.
                </p>
                <div className="mb-6">
                  <p className="font-medium text-gray-800 mb-2">Next Cohort: February 1, 2024</p>
                  <p className="text-gray-700">Applications close on January 10, 2024</p>
                </div>
                <CTAButton href="#" variant="secondary" className="w-full">
                  Apply for Startup Funding
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default YouthPower;

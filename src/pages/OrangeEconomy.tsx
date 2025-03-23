
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { useScrollAnimation } from '../utils/animations';

const OrangeEconomy = () => {
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [industriesRef, isIndustriesVisible] = useScrollAnimation();
  
  // Industry sectors data
  const creativeSectors = [
    {
      id: 1,
      title: "Arts & Culture",
      icon: "🎭",
      description: "Traditional and contemporary arts, cultural festivals, museums, and heritage preservation initiatives.",
      examples: ["Folk art exhibitions", "Cultural festivals", "Museum initiatives", "Heritage conservation"]
    },
    {
      id: 2,
      title: "Film & Media",
      icon: "🎬",
      description: "Film production, digital content creation, animation studios, and media houses telling Northeast stories.",
      examples: ["Regional cinema", "Documentary production", "Animation studios", "Content creation"]
    },
    {
      id: 3,
      title: "Handicrafts & Fashion",
      icon: "🛍️",
      description: "Traditional crafts reimagined for modern markets, sustainable fashion, and textile innovations.",
      examples: ["Textile innovations", "Tribal jewelry", "Sustainable fashion", "Bamboo products"]
    },
    {
      id: 4,
      title: "Music & Performing Arts",
      icon: "🎵",
      description: "Traditional and contemporary music, dance, theater, and performance arts from Northeast India.",
      examples: ["Music festivals", "Folk music fusion", "Theater productions", "Dance ensembles"]
    },
    {
      id: 5,
      title: "Design & Digital Arts",
      icon: "🎨",
      description: "Graphic design, digital arts, gaming, web development, and creative technology ventures.",
      examples: ["Indigenous design", "Web services", "Gaming development", "AR/VR experiences"]
    },
    {
      id: 6,
      title: "Culinary Arts",
      icon: "🍲",
      description: "Food entrepreneurship showcasing Northeast cuisine, food tourism, and culinary innovation.",
      examples: ["Food festivals", "Regional cuisine", "Food tourism", "Culinary innovation"]
    }
  ];
  
  return (
    <PageLayout>
      <HeroSection
        // title="The Orange Economy Revolution"
        subtitle="Expanding Northeast India's creative industries through innovation and cultural entrepreneurship"
        backgroundImage="https://images.unsplash.com/photo-1579267381358-5716fd5f4ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#invest" variant="primary">
            Invest in NE's Creative Future
          </CTAButton>
          <CTAButton href="#collaborate" variant="outline">
            Collaborate with Local Creators
          </CTAButton>
        </div>
      </HeroSection>
      
      {/* What is the Orange Economy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>} 
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-nedi-green text-center">What is the Orange Economy?</h2>
            
            <div className="bg-gradient-to-r from-nedi-orange/10 to-nedi-orange/5 p-8 rounded-lg mb-12">
              <p className="text-xl italic text-gray-700 border-l-4 border-nedi-orange pl-4">
                "The Orange Economy refers to the set of activities that transform ideas into cultural goods and services whose value is determined by intellectual property."
              </p>
            </div>
            
            <p className="text-lg mb-6 text-gray-700">
              The Orange Economy represents the creative and cultural industries that transform ideas, knowledge, and heritage into economic value. It encompasses a wide range of activities from traditional arts and crafts to digital media, design, and cultural services.
            </p>
            
            <p className="text-lg mb-12 text-gray-700">
              For Northeast India, with its extraordinary cultural diversity and rich heritage, the Orange Economy presents a tremendous opportunity for sustainable economic development that preserves and celebrates the region's unique identity while creating employment and business opportunities for the local population.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Why It Matters for Northeast India</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-nedi-orange text-white flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-gray-700">Leverages the region's rich cultural heritage and diversity</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-nedi-orange text-white flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-gray-700">Creates sustainable employment that doesn't deplete natural resources</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-nedi-orange text-white flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-gray-700">Builds on traditional knowledge while embracing innovation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-nedi-orange text-white flex items-center justify-center text-sm font-bold">4</div>
                    <p className="text-gray-700">Offers growth opportunities for youth and entrepreneurs</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-nedi-blue">Global Context</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">A</div>
                    <p className="text-gray-700">The creative economy contributes over $2.25 trillion to the global GDP</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">B</div>
                    <p className="text-gray-700">Creative industries employ more young people than any other sector</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">C</div>
                    <p className="text-gray-700">Cultural tourism is one of the fastest-growing segments of tourism</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">D</div>
                    <p className="text-gray-700">Digital creative industries grew by 14% during the pandemic</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Creative Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">Creative Industries in Northeast India</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            The Orange Economy encompasses various creative sectors that contribute to Northeast India's economic and cultural landscape.
          </p>
          
          <div 
            ref={industriesRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${isIndustriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {creativeSectors.map((sector) => (
              <div key={sector.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{sector.icon}</div>
                    <h3 className="text-xl font-semibold text-nedi-blue">{sector.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.examples.map((example, index) => (
                      <span key={index} className="bg-nedi-orange/10 text-nedi-orange px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Metrics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">Success Metrics</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            The impact of the Orange Economy in Northeast India can be measured through these key indicators:
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-nedi-blue">Revenue Impact</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Handicrafts & Textiles</span>
                      <span className="text-nedi-orange font-medium">₹350 Crore</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-nedi-orange h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Cultural Tourism</span>
                      <span className="text-nedi-orange font-medium">₹280 Crore</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-nedi-orange h-2.5 rounded-full" style={{ width: "56%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Film & Media</span>
                      <span className="text-nedi-orange font-medium">₹120 Crore</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-nedi-orange h-2.5 rounded-full" style={{ width: "24%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Digital Creation</span>
                      <span className="text-nedi-orange font-medium">₹90 Crore</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-nedi-orange h-2.5 rounded-full" style={{ width: "18%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-nedi-blue">Growth in Creative Jobs</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
                  <div className="flex justify-between mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1 text-nedi-green">12,500+</div>
                      <p className="text-gray-600 text-sm">Direct Jobs</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1 text-nedi-green">35,000+</div>
                      <p className="text-gray-600 text-sm">Indirect Jobs</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1 text-nedi-green">64%</div>
                      <p className="text-gray-600 text-sm">Youth Employment</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gray-300 mb-4"></div>
                  
                  <p className="text-gray-700 text-sm">
                    The creative industries in Northeast India have seen a 27% growth in employment over the past 5 years, with over 60% of these jobs going to youth under 35 years of age.
                  </p>
                </div>
                
                <h3 className="text-2xl font-semibold mb-6 text-nedi-blue">Export Growth</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">Growth in Exports of Creative Goods</h4>
                    <div className="relative h-32">
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-nedi-orange/50 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium text-sm">2020</span>
                      </div>
                      <div className="absolute bottom-0 left-20 w-16 h-24 bg-nedi-orange/60 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium text-sm">2021</span>
                      </div>
                      <div className="absolute bottom-0 left-40 w-16 h-20 bg-nedi-orange/70 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium text-sm">2022</span>
                      </div>
                      <div className="absolute bottom-0 left-60 w-16 h-32 bg-nedi-orange/80 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium text-sm">2023</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm">
                    Northeast creative products now reach markets in over 45 countries, with a 35% year-on-year growth in export value over the past three years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div id="invest" className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-nedi-green">
              <h3 className="text-2xl font-semibold mb-4 text-nedi-blue">Invest in NE's Creative Future</h3>
              <p className="text-gray-700 mb-6">
                Connect with promising creative ventures from Northeast India and explore investment opportunities in this growing economic sector. From traditional crafts to digital media, the region offers unique opportunities for impactful investments.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-nedi-green/20 text-nedi-green flex items-center justify-center text-xs font-bold">✓</div>
                  <p className="text-gray-700">Access to curated portfolio of vetted creative ventures</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-nedi-green/20 text-nedi-green flex items-center justify-center text-xs font-bold">✓</div>
                  <p className="text-gray-700">Investor matchmaking and facilitation services</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-nedi-green/20 text-nedi-green flex items-center justify-center text-xs font-bold">✓</div>
                  <p className="text-gray-700">Advisory support on cultural context and market dynamics</p>
                </li>
              </ul>
              <CTAButton href="#" variant="primary" className="w-full">
                Explore Investment Opportunities
              </CTAButton>
            </div>
            
            <div id="collaborate" className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-nedi-orange">
              <h3 className="text-2xl font-semibold mb-4 text-nedi-blue">Collaborate with Local Creators</h3>
              <p className="text-gray-700 mb-6">
                Whether you're a brand, cultural institution, or individual creator, partner with Northeast India's talented artisans, designers, filmmakers, and cultural entrepreneurs for authentic collaborations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-nedi-orange/20 text-nedi-orange flex items-center justify-center text-xs font-bold">✓</div>
                  <p className="text-gray-700">Connect with verified creative professionals and artisans</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-nedi-orange/20 text-nedi-orange flex items-center justify-center text-xs font-bold">✓</div>
                  <p className="text-gray-700">Develop authentic, culturally sensitive collaborations</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-nedi-orange/20 text-nedi-orange flex items-center justify-center text-xs font-bold">✓</div>
                  <p className="text-gray-700">Access project management and quality control support</p>
                </li>
              </ul>
              <CTAButton href="#" variant="secondary" className="w-full">
                Find Collaboration Partners
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OrangeEconomy;

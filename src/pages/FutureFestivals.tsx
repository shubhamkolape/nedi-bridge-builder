
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { Calendar, Globe, MapPin, Users, Star, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FutureFestivals = () => {
  const upcomingFestivals = [
    {
      title: "Northeast Textile & Craft Festival",
      date: "May 2024",
      location: "Guwahati, Assam",
      description: "Showcasing the rich textile heritage and craftsmanship of the Northeast region through exhibitions, workshops, and fashion shows."
    },
    {
      title: "Himalayan Music Exchange",
      date: "July 2024",
      location: "Gangtok, Sikkim",
      description: "Bringing together traditional and contemporary musicians from the Himalayan belt for performances, collaborations, and cultural exchanges."
    },
    {
      title: "Digital Arts & Animation Symposium",
      date: "September 2024",
      location: "Shillong, Meghalaya",
      description: "Exploring the intersection of traditional art forms and digital technologies through exhibitions, masterclasses, and networking events."
    },
    {
      title: "Northeast Culinary Festival",
      date: "November 2024",
      location: "Kohima, Nagaland",
      description: "Celebrating the diverse culinary traditions of Northeast India with food demonstrations, tastings, and cultural performances."
    }
  ];

  return (
    <PageLayout>
      <HeroSection
        title="Future Festivals: A Global Cultural Exchange"
        subtitle="Positioning NE as a hub for international cultural diplomacy"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#partner" variant="primary">
            Partner with Us
          </CTAButton>
          <CTAButton href="#festivals" variant="outline">
            Explore Upcoming Festivals
          </CTAButton>
        </div>
      </HeroSection>
      
      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision for Cultural Exchange</h2>
            <p className="text-lg text-gray-700 mb-8">
              Future Festivals is NEDI's ambitious initiative to position Northeast India as a global hub for cultural diplomacy and exchange. 
              Through a series of curated international festivals, we aim to showcase the region's rich heritage while fostering meaningful 
              connections with cultures around the world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <Globe className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Connections</h3>
                <p className="text-gray-600">Creating platforms for international cultural exchange and dialogue</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <Sparkles className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Artistic Innovation</h3>
                <p className="text-gray-600">Fostering creativity and new expressions at the intersection of traditions</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                <p className="text-gray-600">Empowering local communities through participation in global cultural events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Festivals */}
      <section id="festivals" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Upcoming Festivals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingFestivals.map((festival, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{festival.title}</h3>
                  
                  <div className="flex flex-col space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-nedi-orange mr-3" />
                      <span>{festival.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-nedi-orange mr-3" />
                      <span>{festival.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{festival.description}</p>
                  
                  <div className="pt-2">
                    <Link to="#" className="text-nedi-green hover:underline inline-flex items-center">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="#" variant="primary">View All Planned Festivals</CTAButton>
          </div>
        </div>
      </section>
      
      {/* Impact & Goals */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Expected Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="text-nedi-orange mr-3 h-6 w-6" />
                  Cultural Exchange
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Showcase Northeast Indian art forms to international audiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Bring diverse global cultures to Northeast communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Create opportunities for artistic collaborations across borders</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="text-nedi-orange mr-3 h-6 w-6" />
                  Economic Growth
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Boost tourism through international cultural events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Create jobs in event management, hospitality, and creative sectors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Establish Northeast as a destination for cultural tourism</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="text-nedi-orange mr-3 h-6 w-6" />
                  Skill Development
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Train local artists and performers in global best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Develop event management capabilities in local communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Build capacity for international cultural project management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="text-nedi-orange mr-3 h-6 w-6" />
                  Social Cohesion
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Promote intercultural understanding and appreciation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Strengthen community bonds through shared cultural experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-green font-bold mr-2">•</span>
                    <span>Create platforms for dialogue on shared global challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Section */}
      <section id="partner" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Partner with Us</h2>
            <p className="text-center text-gray-700 mb-8">
              Join us in building bridges across cultures through our Future Festivals initiative. 
              We welcome partnerships from cultural institutions, government bodies, private organizations, 
              and individual supporters.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">For Organizations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-nedi-orange font-bold mr-2">•</span>
                    <span>Festival sponsorship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-orange font-bold mr-2">•</span>
                    <span>Cultural exchange program collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-orange font-bold mr-2">•</span>
                    <span>Venue and logistical partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-orange font-bold mr-2">•</span>
                    <span>Media and promotional partnerships</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">For Artists & Cultural Groups</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-nedi-orange font-bold mr-2">•</span>
                    <span>Performance and exhibition opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-orange font-bold mr-2">•</span>
                    <span>Cross-cultural collaborative projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-orange font-bold mr-2">•</span>
                    <span>Artist residency programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nedi-orange font-bold mr-2">•</span>
                    <span>Workshop and masterclass opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <form className="space-y-6 max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nedi-green focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nedi-green focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization</label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nedi-green focus:border-transparent"
                  placeholder="Your organization (if applicable)"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Partnership Interest</label>
                <select
                  id="interest"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nedi-green focus:border-transparent"
                >
                  <option value="">Select your interest</option>
                  <option value="sponsor">Festival Sponsorship</option>
                  <option value="venue">Venue Partnership</option>
                  <option value="media">Media Partnership</option>
                  <option value="artist">Artistic Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nedi-green focus:border-transparent"
                  placeholder="Tell us more about your partnership interest"
                ></textarea>
              </div>
              
              <div className="text-center">
                <CTAButton href="#" variant="primary">
                  Submit Partnership Inquiry
                </CTAButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FutureFestivals;

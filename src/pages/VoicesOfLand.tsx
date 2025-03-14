
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { Card } from '@/components/ui/card';
import { Leaf, MapPin, BookOpen, Users, BarChart3, Heart } from 'lucide-react';

const VoicesOfLand = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Voices of the Land: Indigenous Knowledge & Sustainability"
        subtitle="Ecological conservation & traditional knowledge systems"
        backgroundImage="https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#support" variant="primary">
            Support Indigenous Projects
          </CTAButton>
          <CTAButton href="#learn" variant="outline">
            Learn More
          </CTAButton>
        </div>
      </HeroSection>
      
      {/* Initiative Overview */}
      <section id="learn" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Preserving Traditional Ecological Knowledge</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              The Voices of the Land initiative recognizes that indigenous communities are guardians of invaluable ecological knowledge that has been developed over generations of close relationship with the natural world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <Leaf className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-center">Ecological Wisdom</h3>
                <p className="text-gray-600">Honoring traditional knowledge of biodiversity, sustainable resource management, and ecological balance</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <MapPin className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-center">Land Stewardship</h3>
                <p className="text-gray-600">Supporting indigenous communities in maintaining their role as caretakers of ancestral lands and ecosystems</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <BookOpen className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-center">Knowledge Preservation</h3>
                <p className="text-gray-600">Documenting and passing down traditional ecological knowledge to future generations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Active Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Current Initiatives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Traditional farming methods" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Seed Preservation Project</h3>
                <p className="text-gray-700 mb-4">
                  Working with indigenous farmers to preserve native seed varieties and traditional farming practices that maintain biodiversity and resilience.
                </p>
                <CTAButton href="#" variant="outline" className="text-sm py-1">
                  Learn More
                </CTAButton>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533135595126-a41dc70af6a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Medicinal plant knowledge" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Medicinal Plant Documentation</h3>
                <p className="text-gray-700 mb-4">
                  Collaborating with tribal healers to document traditional medicinal plant knowledge while protecting intellectual property rights.
                </p>
                <CTAButton href="#" variant="outline" className="text-sm py-1">
                  Learn More
                </CTAButton>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585543805890-6051b422a3e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Forest conservation" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Indigenous Forest Management</h3>
                <p className="text-gray-700 mb-4">
                  Supporting community-led forest conservation initiatives that combine traditional knowledge with modern conservation practices.
                </p>
                <CTAButton href="#" variant="outline" className="text-sm py-1">
                  Learn More
                </CTAButton>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Education program" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Youth Education Programs</h3>
                <p className="text-gray-700 mb-4">
                  Intergenerational knowledge transfer programs that engage indigenous youth in learning traditional ecological practices from community elders.
                </p>
                <CTAButton href="#" variant="outline" className="text-sm py-1">
                  Learn More
                </CTAButton>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Impact Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <BarChart3 className="h-12 w-12 text-nedi-orange mx-auto mb-4" />
              <span className="block text-4xl font-bold text-nedi-green mb-2">24</span>
              <p className="text-gray-700">Indigenous communities partnered with</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <MapPin className="h-12 w-12 text-nedi-orange mx-auto mb-4" />
              <span className="block text-4xl font-bold text-nedi-green mb-2">150K+</span>
              <p className="text-gray-700">Acres of indigenous lands protected</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <BookOpen className="h-12 w-12 text-nedi-orange mx-auto mb-4" />
              <span className="block text-4xl font-bold text-nedi-green mb-2">200+</span>
              <p className="text-gray-700">Traditional practices documented</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg text-center">
              <Users className="h-12 w-12 text-nedi-orange mx-auto mb-4" />
              <span className="block text-4xl font-bold text-nedi-green mb-2">3,500+</span>
              <p className="text-gray-700">Youth engaged in learning programs</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community Voices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Arundhati Miri",
                role: "Community Elder, Arunachal Pradesh",
                quote: "This initiative has helped us preserve our ancestral knowledge of forest plants and their medicinal properties. Now our young generation is taking interest in learning these traditions."
              },
              {
                name: "Tenzin Norbu",
                role: "Organic Farmer, Sikkim",
                quote: "The seed preservation project has allowed us to continue growing our traditional crop varieties that are adapted to our mountain climate and resist local pests naturally."
              },
              {
                name: "Lalrinkimi Hmar",
                role: "Youth Program Participant, Mizoram",
                quote: "Learning about our traditional ecological knowledge has given me a deeper connection to our land and inspired me to pursue environmental studies to help my community."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Heart className="h-6 w-6 text-nedi-orange" />
                  </div>
                  <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section id="support" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Support Indigenous Projects</h2>
            <p className="text-center text-gray-700 mb-8">
              Your contribution helps indigenous communities protect their lands, preserve traditional knowledge, and maintain sustainable practices for future generations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-bold mb-4">₹1,000</h3>
                <p className="text-gray-700 mb-6">Supports documentation of traditional knowledge for one day</p>
                <CTAButton href="#" variant="outline" className="w-full">
                  Donate
                </CTAButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-nedi-green relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-nedi-green text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
                <h3 className="text-xl font-bold mb-4">₹5,000</h3>
                <p className="text-gray-700 mb-6">Provides seeds and tools for a family's traditional farm</p>
                <CTAButton href="#" variant="primary" className="w-full">
                  Donate
                </CTAButton>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-bold mb-4">₹10,000</h3>
                <p className="text-gray-700 mb-6">Sponsors a youth workshop on traditional ecological knowledge</p>
                <CTAButton href="#" variant="outline" className="w-full">
                  Donate
                </CTAButton>
              </div>
            </div>
            
            <div className="text-center">
              <p className="mb-6 text-gray-700">
                Want to make a different contribution or explore partnership opportunities?
              </p>
              <CTAButton href="#contact" variant="primary">
                Contact Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research & Resources */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Research & Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Publications</h3>
              <ul className="space-y-4">
                {[
                  "Traditional Ecological Knowledge Systems in North East India",
                  "Indigenous Forest Management Practices and Their Climate Resilience",
                  "Preserving Agricultural Biodiversity Through Native Seed Conservation",
                  "Medicinal Plant Knowledge of Tribal Communities in the Eastern Himalayas"
                ].map((publication, index) => (
                  <li key={index} className="flex gap-3">
                    <BookOpen className="h-5 w-5 text-nedi-green flex-shrink-0 mt-1" />
                    <a href="#" className="text-gray-700 hover:text-nedi-green hover:underline">
                      {publication}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Educational Resources</h3>
              <ul className="space-y-4">
                {[
                  "Teaching Guide: Integrating Traditional Knowledge in Science Education",
                  "Community Toolkit: Documenting Traditional Ecological Practices",
                  "Interactive Map: Indigenous Conservation Areas in North East India",
                  "Video Series: Voices of Indigenous Knowledge Keepers"
                ].map((resource, index) => (
                  <li key={index} className="flex gap-3">
                    <BookOpen className="h-5 w-5 text-nedi-green flex-shrink-0 mt-1" />
                    <a href="#" className="text-gray-700 hover:text-nedi-green hover:underline">
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="#" variant="outline">
              View All Resources
            </CTAButton>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get Involved</h2>
            <p className="text-center text-gray-700 mb-8">
              Contact us to learn more about our initiatives, volunteer opportunities, or partnership possibilities.
            </p>
            
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
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Area of Interest</label>
                <select
                  id="interest"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nedi-green focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="donate">Make a Donation</option>
                  <option value="partner">Partnership Inquiries</option>
                  <option value="research">Research Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nedi-green focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div className="text-center">
                <CTAButton href="#" variant="primary">
                  Send Message
                </CTAButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VoicesOfLand;

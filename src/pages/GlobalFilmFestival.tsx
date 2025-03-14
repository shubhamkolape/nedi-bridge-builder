
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { Link } from 'react-router-dom';
import { Calendar, Film, Globe, Medal, Users, VideoIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

const GlobalFilmFestival = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Global Film Festival"
        subtitle="Cross-cultural collaboration through cinema"
        backgroundImage="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#events" variant="primary">
            Register Now
          </CTAButton>
          <CTAButton href="#submit" variant="outline">
            Submit Your Film
          </CTAButton>
        </div>
      </HeroSection>
      
      {/* Festival Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Celebrating Global Cinematic Excellence</h2>
            <p className="text-lg text-gray-700 mb-8">
              The Global Film Festival brings together filmmakers, artists, and audiences from around the world to celebrate the power of storytelling through cinema. Join us for an unforgettable experience of cross-cultural exchange and artistic discovery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <Globe className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">Featuring films from over 50 countries, celebrating diverse cultural perspectives</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <Film className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Diverse Selections</h3>
                <p className="text-gray-600">Showcasing feature films, short films, documentaries, and experimental works</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-nedi-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry Networking</h3>
                <p className="text-gray-600">Connect with filmmakers, producers, and industry professionals from around the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Events */}
      <section id="events" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Festival Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <Calendar className="h-10 w-10 text-nedi-orange flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Opening Ceremony</h3>
                  <p className="text-gray-700 mb-2">September 15, 2023 • 7:00 PM</p>
                  <p className="text-gray-600">An elegant gala event featuring special guests, opening remarks, and the premiere screening of our featured selection.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <VideoIcon className="h-10 w-10 text-nedi-orange flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Screenings</h3>
                  <p className="text-gray-700 mb-2">September 16-20, 2023 • Various Times</p>
                  <p className="text-gray-600">Daily screenings of selected films across multiple venues, featuring Q&A sessions with filmmakers.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <Users className="h-10 w-10 text-nedi-orange flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Masterclasses</h3>
                  <p className="text-gray-700 mb-2">September 17-19, 2023 • 10:00 AM</p>
                  <p className="text-gray-600">Exclusive sessions with renowned filmmakers sharing insights on storytelling, cinematography, and production.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <Medal className="h-10 w-10 text-nedi-orange flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Awards Ceremony</h3>
                  <p className="text-gray-700 mb-2">September 21, 2023 • 7:00 PM</p>
                  <p className="text-gray-600">Celebration of excellence with awards presented across multiple categories, followed by the closing reception.</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="#" variant="primary">View Complete Schedule</CTAButton>
          </div>
        </div>
      </section>
      
      {/* Film Submission */}
      <section id="submit" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 md:p-12 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Submit Your Film</h2>
              <p className="text-lg text-center mb-8">
                We welcome submissions from filmmakers around the world. Share your vision with our global audience.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Submission Categories</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Feature Films (over 40 minutes)</li>
                    <li>Short Films (under 40 minutes)</li>
                    <li>Documentary Films</li>
                    <li>Animated Films</li>
                    <li>Experimental/Avant-garde Films</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Early Bird Deadline:</span> 
                      <span>March 31, 2023</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Regular Deadline:</span> 
                      <span>May 31, 2023</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Late Deadline:</span> 
                      <span>July 15, 2023</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Notification Date:</span> 
                      <span>August 10, 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <CTAButton href="#" variant="primary">
                  Submit Now
                </CTAButton>
                <p className="mt-4 text-gray-600 text-sm">
                  For submission guidelines and FAQs, please visit our <Link to="#" className="text-nedi-green hover:underline">Submission Guidelines</Link> page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Past Festivals Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Past Festival Highlights</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Relive moments from our previous festivals that brought together filmmakers and audiences from around the world.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg shadow-sm h-64 relative group">
                <img 
                  src={`https://source.unsplash.com/random/600x400?film,festival&sig=${item}`} 
                  alt={`Festival highlight ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View Gallery</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="#" variant="outline">
              View Full Gallery
            </CTAButton>
          </div>
        </div>
      </section>
      
      {/* Partners & Sponsors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Partners & Sponsors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex items-center justify-center p-4">
                <div className="w-full h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                  <span className="font-medium">Sponsor Logo</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Interested in becoming a sponsor for our next festival?
            </p>
            <CTAButton href="#" variant="outline">
              Become a Sponsor
            </CTAButton>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <p className="text-center text-gray-700 mb-8">
              Have questions about the festival? Our team is here to help you.
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nedi-green focus:border-transparent"
                  placeholder="What is this regarding?"
                />
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

export default GlobalFilmFestival;

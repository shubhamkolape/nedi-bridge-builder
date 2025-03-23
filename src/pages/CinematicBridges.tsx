
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { useScrollAnimation } from '../utils/animations';
import { PlayCircle, MessageSquare } from 'lucide-react';

const CinematicBridges = () => {
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [eventsRef, isEventsVisible] = useScrollAnimation();
  
  // Sample festival highlights
  const festivalHighlights = [
    {
      id: 1,
      title: "MeghiFF 2023",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Showcasing 50+ films from Northeast India and around the world, MeghiFF 2023 celebrated the rich cultural diversity of the region.",
      date: "October 15-22, 2023",
      location: "Shillong, Meghalaya"
    },
    {
      id: 2,
      title: "Global Film Exchange",
      image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "A platform for international filmmakers to collaborate with Northeast Indian storytellers, fostering cross-cultural exchange through cinema.",
      date: "March 5-12, 2023",
      location: "Guwahati, Assam"
    },
    {
      id: 3,
      title: "Northeast Film Workshop",
      image: "https://images.unsplash.com/photo-1496559249665-c7e2874707ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "A week-long intensive workshop led by industry professionals, helping emerging filmmakers from Northeast India develop their craft.",
      date: "June 10-17, 2023",
      location: "Kohima, Nagaland"
    }
  ];
  
  return (
    <PageLayout>
      <HeroSection
        title="Cinematic Bridges: MeghiFF & Global Film Networks"
        subtitle="Showcasing Northeast India's stories globally through film festivals and cultural exchange"
        backgroundImage="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#opportunities" variant="primary">
            Submit Your Film
          </CTAButton>
          <CTAButton href="#events" variant="outline">
            Explore Festivals
          </CTAButton>
        </div>
      </HeroSection>
      
      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>} 
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-nedi-green text-center">MeghiFF & Global Film Festival – Why They Matter</h2>
            
            <p className="text-lg mb-6 text-gray-700">
              The Cinematic Bridges initiative connects Northeast India's vibrant filmmaking community with global audiences and industry professionals. Through our flagship events—MeghiFF and the Global Film Festival—we create platforms for cultural exchange, artistic collaboration, and economic opportunities.
            </p>
            
            <p className="text-lg mb-12 text-gray-700">
              These festivals not only showcase the rich cultural narrative of Northeast India but also bring international cinema to local audiences, fostering a two-way exchange of stories, techniques, and perspectives that enrich the global film landscape.
            </p>
            
            <div className="aspect-video mb-16 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="MeghiFF Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Highlights */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">Event Highlights</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            Our film festivals bring together filmmakers, audiences, and industry professionals to celebrate cinema and create lasting connections.
          </p>
          
          <div 
            ref={eventsRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {festivalHighlights.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-nedi-blue">{event.title}</h3>
                  <div className="flex flex-col gap-1 mb-4">
                    <p className="text-sm text-nedi-orange">{event.date}</p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="text-nedi-green font-medium hover:text-nedi-green/80 transition-colors flex items-center gap-2">
                    <PlayCircle size={16} />
                    Watch Highlights
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Opportunities for Filmmakers */}
      <section id="opportunities" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">Opportunities for Filmmakers</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            Whether you're an established filmmaker or just starting out, our festivals offer various platforms to showcase your work and connect with industry professionals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-nedi-blue">Submit Your Film</h3>
              <p className="text-gray-700 mb-6">
                We welcome submissions from filmmakers around the world, with special focus on stories from Northeast India and South Asia. Selected films receive screening opportunities, networking access, and potential awards.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-gray-700">Fill out the submission form with your film details</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-gray-700">Upload your film or provide a screening link</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-gray-700">Our selection committee will review all submissions</p>
                </div>
              </div>
              <CTAButton href="#" variant="primary">Submit Your Film</CTAButton>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-nedi-blue">Networking Events</h3>
              <p className="text-gray-700 mb-6">
                Join our industry sessions, masterclasses, and networking events to connect with filmmakers, producers, distributors, and other industry professionals from around the world.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-orange text-white flex items-center justify-center text-sm font-bold">A</div>
                  <p className="text-gray-700">Masterclasses with renowned filmmakers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-orange text-white flex items-center justify-center text-sm font-bold">B</div>
                  <p className="text-gray-700">Pitch sessions with producers and investors</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-orange text-white flex items-center justify-center text-sm font-bold">C</div>
                  <p className="text-gray-700">Panel discussions on relevant industry topics</p>
                </div>
              </div>
              <CTAButton href="#" variant="secondary">Register for Events</CTAButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-nedi-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Get Festival Updates</h2>
            <p className="text-lg mb-8 text-center">
              Stay informed about upcoming festivals, submission deadlines, and special events.
            </p>
            
            <form className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                    placeholder="Full Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="interests" className="block text-sm font-medium text-white/90 mb-1">I'm interested in</label>
                <select
                  id="interests"
                  className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" disabled selected className="text-gray-700">Select your interests</option>
                  <option value="filmmaker" className="text-gray-700">Submitting a film</option>
                  <option value="attendee" className="text-gray-700">Attending festivals</option>
                  <option value="industry" className="text-gray-700">Industry networking</option>
                  <option value="sponsor" className="text-gray-700">Sponsorship opportunities</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">Message (Optional)</label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 pl-10 bg-white/20 border border-white/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/60"
                    placeholder="Any specific questions or interests..."
                  ></textarea>
                  <MessageSquare size={18} className="absolute left-3 top-3 text-white/60" />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-nedi-orange text-white font-medium py-3 px-4 rounded-md hover:bg-nedi-orange/90 transition-colors"
              >
                Subscribe to Updates
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CinematicBridges;


import React from 'react';
import { useScrollAnimation } from '../utils/animations';
import { Calendar, MapPin, ExternalLink, PlayCircle } from 'lucide-react';
import { Link } from "react-router-dom";
import GlobalFilmFestival from '@/pages/GlobalFilmFestival';
import OrangeEconomy from '@/pages/OrangeEconomy';


const FilmHub = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);

  const festivals = [
    {
      title: "Meghalaya International Film Festival",
      acronym: "MeghiFF",
      date: "May 2024",
      location: "Shillong, Meghalaya",
      description: "Organized by NEDI in association with MeFilMA & FFI, providing global networking opportunities for Northeast filmmakers.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      color: "bg-nedi-blue",
      link: "https://www.meghiff.com" 
    },
    {
      title: "Global Film Festival",
      acronym: "GFF",
      date: "July 2024",
      location: "Agartala, Tripura",
      description: "Connecting Northeast talent with international platforms and creating jobs in post-production & dubbing.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
      color: "bg-nedi-orange",
      link: "global-film-festival" 
    }
  ];

  return (
    <section 
      id="filmhub" 
      className="py-20 bg-nedi-blue/5"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="nedi-container">
        <div className={`transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="tag-pill bg-nedi-orange/10 text-nedi-orange mb-4 mx-auto block w-fit">Entertainment Hub</span>
          <h2 className="section-title">Film & Entertainment Hub</h2>
          <p className="section-subtitle">
            Showcasing Northeast stories to the world through international film festivals and industry collaborations.
          </p>
        </div>

        <div 
          className="mt-16"
          ref={contentRef as React.RefObject<HTMLDivElement>}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {festivals.map((festival, index) => (
  <div key={index} className="glass-card overflow-hidden">
    <div className="relative h-60">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"></div>
      <img src={festival.image} alt={festival.title} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 z-20">
        <span className={`${festival.color} text-white text-sm font-medium px-3 py-1 rounded-full`}>
          {festival.acronym}
        </span>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">{festival.title}</h3>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 text-muted-foreground">
        <div className="flex items-center">
          <Calendar size={18} className="mr-2" />
          <span>{festival.date}</span>
        </div>
        <div className="flex items-center">
          <MapPin size={18} className="mr-2" />
          <span>{festival.location}</span>
        </div>
      </div>

      <p className="mb-6">{festival.description}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        {festival.link.startsWith("http") ? (
          // Open external link in a new tab
          <a href={festival.link} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Festival Details
          </a>
        ) : (
          // Open internal page in a new tab
          <button className="btn-primary" onClick={() => window.open(festival.link, "_blank")}>
            Festival Details
          </button>
        )}
      </div>
    </div>
  </div>
))}

          </div>
          
          <div className="mt-16 glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">The Orange Economy</h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Film, Media, Tourism, and Art are driving economic growth across Northeast India, creating opportunities for local talent and sustainable development.
            </p>
            <Link to="/orange-economy"  target='blank' className="btn-secondary inline-block mx-auto">
              Explore Orange Economy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmHub;

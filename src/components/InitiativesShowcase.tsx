
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../utils/animations';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const InitiativesShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  const initiatives = [
    {
      title: 'Heritage on Wheels: The Mobile Museum',
      description: 'Bringing history & culture to villages across Northeast India, making heritage accessible to all.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      tag: 'Cultural Preservation'
    },
    {
      title: 'Cinematic Bridges: MeghiFF & Global Film Networks',
      description: 'Showcasing Northeast stories on global platforms and creating opportunities for local filmmakers.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      tag: 'Film & Entertainment'
    },
    {
      title: 'North East Connect: Knowledge for Impact',
      description: 'A comprehensive course for policymakers & corporates to better understand the region.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      tag: 'Education'
    },
    {
      title: 'Youth Power: Skill, Startups & Stories',
      description: 'Training & employment initiatives in creative industries for the youth of Northeast India.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31',
      tag: 'Youth Empowerment'
    },
    {
      title: 'The Orange Economy Revolution',
      description: 'Expanding creative industries across Northeast to drive sustainable economic growth.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      tag: 'Sustainable Economy'
    },
    {
      title: 'Indigenous Knowledge & Sustainability',
      description: 'Preserving and promoting ecological conservation through traditional wisdom.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      tag: 'Ecological Conservation'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? initiatives.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === initiatives.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  return (
    <section 
      id="initiatives" 
      className="py-20"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="nedi-container">
        <div className={`transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="tag-pill bg-nedi-orange/10 text-nedi-orange mb-4 mx-auto block w-fit">Our Key Initiatives</span>
          <h2 className="section-title">Building Northeast India's Future</h2>
          <p className="section-subtitle">
            Discover our flagship programs that are transforming communities and creating new opportunities.
          </p>
        </div>

        <div className="mt-12 relative overflow-hidden rounded-xl shadow-nedi-lg">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          
          {/* Slides */}
          <div className="relative h-[500px] md:h-[600px]">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-800 ${
                  index === currentIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70"></div>
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                  <span className="tag-pill bg-nedi-orange text-white mb-4">
                    {initiative.tag}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-white/80 text-lg max-w-2xl mb-6">
                    {initiative.description}
                  </p>
                  <a href="#" className="btn-primary inline-flex items-center">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 z-20 transition-all"
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 z-20 transition-all"
            aria-label="Next slide"
          >
            <ArrowRight size={24} />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {initiatives.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesShowcase;

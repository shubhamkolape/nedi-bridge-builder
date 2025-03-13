
import React from 'react';
import { useScrollAnimation } from '../utils/animations';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  const [membersRef, areMembersVisible] = useScrollAnimation(0.2);

  const teamMembers = [
    {
      name: "Somjit Dutta",
      role: "Founder & Director",
      bio: "Working for Northeast India since 2015, Somjit has spearheaded multiple initiatives to bridge cultural and economic gaps.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Priya Sharma",
      role: "Head of Cultural Programs",
      bio: "An expert in cultural preservation with over 15 years of experience in museum curation and heritage conservation.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Rajiv Barua",
      role: "Film & Media Director",
      bio: "Award-winning filmmaker bringing Northeast stories to international audiences through innovative storytelling.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
    },
    {
      name: "Meera Thapa",
      role: "Education Lead",
      bio: "Leading the North East Connect program, Meera develops curriculum that bridges knowledge gaps about the region.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    }
  ];

  return (
    <section 
      id="team" 
      className="py-20 bg-white"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="nedi-container">
        <div className={`transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="tag-pill bg-nedi-green/10 text-nedi-green mb-4 mx-auto block w-fit">Our Team</span>
          <h2 className="section-title">Meet the People Behind NEDI</h2>
          <p className="section-subtitle">
            Our dedicated team of professionals working to transform Northeast India through culture, education, and innovation.
          </p>
        </div>

        <div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={membersRef as React.RefObject<HTMLDivElement>}
        >
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden transition-all duration-500 ${
                areMembersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-nedi-orange font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4 text-sm">{member.bio}</p>
                
                <div className="flex items-center space-x-3">
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-nedi-blue transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-nedi-blue transition-colors"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-nedi-blue transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn-outline">
            View All Team Members
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

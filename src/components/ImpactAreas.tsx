
import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../utils/animations';
import { 
  Book, Film, Landmark, Lightbulb, Map, Palette, Users, Leaf
} from 'lucide-react';

const ImpactAreas = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  const [itemsRef, areItemsVisible] = useScrollAnimation(0.2);
  
  const impactAreas = [
    {
      icon: <Palette size={40} className="text-nedi-red" />,
      title: 'Cultural Preservation',
      description: 'Heritage projects & Mobile Museum bringing history and traditions to communities.'
    },
    {
      icon: <Book size={40} className="text-nedi-blue" />,
      title: 'Education & Skill Development',
      description: 'North East Connect syllabus providing comprehensive knowledge for impact.'
    },
    {
      icon: <Film size={40} className="text-nedi-orange" />,
      title: 'Film & Entertainment',
      description: 'Global Film Festivals & partnerships showcasing NE stories to the world.'
    },
    {
      icon: <Lightbulb size={40} className="text-amber-500" />,
      title: 'Sustainable Economy',
      description: 'Promoting the Orange Economy to expand NE\'s creative industries.'
    },
    {
      icon: <Map size={40} className="text-nedi-green" />,
      title: 'Infrastructure & Connectivity',
      description: 'Cultural centers & policy work to improve regional connectivity.'
    },
    {
      icon: <Users size={40} className="text-purple-600" />,
      title: 'Youth Empowerment',
      description: 'Training & employment opportunities in creative industries for young talent.'
    },
    {
      icon: <Landmark size={40} className="text-slate-700" />,
      title: 'Global Exchanges',
      description: 'Positioning NE as a hub for cultural diplomacy and international collaboration.'
    },
    {
      icon: <Leaf size={40} className="text-green-600" />,
      title: 'Indigenous Knowledge',
      description: 'Ecological conservation through traditional wisdom and sustainable practices.'
    }
  ];

  const staggerDelays = useStaggeredAnimation(impactAreas.length);

  return (
    <section id="about" className="py-20 bg-muted">
      <div 
        className="nedi-container"
        ref={sectionRef as React.RefObject<HTMLDivElement>}
      >
        <div className={`transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="tag-pill bg-nedi-green/10 text-nedi-green mb-4 mx-auto block w-fit">Our Impact Areas</span>
          <h2 className="section-title">Driving Change Across Northeast India</h2>
          <p className="section-subtitle">
            NEDI works across multiple domains to foster development, preserve heritage,
            and create opportunities for the people of Northeast India.
          </p>
        </div>

        <div 
          ref={itemsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {impactAreas.map((area, index) => (
            <div 
              key={index}
              className={`glass-card p-6 flex flex-col items-center text-center transition-all duration-500 ${
                areItemsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-full bg-white shadow-md">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAreas;

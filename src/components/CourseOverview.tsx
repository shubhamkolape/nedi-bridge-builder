
import React from 'react';
import { useScrollAnimation } from '../utils/animations';
import { 
  Check, Clock, FileText, Award, Globe, CalendarDays, Users, BookOpen
} from 'lucide-react';

const CourseOverview = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);
  const [cardRef, isCardVisible] = useScrollAnimation(0.3);

  const courseModules = [
    { title: "History & Geography of Northeast", icon: <Globe size={20} className="text-nedi-green" /> },
    { title: "Cultural Diversity & Traditions", icon: <Users size={20} className="text-nedi-green" /> },
    { title: "Policy Framework & Governance", icon: <FileText size={20} className="text-nedi-green" /> },
    { title: "Economy & Development Challenges", icon: <BookOpen size={20} className="text-nedi-green" /> }
  ];

  const benefits = [
    "Comprehensive understanding of Northeast India",
    "Insights from regional experts and practitioners",
    "Access to exclusive research materials",
    "Certificate of completion from NEDI",
    "Networking with policy professionals"
  ];

  return (
    <section 
      id="course" 
      className="py-20 bg-white"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="nedi-container">
        <div className={`transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="tag-pill bg-nedi-blue/10 text-nedi-blue mb-4 mx-auto block w-fit">Educational Program</span>
          <h2 className="section-title">Understanding North East</h2>
          <p className="section-subtitle">
            The Ultimate 11-Hour Course for policymakers, professionals, and anyone seeking in-depth knowledge about Northeast India.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div 
            className="lg:col-span-3"
            ref={contentRef as React.RefObject<HTMLDivElement>}
          >
            <div className={`transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">North East Connect Syllabus</h3>
              <p className="text-lg mb-6">
                Our comprehensive course provides a deep dive into the history, geography, culture, and economy of Northeast India. Designed by experts with decades of experience, this program fills critical knowledge gaps for professionals working with the region.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-muted rounded-lg shadow-sm bg-white">
                    <div className="p-2 bg-muted rounded-md">
                      {module.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{module.title}</h4>
                      <p className="text-sm text-muted-foreground">Core Module</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-xl font-semibold mb-4">Course Benefits</h4>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-nedi-green mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-primary">
                  Enroll Now
                </a>
                <a href="#" className="btn-outline">
                  Download Syllabus
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className="lg:col-span-2"
            ref={cardRef as React.RefObject<HTMLDivElement>}
          >
            <div 
              className={`glass-card border border-nedi-blue/10 overflow-hidden transition-all duration-1000 ${
                isCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-nedi-blue p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Course Details</h3>
                <p className="text-white/80">Everything you need to know about Northeast India</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-muted">
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-muted-foreground" />
                    <span>Duration</span>
                  </div>
                  <span className="font-medium">11 Hours</span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-muted">
                  <div className="flex items-center space-x-3">
                    <FileText size={20} className="text-muted-foreground" />
                    <span>Modules</span>
                  </div>
                  <span className="font-medium">8 Modules</span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-muted">
                  <div className="flex items-center space-x-3">
                    <Award size={20} className="text-muted-foreground" />
                    <span>Certification</span>
                  </div>
                  <span className="font-medium">Included</span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-muted">
                  <div className="flex items-center space-x-3">
                    <CalendarDays size={20} className="text-muted-foreground" />
                    <span>Access</span>
                  </div>
                  <span className="font-medium">Lifetime</span>
                </div>
                
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Course Fee</span>
                    <div className="text-3xl font-bold text-nedi-blue">₹3,000</div>
                  </div>
                  
                  <a href="#" className="btn-primary w-full text-center">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;

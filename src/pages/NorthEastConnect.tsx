
import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { useScrollAnimation } from '../utils/animations';

const NorthEastConnect = () => {
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation();
  
  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Policy Advisor, Ministry of Development of North Eastern Region",
      image: "https://i.pravatar.cc/300?img=11",
      quote: "The North East Connect course provided invaluable insights that have directly informed our policy decisions. The structured approach to understanding the region's complexities is exactly what professionals in my position need.",
    },
    {
      id: 2,
      name: "Dr. Anjali Mehta",
      role: "Corporate CSR Director",
      image: "https://i.pravatar.cc/300?img=5",
      quote: "As someone responsible for implementing CSR initiatives in Northeast India, this course gave me the cultural context and practical knowledge needed to create meaningful impact. Highly recommend for corporate leaders.",
    },
    {
      id: 3,
      name: "Mohan Rajput",
      role: "IAS Officer",
      image: "https://i.pravatar.cc/300?img=15",
      quote: "The Northeast Connect course should be mandatory for all civil servants posted to the region. It condenses years of learning into a structured program that prepared me for my posting in ways traditional briefings never could.",
    }
  ];
  
  // Course modules
  const courseModules = [
    {
      id: 1,
      title: "Historical Context",
      duration: "2 hours",
      topics: ["Pre-colonial history", "Colonial impact", "Integration with India", "Key historical movements"]
    },
    {
      id: 2,
      title: "Geographical Understanding",
      duration: "2 hours",
      topics: ["Terrain diversity", "Natural resources", "Strategic location", "Environmental challenges"]
    },
    {
      id: 3,
      title: "Socio-Cultural Landscape",
      duration: "3 hours",
      topics: ["Ethnic diversity", "Language & traditions", "Traditional governance", "Religious practices"]
    },
    {
      id: 4,
      title: "Political Dynamics",
      duration: "2 hours",
      topics: ["Governance structures", "Current political landscape", "Interstate relations", "International borders"]
    },
    {
      id: 5,
      title: "Economic Opportunities",
      duration: "2 hours",
      topics: ["Traditional industries", "Growth sectors", "Investment landscape", "Cross-border trade"]
    }
  ];
  
  return (
    <PageLayout>
      <HeroSection
        title="North East Connect: Knowledge for Impact"
        subtitle="A specialized course for policymakers, bureaucrats, and corporate leaders"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href="#enroll" variant="primary">
            Enroll Now
          </CTAButton>
          <CTAButton href="#about" variant="outline">
            Get a Course Brochure
          </CTAButton>
        </div>
      </HeroSection>
      
      {/* About the Course */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>} 
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-nedi-green text-center">About the Course</h2>
            
            <p className="text-lg mb-8 text-gray-700">
              North East Connect is a comprehensive 11-hour program designed specifically for professionals whose work impacts Northeast India. The course provides essential knowledge and cultural context necessary for effective policy-making, governance, and business operations in the region.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-nedi-blue">Course Structure</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-nedi-green text-white flex items-center justify-center font-bold text-lg">
                      11
                    </div>
                    <span className="text-lg font-medium">Total Hours</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-nedi-green text-white flex items-center justify-center font-bold text-lg">
                      5
                    </div>
                    <span className="text-lg font-medium">Core Modules</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-nedi-green text-white flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <span className="text-lg font-medium">Days (Full-time option)</span>
                  </div>
                </div>
                
                <div className="border-l border-gray-300 pl-6">
                  <h4 className="text-xl font-medium mb-4 text-nedi-blue">Delivery Options</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                      <span>3-day intensive in-person</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                      <span>5-day virtual (2 hours daily)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                      <span>Customized for organizations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-orange"></div>
                      <span>Self-paced online option</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-6 text-nedi-blue">Course Modules</h3>
            
            <div className="space-y-4 mb-12">
              {courseModules.map((module) => (
                <div key={module.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-medium text-nedi-blue">{module.title}</h4>
                    <span className="text-nedi-orange font-medium">{module.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Enrollment Information */}
      <section id="enroll" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">Enrollment Information</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            Join our next cohort and gain essential knowledge for impactful work in Northeast India.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-nedi-blue">Course Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gray-800">Next Batch</h4>
                  <p className="text-gray-700">January 15-17, 2024 (In-person, Guwahati)</p>
                  <p className="text-gray-700">February 5-9, 2024 (Virtual)</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gray-800">Course Fee</h4>
                  <p className="text-gray-700">₹25,000 per participant (In-person)</p>
                  <p className="text-gray-700">₹18,000 per participant (Virtual)</p>
                  <p className="text-sm text-nedi-orange mt-2">Group discounts available for 3+ participants</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gray-800">What's Included</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-green"></div>
                      <span className="text-gray-700">Comprehensive course materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-green"></div>
                      <span className="text-gray-700">Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-green"></div>
                      <span className="text-gray-700">Networking opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-green"></div>
                      <span className="text-gray-700">1-year access to online resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-nedi-green"></div>
                      <span className="text-gray-700">Meals during in-person sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-nedi-blue">Registration Process</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="text-gray-800 font-medium">Complete the enrollment form</p>
                    <p className="text-gray-600 text-sm">Provide your professional details and select your preferred batch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="text-gray-800 font-medium">Verification and confirmation</p>
                    <p className="text-gray-600 text-sm">Our team will verify your application and send a confirmation email</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="text-gray-800 font-medium">Complete the payment</p>
                    <p className="text-gray-600 text-sm">Pay the course fee through our secure payment gateway</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-nedi-green text-white flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <p className="text-gray-800 font-medium">Receive course materials</p>
                    <p className="text-gray-600 text-sm">Get access to pre-reading materials and course schedule</p>
                  </div>
                </div>
              </div>
              
              <CTAButton href="#" variant="primary" className="w-full">
                Enroll Now
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-nedi-green">What Participants Say</h2>
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            Hear from professionals who have completed the North East Connect course.
          </p>
          
          <div 
            ref={testimonialsRef as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-nedi-blue">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <CTAButton href="#" variant="outline">
              Read More Testimonials
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NorthEastConnect;

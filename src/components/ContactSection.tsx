
import React from 'react';
import { useScrollAnimation } from '../utils/animations';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  const [formRef, isFormVisible] = useScrollAnimation(0.2);
  const [infoRef, isInfoVisible] = useScrollAnimation(0.3);

  return (
    <section 
      id="contact" 
      className="py-20 bg-nedi-ivory/30"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="nedi-container">
        <div className={`transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="tag-pill bg-nedi-blue/10 text-nedi-blue mb-4 mx-auto block w-fit">Get Involved</span>
          <h2 className="section-title">Join Our Initiative</h2>
          <p className="section-subtitle">
            Be a part of the transformation of Northeast India. Connect with us to explore partnerships, memberships, or volunteering opportunities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div 
            ref={formRef as React.RefObject<HTMLDivElement>}
            className={`glass-card p-8 transition-all duration-1000 ${isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-nedi-green transition-all" 
                    // placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-nedi-green transition-all" 
                    // placeholder="johndoe@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-nedi-green transition-all" 
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-nedi-green transition-all" 
                  placeholder="Tell us about your interest or inquiry..."
                  required
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="btn-primary w-full sm:w-auto flex items-center justify-center">
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
          
          <div 
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${isInfoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-nedi-green/10 p-3 rounded-md mr-4">
                    <MapPin size={24} className="text-nedi-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-muted-foreground">
                    Panchshil business park.<br />
                    Balewadi high street, Pune -411045
                    </p>
                  </div>
                </div>
                
                {/* <div className="flex items-start">
                  <div className="bg-nedi-green/10 p-3 rounded-md mr-4">
                    <Phone size={24} className="text-nedi-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div> */}
                
                <div className="flex items-start">
                  <div className="bg-nedi-green/10 p-3 rounded-md mr-4">
                    <Mail size={24} className="text-nedi-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-muted-foreground">
                      info@nedi.org.in<br />
                      {/* partnerships@nedi.org */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Membership Benefits</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-nedi-orange/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-nedi-orange rounded-full"></div>
                  </div>
                  <span>Exclusive access to NEDI events and film festivals</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-nedi-orange/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-nedi-orange rounded-full"></div>
                  </div>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-nedi-orange/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-nedi-orange rounded-full"></div>
                  </div>
                  <span>Priority registration for training programs</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-nedi-orange/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-nedi-orange rounded-full"></div>
                  </div>
                  <span>Regular updates on Northeast India developments</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-nedi-orange/10 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-nedi-orange rounded-full"></div>
                  </div>
                  <span>Discounts on NE Connect courses and workshops</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <a href="#" className="btn-secondary w-full text-center">
                  Become a Member
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

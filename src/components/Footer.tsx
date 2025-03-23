
import React from 'react';
import { useScrollAnimation } from '../utils/animations';
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp, Mail
} from 'lucide-react';

const Footer = () => {
  const [footerRef, isFooterVisible] = useScrollAnimation(0.1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className="bg-nedi-blue text-white pt-16 pb-8"
      ref={footerRef as React.RefObject<HTMLElement>}
    >
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`transition-all duration-1000 ${isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="mb-6">
                <a href="#" className="flex items-center">
                  <span className="text-3xl font-bold text-white">NEDI</span>
                </a>
                <p className="mt-2 text-white/80">
                  North East Development Initiative
                </p>
              </div>
              
              <p className="text-white/70 mb-6">
                Building bridges through culture, heritage, film, and innovation to empower Northeast India.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#about" className="text-white/70 hover:text-white transition-colors">
                    About NEDI
                  </a>
                </li>
                <li>
                  <a href="#initiatives" className="text-white/70 hover:text-white transition-colors">
                    Our Initiatives
                  </a>
                </li>
                <li>
                  <a href="#jewellery" className="text-white/70 hover:text-white transition-colors">
                    BH Jewellery
                  </a>
                </li>
                <li>
                  <a href="#course" className="text-white/70 hover:text-white transition-colors">
                    NE Connect Course
                  </a>
                </li>
                <li>
                  <a href="#filmhub" className="text-white/70 hover:text-white transition-colors">
                    Film & Entertainment
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Join as Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Become a Sponsor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Media Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-white/70 mb-4">
                Subscribe to our newsletter for the latest updates on NEDI initiatives and Northeast India.
              </p>
              
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" 
                />
                <button 
                  type="submit" 
                  className="bg-white text-nedi-blue font-medium px-4 py-3 rounded-md hover:bg-white/90 transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <Mail size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} North East Development Initiative. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 bg-nedi-green text-white p-3 rounded-full shadow-lg hover:bg-nedi-green/90 transition-all z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useScrollAnimation, useParallax } from "../utils/animations";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [contentRef, isContentVisible] = useScrollAnimation(0.1);
  const [imageRef, imageOffset] = useParallax(0.2);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background overlay */}
      <div
        ref={imageRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${Math.min(imageOffset, 100)}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nedi-blue/80 to-nedi-green/80 mix-blend-multiply z-10"></div>
        <img
          src=" "
          alt="North East India Cultural Event"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-16 md:py-0">
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl transition-opacity duration-1000 ease-out opacity-100`}
        >
          <span className="inline-block tag-pill bg-white/20 backdrop-blur-sm text-white mb-6 animate-fade-in">
            Empowering North East India
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up">
            Building Bridges Through{" "}
            <span className="text-nedi-orange">Culture</span>, Heritage, Film,
            and Innovation
          </h1>

          <p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            NEDI is the driving force behind cultural preservation, economic
            empowerment, and global connectivity for Northeast India.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up items-start sm:items-center"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#about" className="btn-primary">
              Discover Our Work
            </a>
            <a
              href="#contact"
              className="btn-outline border-white text-white hover:bg-transparent"
            >
              Join Our Initiative
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-pulse-soft">
        <a href="#about" className="text-white flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;

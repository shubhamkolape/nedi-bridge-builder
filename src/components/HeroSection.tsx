
import React from 'react';
import { useScrollAnimation } from '../utils/animations';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  className?: string;
  height?: 'full' | 'large' | 'medium' | 'small';
  overlayOpacity?: 'light' | 'medium' | 'dark';
  children?: React.ReactNode;
  titleClassName?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage,
  className = '',
  height = 'large',
  overlayOpacity = 'medium',
  children,
  titleClassName = ''
}: HeroSectionProps) => {
  const [contentRef, isContentVisible] = useScrollAnimation(0.1);
  
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[50vh]',
    small: 'min-h-[30vh]'
  };
  
  const overlayClasses = {
    light: 'bg-gradient-to-r from-nedi-blue/60 to-nedi-green/60',
    medium: 'bg-gradient-to-r from-nedi-blue/70 to-nedi-green/70',
    dark: 'bg-gradient-to-r from-nedi-blue/80 to-nedi-green/80'
  };
  
  return (
    <section className={`relative ${heightClasses[height]} flex items-center ${className}`}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]} mix-blend-multiply z-10`}></div>
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-16">
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl transition-opacity duration-1000 ease-out ${
            isContentVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-up ${titleClassName}`}>
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-up" style={{animationDelay: '0.2s'}}>
              {subtitle}
            </p>
          )}
          
          {children && (
            <div className="animate-fade-up" style={{animationDelay: '0.4s'}}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

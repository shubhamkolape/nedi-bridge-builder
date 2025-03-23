
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const CTAButton = ({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  external = false,
  onClick
}: CTAButtonProps) => {
  const baseClasses = "inline-block text-center px-6 py-3 rounded-md font-medium transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-nedi-green text-white hover:bg-nedi-green/90 hover:shadow-md",
    secondary: "bg-nedi-orange text-white hover:bg-nedi-orange/90 hover:shadow-md",
    outline: "border border-nedi-green text-nedi-green hover:bg-nedi-green/10"
  };
  
  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    className
  );
  
  if (external) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link 
      to={href} 
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CTAButton;

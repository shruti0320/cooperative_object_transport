import React, { useState, useEffect } from 'react';
import { PaperIcon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = "text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide";
  const buttonLinkClasses = "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium tracking-wide";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-white'}`}>
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-1"></div>
        <div className="hidden md:flex items-center justify-center space-x-8 flex-[2]">
          <a href="#abstract" className={navLinkClasses}>Abstract</a>
          <a href="#methodology" className={navLinkClasses}>Methodology</a>
          <a href="#results" className={navLinkClasses}>Results</a>
        </div>
        <div className="flex items-center justify-end space-x-2 flex-1">
          <a href="#" className={`${buttonLinkClasses} bg-gray-900 hover:bg-gray-800 text-white`}>
            <PaperIcon />
            <span className="hidden sm:inline">Paper PDF</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
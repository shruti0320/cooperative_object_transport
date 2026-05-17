import React from 'react';
import { PaperIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="text-center pt-[30px] pb-20 lg:pb-32 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight max-w-5xl tracking-tight">
        Object Transportation by Cooperative Mobile Manipulators in Coordination with Humans
      </h1>
      
      <div className="mb-16 text-xl text-gray-500 flex flex-col items-center gap-2">
        <p className="font-medium text-gray-900">Shruti Pandey, Arpita Sinha, and Anirban Guha</p>
        <p className="text-lg">Indian Institute of Technology Bombay, Mumbai, India</p>
      </div>

      <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900 ring-1 ring-gray-900/5 aspect-video relative">
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/jCHpfZ6FeMo" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
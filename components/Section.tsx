import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  return (
    <section id={id} className={className || "pt-[60px] pb-20 md:pt-[70px] md:pb-28 border-t border-gray-100"}>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div className="shrink-0">
          <h2 className="text-3xl font-serif text-gray-900 tracking-tight text-center">{title}</h2>
        </div>
        <div className="prose prose-lg prose-gray">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;

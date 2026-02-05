import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../types';

const timelineData: TimelineItem[] = [
  {
    year: "Present",
    company: "Integration Health",
    role: "Business Development & Marketing Executive",
    description: "Leading enterprise ECMO and perfusion program expansion with focus on Joint Commission-accredited clinical delivery models."
  },
  {
    year: "2020",
    company: "All Medical Personnel",
    role: "Strategic Growth Lead",
    description: "Spearheaded market entry and scalable clinical program development for regional health systems."
  },
  {
    year: "2017",
    company: "VEP Healthcare",
    role: "Director of Business Development",
    description: "Managed hospital partnership strategies and emergency medicine service line growth."
  },
  {
    year: "2014",
    company: "Accolite",
    role: "Account Executive",
    description: "Strategic healthcare technology implementations and enterprise client management."
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-healthcare-blue/10 -translate-x-1/2"></div>
      
      <div className="space-y-16">
        {timelineData.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* Dot Marker */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-healthcare-teal -translate-x-1/2 z-10 shadow-sm"></div>
            
            {/* Content Card */}
            <div className={`w-full md:w-[45%] ml-12 md:ml-0 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(15,60,90,0.03)] hover:shadow-[0_20px_40px_rgba(15,60,90,0.06)] transition-all duration-300`}>
              <span className="inline-block text-xs font-bold text-healthcare-teal uppercase tracking-[0.2em] mb-3">{item.year}</span>
              <h3 className="text-xl font-display font-bold text-healthcare-blue mb-1">{item.company}</h3>
              <p className="text-sm font-semibold text-healthcare-slate/80 mb-4">{item.role}</p>
              <p className="text-sm leading-relaxed text-healthcare-slate/60">
                {item.description}
              </p>
            </div>
            
            {/* Empty Space for alignment on Desktop */}
            <div className="hidden md:block w-[45%]"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Activity, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Ambulance,
  Mail,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  MessageCircle,
  Globe,
  MapPin,
  ArrowRight
} from 'lucide-react';
import WaveformBackground from './components/WaveformBackground';
import Timeline from './components/Timeline';
import { StatItem, ServiceCard } from './types';

const services: ServiceCard[] = [
  {
    title: "ECMO & Perfusion Development",
    description: "Building scalable, high-reliability mechanical circulatory support programs from inception to enterprise-wide operations.",
    icon: <Activity className="w-8 h-8" />
  },
  {
    title: "Enterprise Coverage Models",
    description: "Hybrid PRN and guaranteed staffing models tailored for adult, pediatric, and neonatal specialized clinical needs.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Readiness & Simulation",
    description: "Comprehensive training and simulation planning to ensure clinical teams are prepared for high-acuity life support scenarios.",
    icon: <Stethoscope className="w-8 h-8" />
  },
  {
    title: "OPO & Health System Support",
    description: "Strategic partnerships with Organ Procurement Organizations and health systems to optimize donor support and recovery.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Pre-Hospital & Transport",
    description: "Integrating air and ground transport education with hospital-based care for seamless ECMO mobility.",
    icon: <Ambulance className="w-8 h-8" />
  },
  {
    title: "Growth Strategy",
    description: "Market-specific business development focusing on clinical excellence and long-term financial sustainability.",
    icon: <TrendingUp className="w-8 h-8" />
  }
];

const stats: StatItem[] = [
  { label: "Systems Supported", value: "40", suffix: "+" },
  { label: "Program Growth", value: "150", suffix: "%" },
  { label: "Markets Entered", value: "12", suffix: "" },
  { label: "Clinical Excellence", value: "100", suffix: "%" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-healthcare-teal/30 selection:text-healthcare-blue overflow-x-hidden bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-healthcare-blue rounded-xl flex items-center justify-center shadow-lg group-hover:bg-healthcare-teal transition-colors duration-500">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-healthcare-blue' : 'text-healthcare-blue'}`}>
              MATT MCKINLEY
            </span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Services', 'Experience', 'Impact', 'Contact'].map((item, idx) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={`text-sm font-semibold tracking-wide hover:text-healthcare-teal transition-colors ${scrolled ? 'text-healthcare-slate' : 'text-healthcare-slate/80'}`}
              >
                {item}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-healthcare-blue text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-healthcare-teal transition-all shadow-xl hover:shadow-healthcare-teal/20"
            >
              Get in Touch
            </motion.a>
          </div>

          <button className="md:hidden text-healthcare-blue p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-8 space-y-6">
                {['About', 'Services', 'Experience', 'Impact', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-display font-bold text-healthcare-blue hover:text-healthcare-teal transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <WaveformBackground />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-1.5 bg-healthcare-blue/5 rounded-full text-healthcare-blue text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-healthcare-teal animate-pulse"></span>
              <span>Enterprise Perfusion Strategy</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-display font-bold text-healthcare-blue leading-[1.1] mb-8 text-balance">
              Building Scalable, <br />
              <span className="text-healthcare-teal relative inline-block italic">
                High-Reliability
                <motion.span 
                  initial={{ width: 0 }} 
                  animate={{ width: '100%' }} 
                  transition={{ delay: 1, duration: 1.2, ease: "circOut" }}
                  className="absolute bottom-2 left-0 h-1.5 bg-healthcare-teal/20"
                ></motion.span>
              </span> <br />
              Healthcare Programs
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-healthcare-slate/70 leading-relaxed mb-10 max-w-xl">
              Driving transformational growth in ECMO, perfusion, and specialized healthcare delivery through strategic operational excellence and clinical integrity.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
              <a 
                href="#contact" 
                className="px-10 py-4 bg-healthcare-blue text-white rounded-2xl font-bold hover:bg-healthcare-teal transition-all shadow-2xl hover:shadow-healthcare-teal/30 hover:-translate-y-1 active:translate-y-0"
              >
                Connect With Matt
              </a>
              <a 
                href="#experience" 
                className="px-10 py-4 bg-white text-healthcare-blue border border-healthcare-blue/10 rounded-2xl font-bold hover:border-healthcare-blue/30 transition-all flex items-center group shadow-sm hover:shadow-md"
              >
                View Track Record
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_40px_80px_rgba(15,60,90,0.12)] border-[12px] border-white group">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1400" 
                alt="Modern Medical Innovation" 
                className="w-full h-auto object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-healthcare-blue/40 via-transparent to-healthcare-teal/10 mix-blend-multiply group-hover:opacity-40 transition-opacity"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-healthcare-teal/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-healthcare-blue/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10 aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Matthew McKinley - Professional Portrait Placeholder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/50">
                  <p className="text-healthcare-blue font-display font-bold text-2xl mb-1">Matt McKinley</p>
                  <p className="text-healthcare-teal font-bold text-sm tracking-widest uppercase">Growth Executive</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7"
            >
              <span className="inline-block text-xs font-bold text-healthcare-teal tracking-[0.4em] uppercase mb-6">Executive Profile</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-healthcare-blue mb-10 leading-tight">Navigating the Intersection of Clinical Quality & Enterprise Growth</h2>
              <div className="space-y-8 text-healthcare-slate/70 text-lg lg:text-xl leading-relaxed">
                <p>
                  At <strong className="text-healthcare-blue font-bold">Integration Health</strong>, I lead the development of enterprise-wide clinical programs, specializing in ECMO and perfusion services. My mission is to build infrastructure that doesn't just grow, but remains fundamentally high-reliability.
                </p>
                <p>
                  I've dedicated my career to optimizing <strong className="text-healthcare-blue font-bold">Joint Commission-accredited</strong> processes, ensuring that health systems, OPOs, and transport teams can deliver advanced care seamlessly.
                </p>
              </div>
              
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-healthcare-teal/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <ShieldCheck className="text-healthcare-teal mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-healthcare-blue uppercase tracking-widest text-xs">JCI Quality Standards</p>
                </div>
                <div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-healthcare-teal/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <Globe className="text-healthcare-teal mb-4 w-10 h-10 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-healthcare-blue uppercase tracking-widest text-xs">National Scalability</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold text-healthcare-teal tracking-[0.4em] uppercase mb-4"
            >
              Strategic Focus
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-healthcare-blue"
            >
              Our Core Expertise
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-4"
              >
                <div className="mb-8 p-6 bg-healthcare-blue/5 rounded-3xl w-fit group-hover:bg-healthcare-teal group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  {React.cloneElement(service.icon as React.ReactElement, { 
                    className: "w-8 h-8" 
                  })}
                </div>
                <h4 className="text-2xl font-display font-bold text-healthcare-blue mb-5 leading-tight group-hover:text-healthcare-teal transition-colors">
                  {service.title}
                </h4>
                <p className="text-healthcare-slate/60 leading-relaxed text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold text-healthcare-teal tracking-[0.4em] uppercase mb-4"
            >
              Proven Impact
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-healthcare-blue"
            >
              Career Milestone Timeline
            </motion.h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-32 gradient-bg text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-6xl lg:text-8xl font-display font-bold text-white mb-2 tabular-nums">
                  {stat.value}<span className="text-healthcare-teal text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl p-16 rounded-[4rem] border border-white/10 shadow-3xl"
          >
            <p className="text-2xl md:text-3xl italic font-light leading-relaxed mb-12 text-white/90">
              "Building clinical programs isn't just about market share; it's about creating a sustainable ecosystem where clinical excellence is the primary driver of growth."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-healthcare-teal mb-6 rounded-full"></div>
              <p className="font-display font-bold text-2xl tracking-[0.3em] uppercase text-white">Matt McKinley</p>
              <p className="text-xs font-bold text-healthcare-teal mt-2 uppercase tracking-[0.4em]">Healthcare Executive Leader</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] shadow-2xl relative overflow-hidden border border-slate-100 flex flex-col lg:grid lg:grid-cols-12 min-h-[750px]"
          >
            {/* Contact Panel */}
            <div className="lg:col-span-5 bg-healthcare-blue p-12 md:p-20 text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full text-white text-[10px] font-black tracking-[0.3em] uppercase mb-12 border border-white/20">
                  <MessageCircle size={12} className="text-healthcare-teal" />
                  <span>Connect</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">Initiate a Strategic Partnership</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start space-x-6 group">
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/10 group-hover:bg-healthcare-teal group-hover:text-white transition-all duration-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2">Direct Channel</p>
                      <a href="mailto:contact@mattmckinley.com" className="text-lg font-bold hover:text-healthcare-teal transition-colors break-all">
                        contact@mattmckinley.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/10 group-hover:bg-healthcare-teal group-hover:text-white transition-all duration-500">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2">Executive Network</p>
                      <a href="#" className="text-lg font-bold hover:text-healthcare-teal transition-colors flex items-center">
                        LinkedIn Profile <ExternalLink size={16} className="ml-2 opacity-50" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10 flex items-center space-x-5">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-healthcare-teal font-display font-bold text-2xl border border-white/10">M</div>
                <div>
                  <p className="text-white font-bold text-lg">Matt McKinley</p>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Growth & Perfusion Executive</p>
                </div>
              </div>
            </div>
            
            {/* Form Panel */}
            <div className="lg:col-span-7 p-12 md:p-20 bg-white">
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input type="text" id="name" required className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-healthcare-teal outline-none transition-all text-healthcare-blue font-bold placeholder-transparent" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-healthcare-blue/40 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-300 peer-focus:-top-4 peer-focus:text-healthcare-teal peer-focus:text-[10px] transition-all cursor-text group-hover:text-healthcare-blue/60">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="org" className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-healthcare-teal outline-none transition-all text-healthcare-blue font-bold placeholder-transparent" placeholder="Org" />
                    <label htmlFor="org" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-healthcare-blue/40 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-300 peer-focus:-top-4 peer-focus:text-healthcare-teal peer-focus:text-[10px] transition-all cursor-text group-hover:text-healthcare-blue/60">Health System</label>
                  </div>
                </div>
                
                <div className="relative group">
                  <input type="email" id="email" required className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-healthcare-teal outline-none transition-all text-healthcare-blue font-bold placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-healthcare-blue/40 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-300 peer-focus:-top-4 peer-focus:text-healthcare-teal peer-focus:text-[10px] transition-all cursor-text group-hover:text-healthcare-blue/60">Executive Email</label>
                </div>

                <div className="relative group">
                  <textarea id="message" rows={4} className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-healthcare-teal outline-none transition-all text-healthcare-blue font-bold placeholder-transparent resize-none" placeholder="Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-healthcare-blue/40 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-300 peer-focus:-top-4 peer-focus:text-healthcare-teal peer-focus:text-[10px] transition-all cursor-text group-hover:text-healthcare-blue/60">Strategic Inquiry</label>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-healthcare-blue text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] hover:bg-healthcare-teal shadow-2xl hover:shadow-healthcare-teal/40 transition-all flex items-center justify-center space-x-3"
                >
                  <span>Submit Request</span>
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-md">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-healthcare-blue rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <span className="font-display font-bold text-2xl text-healthcare-blue tracking-tight">MATT MCKINLEY</span>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">
                Specializing in enterprise ECMO, perfusion programs, and health system-wide clinical growth through strategic operational innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-6">
                <p className="text-[10px] font-black text-healthcare-blue/30 uppercase tracking-[0.5em]">Navigation</p>
                <div className="flex flex-col space-y-4 font-bold text-slate-600">
                  <a href="#about" className="hover:text-healthcare-teal transition-colors">About</a>
                  <a href="#services" className="hover:text-healthcare-teal transition-colors">Services</a>
                  <a href="#experience" className="hover:text-healthcare-teal transition-colors">Track Record</a>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-black text-healthcare-blue/30 uppercase tracking-[0.5em]">Network</p>
                <div className="flex flex-col space-y-4 font-bold text-slate-600">
                  <a href="#" className="hover:text-healthcare-teal transition-colors">LinkedIn</a>
                  <a href="#contact" className="hover:text-healthcare-teal transition-colors">Consultation</a>
                  <a href="mailto:contact@mattmckinley.com" className="hover:text-healthcare-teal transition-colors">Email</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} Matthew McKinley. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
              <span>Identity by</span>
              <a href="#" className="text-healthcare-blue hover:text-healthcare-teal transition-colors">Nexaforge Technologies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
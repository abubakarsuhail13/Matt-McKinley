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
  MapPin
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
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-healthcare-teal selection:text-white overflow-x-hidden bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-healthcare-blue rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-healthcare-blue' : 'text-healthcare-blue md:text-healthcare-blue'}`}>
              MATT
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
                className={`text-sm font-semibold hover:text-healthcare-teal transition-colors ${scrolled ? 'text-healthcare-slate' : 'text-healthcare-slate/80'}`}
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
              className="bg-healthcare-blue text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-healthcare-teal transition-all shadow-lg hover:shadow-healthcare-teal/30"
            >
              Connect
            </motion.a>
          </div>

          <button className="md:hidden text-healthcare-blue p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t overflow-hidden"
            >
              <div className="flex flex-col p-8 space-y-6">
                {['About', 'Services', 'Experience', 'Impact', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-display font-bold text-healthcare-blue hover:text-healthcare-teal transition-colors"
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
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-1.5 bg-healthcare-blue/5 rounded-full text-healthcare-blue text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-healthcare-teal animate-pulse"></span>
              <span>Enterprise Growth Partner</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-display font-bold text-healthcare-blue leading-[1.1] mb-8">
              Building Scalable, <br />
              <span className="text-healthcare-teal relative inline-block">
                High-Reliability
                <motion.span 
                  initial={{ width: 0 }} 
                  animate={{ width: '100%' }} 
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 left-0 h-1 bg-healthcare-teal/30"
                ></motion.span>
              </span> <br />
              Clinical Programs
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-healthcare-slate/70 leading-relaxed mb-10 max-w-xl">
              Driving transformational growth in ECMO, perfusion, and specialized healthcare delivery through strategic operational excellence.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-healthcare-blue text-white rounded-xl font-bold hover:bg-healthcare-teal transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                Let's Connect
              </a>
              <a 
                href="#experience" 
                className="px-8 py-4 bg-white text-healthcare-blue border-2 border-healthcare-blue/5 rounded-xl font-bold hover:border-healthcare-blue/20 transition-all flex items-center group shadow-sm hover:shadow-md"
              >
                View Experience
                <ChevronDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(15,60,90,0.15)] hover:rotate-0 transition-transform duration-1000 ease-in-out group border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Medical Laboratory" 
                className="w-full h-auto object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-healthcare-blue/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-healthcare-teal/10 rounded-full blur-[90px]"></div>
            <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-healthcare-blue/10 rounded-full blur-[90px]"></div>
          </motion.div>
        </div>
      </header>

      {/* Strategic Leadership Section (About) */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Matt - Healthcare Executive Placeholder" 
                  className="w-full h-full object-cover min-h-[500px]"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg">
                  <p className="text-healthcare-blue font-display font-bold text-xl">Matt</p>
                  <p className="text-healthcare-teal font-semibold text-sm">Strategic Operations Leader</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-healthcare-teal/5 rounded-full blur-3xl"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <span className="inline-block text-xs font-bold text-healthcare-teal tracking-[0.4em] uppercase mb-6">About Matt</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-healthcare-blue mb-10 leading-tight">Elevating Health Systems Through Enterprise Innovation</h2>
              <div className="space-y-8 text-healthcare-slate/70 text-lg lg:text-xl leading-relaxed">
                <p>
                  As a leading executive, I navigate the intersection of complex clinical logistics and aggressive business growth. My focus is building high-reliability programs that prioritize patient outcomes while maintaining operational scalability.
                </p>
                <p>
                  My specialization in <strong className="text-healthcare-blue font-bold">Enterprise ECMO</strong> and perfusion services enables health systems to offer advanced life support with confidence. We implement <strong className="text-healthcare-slate underline decoration-healthcare-teal decoration-2">Joint Commission–accredited</strong> delivery models that set industry benchmarks for safety and quality.
                </p>
              </div>
              
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center space-x-5 p-6 rounded-3xl bg-slate-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-4 bg-white rounded-2xl shadow-sm text-healthcare-teal">
                    <ShieldCheck size={28} />
                  </div>
                  <span className="font-bold text-healthcare-blue text-sm uppercase tracking-wider">JCI Accredited Protocols</span>
                </div>
                <div className="flex items-center space-x-5 p-6 rounded-3xl bg-slate-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-4 bg-white rounded-2xl shadow-sm text-healthcare-teal">
                    <Globe size={28} />
                  </div>
                  <span className="font-bold text-healthcare-blue text-sm uppercase tracking-wider">National Clinical Scalability</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold text-healthcare-teal tracking-[0.4em] uppercase mb-4"
            >
              Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-healthcare-blue"
            >
              Enterprise Focus Areas
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3"
              >
                <div className="mb-8 p-5 bg-healthcare-teal/5 rounded-2xl w-fit group-hover:bg-healthcare-teal group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  {React.cloneElement(service.icon as React.ReactElement, { 
                    className: "w-8 h-8 transition-colors duration-300" 
                  })}
                </div>
                <h4 className="text-2xl font-display font-bold text-healthcare-blue mb-4 group-hover:text-healthcare-teal transition-colors">{service.title}</h4>
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
              Track Record
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-healthcare-blue"
            >
              A Legacy of Strategic Growth
            </motion.h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Impact Stats Section */}
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
                className="space-y-4"
              >
                <div className="text-6xl lg:text-8xl font-display font-bold text-white flex justify-center items-end">
                  {stat.value}
                  <span className="text-2xl lg:text-4xl ml-1 mb-3 text-healthcare-teal font-sans">{stat.suffix}</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-28 text-center max-w-4xl mx-auto bg-white/5 backdrop-blur-lg p-12 md:p-16 rounded-[4rem] border border-white/20 shadow-2xl"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl italic font-light leading-relaxed mb-12 text-white/95">
              "Successful clinical expansion is built on a foundation of operational discipline and a relentless pursuit of safety. We build ecosystems of excellence."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-0.5 bg-healthcare-teal mb-6"></div>
              <p className="font-display font-bold text-2xl tracking-[0.2em] uppercase text-white">Matt</p>
              <p className="text-sm font-bold text-healthcare-teal mt-2 uppercase tracking-widest">Healthcare Executive</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Dummy Info & Fixed Form Glitch */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(15,60,90,0.1)] relative overflow-hidden border border-gray-100 flex flex-col lg:grid lg:grid-cols-12"
          >
            {/* Left Side: Contact Info Panel (Col 5) */}
            <div className="lg:col-span-5 bg-healthcare-blue p-10 md:p-16 text-white relative flex flex-col justify-between">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full text-white text-xs font-bold tracking-[0.2em] uppercase mb-10 border border-white/20">
                  <MessageCircle size={14} className="text-healthcare-teal" />
                  <span>Connect</span>
                </div>
                <h2 className="text-4xl font-display font-bold mb-8 leading-tight">Let's Discuss Your Vision</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-healthcare-teal transition-all group-hover:bg-healthcare-teal group-hover:text-white">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-2">Direct Email</p>
                      <a href="mailto:matt@example.com" className="text-white font-bold text-base sm:text-lg break-all transition-colors underline decoration-white/20 underline-offset-4 hover:text-healthcare-teal">
                        matt@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-healthcare-teal transition-all group-hover:bg-healthcare-teal group-hover:text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-2">Office Location</p>
                      <p className="text-white font-bold text-base sm:text-lg">
                        123 Healthcare Way, Suite 500<br />
                        Metro City, State 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-healthcare-teal transition-all group-hover:bg-healthcare-teal group-hover:text-white">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-2">LinkedIn</p>
                      <a href="#" className="text-white font-bold text-lg hover:text-healthcare-teal transition-colors flex items-center">
                        linkedin.com/in/matt
                        <ExternalLink size={16} className="ml-2 opacity-50" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-16 pt-10 border-t border-white/10 flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-healthcare-teal font-display font-bold text-xl shadow-inner">M</div>
                <div>
                  <p className="text-white font-bold tracking-tight">Matt</p>
                  <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em]">Strategic Leadership</p>
                </div>
              </div>
            </div>
            
            {/* Right Side: Form Fields (Col 7) */}
            <div className="lg:col-span-7 p-10 md:p-16 lg:p-20 bg-white">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="text" id="name" required className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-healthcare-teal outline-none transition-colors text-healthcare-blue font-semibold placeholder-transparent" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-healthcare-blue/40 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-300 peer-focus:-top-4 peer-focus:text-healthcare-teal peer-focus:text-[10px] transition-all cursor-text">Full Name</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="org" className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-healthcare-teal outline-none transition-colors text-healthcare-blue font-semibold placeholder-transparent" placeholder="Org" />
                    <label htmlFor="org" className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-healthcare-blue/40 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-300 peer-focus:-top-4 peer-focus:text-healthcare-teal peer-focus:text-[10px] transition-all cursor-text">Organization</label>
                  </div>
                </div>
                
                <div className="relative">
                  <input type="email" id="email" required className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-healthcare-teal outline-none transition-colors text-healthcare-blue font-semibold placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-healthcare-blue/40 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-300 peer-focus:-top-4 peer-focus:text-healthcare-teal peer-focus:text-[10px] transition-all cursor-text">Work Email</label>
                </div>

                <div className="relative">
                  <textarea id="message" rows={3} className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 focus:border-healthcare-teal outline-none transition-colors text-healthcare-blue font-semibold placeholder-transparent resize-none" placeholder="Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-healthcare-blue/40 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-300 peer-focus:-top-4 peer-focus:text-healthcare-teal peer-focus:text-[10px] transition-all cursor-text">Inquiry Details</label>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-healthcare-blue text-white rounded-2xl font-bold text-lg hover:bg-healthcare-teal shadow-2xl hover:shadow-healthcare-teal/40 transition-all mt-6 flex items-center justify-center space-x-3 group/btn"
                >
                  <span>Send Inquiry</span>
                  <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="flex flex-col items-center md:items-start space-y-5">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-healthcare-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <span className="font-display font-bold text-2xl text-healthcare-blue tracking-tight">MATT</span>
              </div>
              <p className="text-base text-healthcare-slate/50 max-w-sm text-center md:text-left leading-relaxed font-medium">
                Strategic leadership in clinical program development and enterprise healthcare growth.
              </p>
            </div>
            
            <div className="flex space-x-16">
              <div className="flex flex-col space-y-4">
                <p className="text-[10px] font-bold text-healthcare-blue uppercase tracking-[0.3em] mb-3 opacity-50">Navigation</p>
                <a href="#about" className="text-sm font-bold text-healthcare-slate/60 hover:text-healthcare-teal transition-colors">About</a>
                <a href="#services" className="text-sm font-bold text-healthcare-slate/60 hover:text-healthcare-teal transition-colors">Services</a>
                <a href="#experience" className="text-sm font-bold text-healthcare-slate/60 hover:text-healthcare-teal transition-colors">Experience</a>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-[10px] font-bold text-healthcare-blue uppercase tracking-[0.3em] mb-3 opacity-50">Connect</p>
                <a href="#" className="text-sm font-bold text-healthcare-slate/60 hover:text-healthcare-teal transition-colors">LinkedIn</a>
                <a href="mailto:matt@example.com" className="text-sm font-bold text-healthcare-slate/60 hover:text-healthcare-teal transition-colors">Email</a>
                <a href="#contact" className="text-sm font-bold text-healthcare-slate/60 hover:text-healthcare-teal transition-colors">Consultation</a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-bold text-healthcare-blue/30 tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Matt. Executive Healthcare Portfolio.
            </div>
            <div className="flex items-center space-x-2 text-[10px] font-bold text-healthcare-blue/30 tracking-widest uppercase">
              <span>Powered by</span>
              <a 
                href="https://www.nexaforgetech.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-black text-healthcare-blue/60 hover:text-healthcare-teal flex items-center transition-all group"
              >
                Nexaforge Technologies
                <ExternalLink size={12} className="ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
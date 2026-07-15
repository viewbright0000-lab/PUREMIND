import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Smartphone, 
  Mic, 
  Video, 
  Settings, 
  Figma, 
  ShieldCheck, 
  Cloud, 
  Activity 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BRIGHT VIEW TECH SOLUTIONS",
    "email": "viewbright0000@gmail.com",
    "telephone": "+91 8714449047",
    "address": { "@type": "PostalAddress", "addressCountry": "IN" },
    "url": "https://brightviewtech.com"
  };

  const services = [
    { icon: Smartphone, title: 'Mobile App Development' },
    { icon: Mic, title: 'Voice Communication Platforms' },
    { icon: Video, title: 'Video Communication Solutions' },
    { icon: Settings, title: 'Application Management and Maintenance' },
    { icon: Figma, title: 'User Experience Design' },
    { icon: ShieldCheck, title: 'Platform Support and Quality Assurance' },
    { icon: Cloud, title: 'Cloud-Based Application Solutions' },
    { icon: Activity, title: 'Application Security and Performance Monitoring' },
  ];

  const commitments = [
    'User-friendly digital experiences',
    'Reliable voice and communication technology',
    'Responsible platform management',
    'Privacy-focused development practices',
    'Continuous application maintenance',
    'Clear community and usage guidelines',
  ];

  return (
    <>
      <Helmet>
        <title>BRIGHT VIEW TECH SOLUTIONS | Mobile Apps and Communication Platforms</title>
        <meta name="description" content="BRIGHT VIEW TECH SOLUTIONS develops and manages mobile applications, voice communication platforms, and digital interaction services for people to connect and communicate." />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)' }}></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              India-based Technology Company
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Technology That Brings People Together
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              BRIGHT VIEW TECH SOLUTIONS develops and manages digital communication platforms designed to help people connect, communicate, and access supportive conversations through secure and user-friendly mobile applications.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white h-14 px-8 text-base">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-primary bg-white hover:bg-gray-100 hover:text-primary h-14 px-8 text-base">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">About Us</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary leading-tight md:leading-snug mb-8">
              BRIGHT VIEW TECH SOLUTIONS is an India-based technology company focused on developing mobile applications and digital communication platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our applications provide voice-based and digital interaction experiences that allow users to connect with independent consultants and conversation partners from the comfort of their own space. We focus on reliable technology, simple user experiences, privacy, platform safety, and continuous product improvement.
            </p>
            <div className="mt-10">
              <Link href="/about" className="text-accent font-medium hover:underline inline-flex items-center gap-2 group">
                Learn more about our company 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary">Comprehensive Tech Solutions</h3>
            </div>
            <Link href="/services">
              <Button variant="outline" className="border-gray-300 text-primary hover:bg-gray-100">
                View All Services
              </Button>
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-lg text-primary leading-snug">{service.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Commitment & Disclaimer */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Our Commitment</h2>
              <ul className="space-y-4">
                {commitments.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span className="text-lg text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <ShieldCheck size={32} className="text-primary mb-6" />
              <h3 className="text-xl font-bold text-primary mb-4">Important Notice</h3>
              <p className="text-gray-600 leading-relaxed">
                Our applications provide communication, companionship, general guidance, and wellness-oriented conversation services. They are not emergency services and do not replace professional medical, psychological, legal, financial, or therapeutic advice. Users should seek qualified professionals for matters requiring licensed professional assistance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Smartphone, Mic, Video, Settings, 
  Figma, ShieldCheck, Cloud, Activity 
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "We design, build, and deploy native and cross-platform mobile applications optimized for performance, security, and seamless user interaction across various Android devices."
  },
  {
    icon: Mic,
    title: "Voice Communication Platforms",
    desc: "We develop reliable, low-latency VoIP (Voice over Internet Protocol) and audio-routing solutions that allow users to connect seamlessly over varied network conditions."
  },
  {
    icon: Video,
    title: "Video Communication Solutions",
    desc: "Our technology stack includes scalable video interaction capabilities for secure, high-quality visual communication within our proprietary applications."
  },
  {
    icon: Settings,
    title: "Application Management and Maintenance",
    desc: "We provide ongoing technical support, bug fixing, server maintenance, and regular feature updates to ensure our existing portfolio of applications continues to operate efficiently."
  },
  {
    icon: Figma,
    title: "User Experience (UX) Design",
    desc: "Our design team creates intuitive, accessible, and engaging interfaces that simplify complex interactions and make communication tools accessible to a broad audience."
  },
  {
    icon: ShieldCheck,
    title: "Platform Support and Quality Assurance",
    desc: "We implement rigorous testing protocols and dedicated customer support channels to resolve technical issues promptly and maintain high standards of platform quality."
  },
  {
    icon: Cloud,
    title: "Cloud-Based Application Solutions",
    desc: "We utilize scalable cloud infrastructure to host our applications, ensuring data reliability, flexible storage, and uninterrupted service availability during peak usage."
  },
  {
    icon: Activity,
    title: "Application Security and Performance Monitoring",
    desc: "We continuously monitor app performance and deploy modern security practices to protect user data and ensure secure communication channels."
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | BRIGHT VIEW TECH SOLUTIONS</title>
        <meta name="description" content="Explore the technology services provided by BRIGHT VIEW TECH SOLUTIONS, including mobile app development, voice platforms, and cloud solutions." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 md:pt-32 md:pb-24 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive technology solutions powering the next generation of digital communication platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

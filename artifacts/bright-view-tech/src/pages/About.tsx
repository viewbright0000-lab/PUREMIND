import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | BRIGHT VIEW TECH SOLUTIONS</title>
        <meta name="description" content="Learn about BRIGHT VIEW TECH SOLUTIONS, an India-based technology company focused on developing reliable mobile applications and digital communication platforms." />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We build technology that helps people connect, communicate, and share meaningful interactions in a secure digital environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg md:prose-xl max-w-none prose-headings:text-primary prose-a:text-accent prose-p:text-gray-600 mb-20"
          >
            <p>
              <strong>BRIGHT VIEW TECH SOLUTIONS</strong> is an India-based technology company focused on developing mobile applications and digital communication platforms. Our applications provide voice-based and digital interaction experiences that allow users to connect with independent consultants and conversation partners from the comfort of their own space. We focus on reliable technology, simple user experiences, privacy, platform safety, and continuous product improvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">M</span>
                Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To create reliable, accessible, and user-friendly digital platforms that facilitate meaningful communication and connect people through innovative technology.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">V</span>
                Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted developer of communication applications that improve how individuals interact, seek guidance, and build communities in the digital space.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "User-Centric Design", desc: "We build intuitive applications that prioritize the end-user experience." },
                { title: "Reliability", desc: "We ensure our platforms maintain high uptime and stable performance." },
                { title: "Privacy & Security", desc: "We implement robust measures to protect user data and maintain confidentiality." },
                { title: "Continuous Improvement", desc: "We regularly update our software to meet evolving user needs and technological standards." },
                { title: "Transparency", desc: "We maintain clear policies and open communication regarding how our services operate." },
                { title: "Digital Responsibility", desc: "We promote safe platform usage through clear community guidelines." }
              ].map((value, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" className="text-accent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-accent">Important Service Clarification</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                BRIGHT VIEW TECH SOLUTIONS is a technology provider. We develop, maintain, and manage the digital infrastructure (mobile applications, voice platforms) that enables communication.
              </p>
              <p>
                The individuals providing conversation services, advice, or guidance through our applications operate as independent contractors or platform users, not as direct employees of BRIGHT VIEW TECH SOLUTIONS. We provide the platform for connection, while the specific content of interactions is determined by the users.
              </p>
              <p>
                Our services are intended for entertainment, companionship, and general communication purposes only. They are not a substitute for professional services in any field.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

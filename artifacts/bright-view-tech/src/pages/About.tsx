import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

const values = [
  { title: 'Empathy First',         desc: 'Every product is built around the user\'s emotional experience and well-being.' },
  { title: 'Privacy & Safety',      desc: 'Conversations stay private. We implement robust protections for all user data.' },
  { title: 'Accessibility',         desc: 'Simple interfaces designed so anyone can connect without technical barriers.' },
  { title: 'Reliability',           desc: 'Our platforms are maintained continuously so you can reach out whenever you need.' },
  { title: 'Transparency',          desc: 'Clear policies and open communication about how our services operate.' },
  { title: 'Continuous Care',       desc: 'We regularly improve our apps based on user needs and feedback.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | BRIGHT VIEW TECH SOLUTIONS</title>
        <meta name="description" content="BRIGHT VIEW TECH SOLUTIONS is an India-based company offering voice-based wellness apps — Bestie Talk, New Talk, and Pure Minds — to help people relax and reduce stress." />
      </Helmet>

      {/* Header */}
      <section className="bg-primary pt-24 pb-16 md:pt-32 md:pb-24 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A small, purpose-driven company helping people find peace, reduce stress, and feel supported — through the power of voice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="prose prose-lg md:prose-xl max-w-none prose-headings:text-primary prose-a:text-accent prose-p:text-gray-600 mb-16">
            <p>
              <strong>BRIGHT VIEW TECH SOLUTIONS</strong> is an India-based company that develops and manages voice-based wellness applications. Our apps — <strong>Bestie Talk</strong>, <strong>New Talk</strong>, and <strong>Pure Minds</strong> — connect individuals with trained conversation consultants, offering guidance and support for relaxation, stress reduction, and overall well-being.
            </p>
            <p>
              We are a small company, and that is our strength. Every decision we make is guided by one question: does this genuinely help our users feel better? We focus on building reliable, private, and easy-to-use platforms so that anyone — anywhere — can access a supportive voice when they need it most.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">M</span>
                Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, voice-based mental wellness support that helps people relax their minds, reduce stress, and feel heard — through simple, trustworthy mobile applications.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">V</span>
                Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted space where anyone can reach out, speak freely, and find the emotional support they need — at any time, from anywhere in the world.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl font-extrabold text-primary mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" className="text-accent w-6 h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Clarification box */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-primary text-white rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-accent">Important Service Clarification</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                BRIGHT VIEW TECH SOLUTIONS develops and manages the digital platforms (Bestie Talk, New Talk, Pure Minds) that enable voice-based wellness conversations.
              </p>
              <p>
                The individuals providing conversation and guidance through our applications operate as independent consultants or platform users, not as employees of BRIGHT VIEW TECH SOLUTIONS. We provide the platform; the content of each interaction is shaped by the users themselves.
              </p>
              <p>
                Our services are intended for relaxation, companionship, and general well-being support only. They are not a substitute for professional medical or clinical mental health services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mic, ShieldCheck, Clock, Heart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } }
};

const products = [
  {
    initials: 'BT',
    name: 'Bestie Talk',
    subtitle: 'Your voice, your safe space.',
    description:
      'Bestie Talk connects you with warm, supportive conversation partners who listen without judgement. Whether you\'re feeling overwhelmed, lonely, or just need someone to talk to, Bestie Talk is here — like a trusted friend, available whenever you need them.',
    features: [
      { icon: Mic,          label: 'Friendly one-on-one voice sessions' },
      { icon: Heart,        label: 'Emotional support & stress relief' },
      { icon: Clock,        label: 'Flexible, on-demand availability' },
      { icon: ShieldCheck,  label: 'Safe, private conversations' },
    ],
    cardClass: 'from-blue-50 to-blue-100 border-blue-200',
    badgeClass: 'bg-blue-100 text-blue-700',
    iconClass: 'from-blue-500 to-blue-700',
    dotClass: 'bg-blue-500',
  },
  {
    initials: 'NT',
    name: 'New Talk',
    subtitle: 'A fresh perspective awaits.',
    description:
      'New Talk offers guided voice conversations focused on clarity, self-discovery, and mental refreshment. Through structured sessions with trained consultants, you can process your thoughts, gain new insights, and emerge from each conversation feeling lighter and renewed.',
    features: [
      { icon: Mic,          label: 'Guided relaxation conversations' },
      { icon: Heart,        label: 'Clarity & self-discovery sessions' },
      { icon: Clock,        label: 'Trained wellness consultants' },
      { icon: ShieldCheck,  label: 'Calm, structured voice experience' },
    ],
    cardClass: 'from-emerald-50 to-emerald-100 border-emerald-200',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    iconClass: 'from-emerald-500 to-emerald-700',
    dotClass: 'bg-emerald-500',
  },
  {
    initials: 'PM',
    name: 'Pure Minds',
    subtitle: 'Calm your mind. Restore your peace.',
    description:
      'Pure Minds is a sanctuary for your mental well-being. With a focus on deep relaxation and mindfulness-oriented conversation, it helps you achieve a calmer, clearer state of mind. Each session is designed to reduce stress and support your overall emotional well-being.',
    features: [
      { icon: Mic,          label: 'Mindfulness & relaxation focus' },
      { icon: Heart,        label: 'Stress reduction voice guidance' },
      { icon: Clock,        label: 'Well-being enhancement sessions' },
      { icon: ShieldCheck,  label: 'Calm, distraction-free environment' },
    ],
    cardClass: 'from-violet-50 to-violet-100 border-violet-200',
    badgeClass: 'bg-violet-100 text-violet-700',
    iconClass: 'from-violet-500 to-violet-700',
    dotClass: 'bg-violet-500',
  },
];

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Our Apps | BRIGHT VIEW TECH SOLUTIONS</title>
        <meta name="description" content="Explore Bestie Talk, New Talk, and Pure Minds — voice-based wellness apps by BRIGHT VIEW TECH SOLUTIONS, helping you relax, reduce stress, and feel supported." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 md:pt-32 md:pb-24 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Our Products</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Three Apps. One Purpose.</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Virtual voice-based wellness services designed to help you relax your mind, reduce stress, and enhance your overall well-being — through conversation with trained consultants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-12">
            {products.map((p, idx) => (
              <motion.div key={p.name} variants={fadeUp}
                className={`rounded-3xl bg-gradient-to-br ${p.cardClass} border p-8 md:p-12`}>
                <div className="flex flex-col md:flex-row gap-10">
                  {/* Left */}
                  <div className="md:w-1/2">
                    <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${p.badgeClass} inline-block mb-6`}>
                      Voice Wellness App
                    </span>
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${p.iconClass} flex items-center justify-center text-white font-extrabold text-2xl mb-6 shadow-xl`}>
                      {p.initials}
                    </div>
                    <h2 className="text-3xl font-extrabold text-primary mb-2">{p.name}</h2>
                    <p className="text-sm font-semibold text-gray-500 italic mb-5">{p.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{p.description}</p>
                  </div>
                  {/* Right */}
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-5">What You Get</h3>
                    <div className="space-y-4">
                      {p.features.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-4 bg-white/70 rounded-xl p-4 border border-white/60 backdrop-blur-sm">
                          <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Icon size={18} className="text-gray-500" strokeWidth={1.5} />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Disclaimer */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-12 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex gap-4 items-start shadow-sm">
            <ShieldCheck size={24} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-bold text-primary mb-2">Important Notice</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our applications provide voice-based companionship, general guidance, and wellness-oriented conversation. They are <strong>not</strong> emergency services and do not replace professional medical, psychological, legal, or therapeutic care. For clinical mental health concerns, please consult a licensed professional. If you are in crisis, contact a local emergency service immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

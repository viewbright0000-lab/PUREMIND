import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ShieldCheck, Heart, Mic, Clock, Star, Users, Download, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const products = [
  {
    initials: 'BT',
    name: 'Bestie Talk',
    tagline: 'Talk like you would with a trusted friend.',
    desc: 'Connect with warm, supportive conversation partners who listen without judgement — perfect for when you just need someone to talk to and unwind.',
    features: ['Friendly one-on-one voice sessions', 'Emotional support & stress relief', 'On-demand availability', 'Safe, private conversations'],
    accent: '#3B82F6',
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-100 text-blue-700',
    dotColor: 'bg-blue-500',
    iconBg: 'from-blue-500 to-blue-700',
    btnBg: 'bg-blue-600 hover:bg-blue-700 text-white',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.viewbright.customer&pcampaignid=web_share',
  },
  {
    initials: 'NT',
    name: 'New Talk',
    tagline: 'Step into a fresh perspective.',
    desc: 'Guided voice conversations focused on clarity, self-discovery, and mental refreshment — helping you process your thoughts and emerge feeling renewed.',
    features: ['Guided relaxation conversations', 'Clarity & self-discovery sessions', 'Trained wellness consultants', 'Calm, structured voice experience'],
    accent: '#10B981',
    bg: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-200',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    dotColor: 'bg-emerald-500',
    iconBg: 'from-emerald-500 to-emerald-700',
    btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.viewbrightnewtalk.customer&pcampaignid=web_share',
  },
  {
    initials: 'PM',
    name: 'Pure Minds',
    tagline: 'A sanctuary for your mental well-being.',
    desc: 'Deep relaxation, mindfulness-oriented conversations, and stress reduction — helping you achieve a calmer, clearer state of mind from your own space.',
    features: ['Mindfulness & relaxation focus', 'Stress reduction voice guidance', 'Well-being enhancement sessions', 'Calm, distraction-free environment'],
    accent: '#8B5CF6',
    bg: 'from-violet-50 to-violet-100',
    border: 'border-violet-200',
    badgeBg: 'bg-violet-100 text-violet-700',
    dotColor: 'bg-violet-500',
    iconBg: 'from-violet-500 to-violet-700',
    btnBg: 'bg-violet-600 hover:bg-violet-700 text-white',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.viewbrightpuremind.customer&pcampaignid=web_share',
  },
];

const upcomingProducts = [
  {
    initials: 'CM',
    name: 'Crushmate',
    tagline: 'Companionship & conversational wellness.',
    desc: 'An exciting new interactive social companionship app currently under development. Stay tuned for launch on Google Play Store!',
    features: ['Social voice companionship', 'Friendly audio spaces', 'Supportive listening community'],
    bg: 'from-rose-50 to-pink-100',
    border: 'border-rose-200',
    badgeBg: 'bg-rose-100 text-rose-700',
    dotColor: 'bg-rose-500',
    iconBg: 'from-rose-500 to-pink-600',
  },
  {
    initials: 'HM',
    name: 'Hellomate',
    tagline: 'Say hello to daily positivity and care.',
    desc: 'Your friendly daily wellness companion designed to bring joy, stress-free check-ins, and warmth. In active development.',
    features: ['Daily wellness check-ins', 'Warm conversation partners', 'Gentle mood boosters'],
    bg: 'from-amber-50 to-orange-100',
    border: 'border-amber-200',
    badgeBg: 'bg-amber-100 text-amber-800',
    dotColor: 'bg-amber-500',
    iconBg: 'from-amber-500 to-orange-600',
  },
];

const steps = [
  { num: '1', title: 'Download the App', desc: 'Install Bestie Talk, New Talk, or Pure Minds from the Google Play Store.' },
  { num: '2', title: 'Create an Account', desc: 'Register with your phone number. Your details stay private and secure.' },
  { num: '3', title: 'Choose a Consultant', desc: 'Browse available wellness consultants and pick the right fit for you.' },
  { num: '4', title: 'Start Your Session', desc: 'Connect via private voice call and begin your wellness conversation.' },
];

const commitments = [
  'User-friendly, distraction-free app experiences',
  'Reliable voice connectivity across varied networks',
  'Responsible and transparent platform management',
  'Privacy-first — your conversations are yours',
  'Continuous app improvements based on user feedback',
  'Clear community guidelines for a safe experience',
];

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BRIGHT VIEW TECH SOLUTIONS",
    "email": "info@pureminds.in",
    "telephone": "+91 8714449047",
    "address": { "@type": "PostalAddress", "addressCountry": "IN" },
  };

  return (
    <>
      <Helmet>
        <title>BRIGHT VIEW TECH SOLUTIONS | Wellness Voice Applications</title>
        <meta name="description" content="BRIGHT VIEW TECH SOLUTIONS offers voice-based wellness applications — Bestie Talk, New Talk, and Pure Minds — helping you relax, reduce stress, and enhance well-being." />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-primary text-white py-28 md:py-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.5) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)' }} />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              India-based Wellness App Company
            </motion.div>
            <motion.h1 variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08]">
              Your Mind Deserves{' '}
              <span className="text-accent">Peace &amp; Support</span>
            </motion.h1>
            <motion.p variants={fadeUp}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              BRIGHT VIEW TECH SOLUTIONS offers voice-based wellness applications that connect you with trained consultants — helping you relax, reduce stress, and enhance your overall well-being, from the comfort of your own space.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-base font-semibold">
                  Explore Our Apps
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline"
                  className="border-white/30 text-primary bg-white hover:bg-gray-100 hover:text-primary h-14 px-8 text-base font-semibold">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center">
            <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">About Us</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-snug mb-6">
              A small company with a big purpose.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              BRIGHT VIEW TECH SOLUTIONS is an India-based company that develops and manages voice-based wellness applications. We help individuals connect with supportive conversation partners whenever they need to unwind, talk, or seek guidance.
            </p>
            <div className="mt-8">
              <Link href="/about" className="text-accent font-semibold hover:underline inline-flex items-center gap-2 group">
                Learn more about us <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Heart, label: 'Wellness Focused' },
              { icon: Mic, label: 'Voice-Based' },
              { icon: ShieldCheck, label: 'Private & Safe' },
              { icon: Users, label: '3 Apps Available' },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex flex-col items-center gap-3 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-gray-700 text-center">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Our Products</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Three Apps. One Purpose.</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Each app is a virtual voice-based wellness service — helping you relax your mind, reduce stress, and enhance your well-being through conversation with trained consultants.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <motion.div key={p.name} variants={fadeUp}
                className={`rounded-3xl p-8 bg-gradient-to-br ${p.bg} border ${p.border} hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between`}>
                <div>
                  <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${p.badgeBg} inline-block mb-6`}>
                    Voice Wellness
                  </span>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.iconBg} flex items-center justify-center text-white font-extrabold text-xl mb-6 shadow-lg`}>
                    {p.initials}
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary mb-2">{p.name}</h3>
                  <p className="text-sm font-semibold text-gray-500 italic mb-4">{p.tagline}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                        <span className={`w-2 h-2 rounded-full ${p.dotColor} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={p.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm shadow-md transition-all duration-200 ${p.btnBg}`}
                >
                  <Download size={18} />
                  <span>Download on Play Store</span>
                  <ExternalLink size={14} className="opacity-75" />
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* ── UPCOMING APPS UNDER DEVELOPMENT ── */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 tracking-wider uppercase mb-3">
                <Sparkles size={14} /> Under Development
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary">New Apps Coming Soon</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                We are actively developing new companionship and voice wellness experiences to enrich your everyday life.
              </p>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {upcomingProducts.map((p) => (
                <motion.div key={p.name} variants={fadeUp}
                  className={`rounded-3xl p-8 bg-gradient-to-br ${p.bg} border ${p.border} flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/80 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full text-gray-600 border border-gray-200">
                      In Development
                    </span>
                  </div>
                  <div>
                    <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${p.badgeBg} inline-block mb-6`}>
                      Coming Soon
                    </span>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.iconBg} flex items-center justify-center text-white font-extrabold text-xl mb-6 shadow-lg`}>
                      {p.initials}
                    </div>
                    <h4 className="text-2xl font-extrabold text-primary mb-2">{p.name}</h4>
                    <p className="text-sm font-semibold text-gray-500 italic mb-4">{p.tagline}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{p.desc}</p>
                    <ul className="space-y-2.5 mb-8">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                          <span className={`w-2 h-2 rounded-full ${p.dotColor} flex-shrink-0`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium text-sm bg-white/60 text-gray-500 border border-gray-200 cursor-not-allowed">
                    <Clock size={16} />
                    <span>Launching Soon on Google Play</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
            <Star size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-primary">Important:</strong> Our applications provide voice-based companionship, general guidance, and wellness-oriented conversation. They are not emergency services and do not replace professional medical or therapeutic care.
            </p>
          </motion.div>

          <div className="mt-8 text-center">
            <Link href="/products">
              <Button variant="outline" className="border-gray-300 text-primary hover:bg-gray-100">
                Learn More About Our Apps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Simple. Private. Supportive.</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <motion.div key={s.num} variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-5">
                  {s.num}
                </div>
                <h4 className="font-bold text-white mb-2">{s.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMMITMENT ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Our Commitment</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8">What We Stand For</h2>
              <ul className="space-y-5">
                {commitments.map((c, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-gray-700">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-l-2xl" />
              <ShieldCheck size={32} className="text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-primary mb-4">Important Notice</h3>
              <p className="text-gray-600 leading-relaxed">
                Our applications provide voice-based companionship, general guidance, and wellness-oriented conversation services. They are not emergency services and do not replace professional medical, psychological, legal, financial, or therapeutic advice. If you are in crisis, please contact a local emergency service or certified mental health professional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

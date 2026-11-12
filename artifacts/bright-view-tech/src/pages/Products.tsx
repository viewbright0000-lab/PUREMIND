import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mic, ShieldCheck, Clock, Heart, Download, ExternalLink, Sparkles } from 'lucide-react';

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
    btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.viewbright.customer&pcampaignid=web_share',
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
    btnClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.viewbrightnewtalk.customer&pcampaignid=web_share',
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
    btnClass: 'bg-violet-600 hover:bg-violet-700 text-white',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.viewbrightpuremind.customer&pcampaignid=web_share',
  },
];

const upcomingProducts = [
  {
    initials: 'CM',
    name: 'Crushmate',
    subtitle: 'Companionship, care, and social warmth.',
    description:
      'Crushmate is designed to make meaningful social conversations effortless and welcoming. Experience genuine human connection through real-time audio rooms and safe spaces. Currently under active development.',
    features: [
      { icon: Heart,        label: 'Supportive social listening spaces' },
      { icon: Mic,          label: 'Real-time conversational audio' },
      { icon: ShieldCheck,  label: 'Protected, safe community guidelines' },
      { icon: Clock,        label: 'Coming soon to Google Play Store' },
    ],
    cardClass: 'from-rose-50 to-pink-100 border-rose-200',
    badgeClass: 'bg-rose-100 text-rose-700',
    iconClass: 'from-rose-500 to-pink-600',
    dotClass: 'bg-rose-500',
  },
  {
    initials: 'HM',
    name: 'Hellomate',
    subtitle: 'Say hello to brighter, uplifting days.',
    description:
      'Hellomate is your daily companion app focused on stress-free check-ins, positive audio conversations, and uplifting moments to help you navigate everyday life with a smile. Launching soon.',
    features: [
      { icon: Mic,          label: 'Everyday friendly voice check-ins' },
      { icon: Heart,        label: 'Positive mood & emotional boosts' },
      { icon: ShieldCheck,  label: 'Private, secure voice interaction' },
      { icon: Clock,        label: 'In active development' },
    ],
    cardClass: 'from-amber-50 to-orange-100 border-amber-200',
    badgeClass: 'bg-amber-100 text-amber-800',
    iconClass: 'from-amber-500 to-orange-600',
    dotClass: 'bg-amber-500',
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
                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${p.badgeClass} inline-block mb-6`}>
                        Voice Wellness App
                      </span>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${p.iconClass} flex items-center justify-center text-white font-extrabold text-2xl mb-6 shadow-xl`}>
                        {p.initials}
                      </div>
                      <h2 className="text-3xl font-extrabold text-primary mb-2">{p.name}</h2>
                      <p className="text-sm font-semibold text-gray-500 italic mb-5">{p.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{p.description}</p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={p.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all duration-200 ${p.btnClass}`}
                      >
                        <Download size={18} />
                        <span>Download on Google Play</span>
                        <ExternalLink size={14} className="opacity-75" />
                      </a>
                    </div>
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

          {/* ── UPCOMING APPS UNDER DEVELOPMENT ── */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 tracking-wider uppercase mb-3">
                <Sparkles size={14} /> Under Development
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">New Apps in the Pipeline</h2>
              <p className="text-base text-gray-600 mt-3 max-w-xl mx-auto">
                Discover the upcoming companion experiences currently being designed and crafted by our team.
              </p>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="flex flex-col gap-10">
              {upcomingProducts.map((p) => (
                <motion.div key={p.name} variants={fadeUp}
                  className={`rounded-3xl bg-gradient-to-br ${p.cardClass} border p-8 md:p-12 relative overflow-hidden`}>
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-700 border border-gray-200">
                      Coming Soon
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-10">
                    {/* Left */}
                    <div className="md:w-1/2 flex flex-col justify-between">
                      <div>
                        <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${p.badgeClass} inline-block mb-6`}>
                          Under Development
                        </span>
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${p.iconClass} flex items-center justify-center text-white font-extrabold text-2xl mb-6 shadow-xl`}>
                          {p.initials}
                        </div>
                        <h3 className="text-3xl font-extrabold text-primary mb-2">{p.name}</h3>
                        <p className="text-sm font-semibold text-gray-500 italic mb-5">{p.subtitle}</p>
                        <p className="text-gray-600 leading-relaxed mb-6">{p.description}</p>
                      </div>

                      <div className="pt-2">
                        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-white/70 text-gray-600 border border-gray-200 cursor-not-allowed">
                          <Clock size={16} />
                          <span>Launching Soon on Google Play</span>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-5">Highlights</h4>
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
          </div>

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

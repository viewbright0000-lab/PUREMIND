import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, HeadphonesIcon } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | BRIGHT VIEW TECH SOLUTIONS</title>
        <meta name="description" content="Contact BRIGHT VIEW TECH SOLUTIONS for business enquiries, application support, or privacy questions." />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are here to help. Get in touch with our support and business teams.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6"
            >
              <div className="font-bold text-xl text-primary border-b border-gray-100 pb-4">
                Company Information
              </div>

              <a href="mailto:info@pureminds.in" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Mail className="text-accent group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email Address</p>
                  <p className="text-gray-900 font-medium group-hover:text-accent transition-colors">info@pureminds.in</p>
                </div>
              </a>

              <a href="tel:+918714449047" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Phone className="text-accent group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Phone Number</p>
                  <p className="text-gray-900 font-medium group-hover:text-accent transition-colors">+91 8714449047</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                  <p className="text-gray-900 font-medium">India</p>
                </div>
              </div>
            </motion.div>

            {/* Help & Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6"
            >
              <div className="font-bold text-xl text-primary border-b border-gray-100 pb-4">
                Help &amp; Support
              </div>

              <a href="mailto:info@pureminds.in" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <HeadphonesIcon className="text-accent group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Support Email</p>
                  <p className="text-gray-900 font-medium group-hover:text-accent transition-colors">info@pureminds.in</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Response Time</p>
                  <p className="text-gray-900 font-medium">Within 1–2 business days</p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
                For support queries, please include your registered email or phone number, device model, and a brief description of the issue. Do not share passwords, OTPs, or banking details.
              </div>
            </motion.div>

          </div>

          {/* Support Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 bg-primary text-white rounded-2xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div>
              <h3 className="font-semibold text-accent mb-2">Business Enquiries</h3>
              <p className="text-sm text-gray-300">Partnerships, B2B services, and vendor relations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-2">Application Support</h3>
              <p className="text-sm text-gray-300">Technical issues, account queries, and bug reports.</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-2">Privacy Enquiries</h3>
              <p className="text-sm text-gray-300">Data deletion requests and privacy concerns.</p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function CancellationPolicy() {
  return (
    <>
      <Helmet>
        <title>Cancellation Policy | BRIGHT VIEW TECH SOLUTIONS</title>
        <meta name="description" content="Cancellation Policy for BRIGHT VIEW TECH SOLUTIONS applications and wellness sessions." />
      </Helmet>

      <section className="bg-primary pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Cancellation Policy</h1>
            <p className="text-gray-300">Effective Date: 15 July 2026</p>
            <p className="text-gray-300">Last Updated: 15 July 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-accent">
            <p><strong>BRIGHT VIEW TECH SOLUTIONS</strong> ("Company," "we," "us," or "our") offers voice-based wellness applications that connect individuals with supportive conversation services. This Cancellation Policy explains how scheduled sessions and subscriptions may be cancelled.</p>

            <h2>1. Cancelling a Scheduled Session</h2>
            <p>You may cancel a scheduled session through the relevant option in the application before the session begins. If the session has not started, any applicable credit or payment treatment will be shown in the application or handled according to the Refund Policy.</p>

            <h2>2. Late Cancellations and Missed Sessions</h2>
            <p>A session cancelled after it has started, cancelled too close to its scheduled start time, or missed without notice may be treated as a used session. Any applicable charge or credit deduction will be displayed before booking where possible.</p>

            <h2>3. Cancellation by a Consultant or the Company</h2>
            <p>If a consultant or the Company cancels a session before it begins, we may provide a replacement session, restore the relevant credits, or offer another appropriate resolution depending on the circumstances.</p>

            <h2>4. Subscription Cancellation</h2>
            <p>You may cancel a recurring subscription through the app store or payment provider used to start it. Cancelling a subscription stops future renewals but normally does not provide a refund for the current billing period. You may continue to use eligible benefits until the end of the paid period unless otherwise stated.</p>

            <h2>5. Wallets and Unused Credits</h2>
            <p>Cancellation of a session or subscription does not automatically cancel or refund unused wallet balances or promotional credits. Requests relating to duplicate charges, failed service delivery, or unauthorised payments are reviewed under the Refund Policy.</p>

            <h2>6. Account Closure</h2>
            <p>You may request account deletion through the application or by contacting us. Closing an account does not automatically reverse completed purchases, and any outstanding refund request will be reviewed separately.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this Cancellation Policy from time to time. The latest version will be published on this page with an updated date.</p>

            <h2>8. Contact Us</h2>
            <p>If you have questions about a cancellation, please contact us at:</p>
            <p>
              <strong>BRIGHT VIEW TECH SOLUTIONS</strong><br />
              Email: <a href="mailto:info@pureminds.in">info@pureminds.in</a><br />
              Phone: <a href="tel:+918714449047">+91 8714449047</a><br />
              Country: India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
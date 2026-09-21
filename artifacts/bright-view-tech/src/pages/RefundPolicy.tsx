import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function RefundPolicy() {
  return (
    <>
      <Helmet>
        <title>Refund Policy | BRIGHT VIEW TECH SOLUTIONS</title>
        <meta name="description" content="Refund Policy for BRIGHT VIEW TECH SOLUTIONS applications and wellness services." />
      </Helmet>

      <section className="bg-primary pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Refund Policy</h1>
            <p className="text-gray-300">Effective Date: 15 July 2026</p>
            <p className="text-gray-300">Last Updated: 15 July 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-accent">
            <p><strong>BRIGHT VIEW TECH SOLUTIONS</strong> ("Company," "we," "us," or "our") provides voice-based wellness applications and related services. This Refund Policy explains how refunds are handled for purchases made through our applications.</p>

            <h2>1. General Refund Terms</h2>
            <p>Payments for sessions, subscriptions, wallet balances, or other digital services are generally final and non-refundable once the service has been delivered or access has been provided, except where a refund is required by applicable law or approved under this policy.</p>

            <h2>2. Eligible Refund Requests</h2>
            <p>You may contact us to request a review of a refund when:</p>
            <ul>
              <li>You were charged more than once for the same purchase.</li>
              <li>A payment was completed but the purchased service or credits were not added to your account.</li>
              <li>A technical problem on our platform prevented a paid session from starting.</li>
              <li>An unauthorised transaction is reported promptly and can be verified by our team.</li>
            </ul>

            <h2>3. Non-Refundable Items</h2>
            <p>Used sessions, completed voice conversations, partially used subscriptions, promotional credits, and virtual credits are not refundable unless required by law or approved after a technical investigation. Fees charged by an app store or payment provider may be subject to that provider's own refund rules.</p>

            <h2>4. How to Request a Refund</h2>
            <p>Send your request to <a href="mailto:info@pureminds.in">info@pureminds.in</a> with your name, registered phone number or email, transaction ID, purchase date, and a brief explanation. Do not send passwords, OTPs, card numbers, UPI PINs, or other confidential payment credentials.</p>

            <h2>5. Review and Processing</h2>
            <p>We normally review complete requests within 7 business days. If approved, the refund is sent to the original payment method where possible. The time taken for the amount to appear depends on the bank, payment gateway, or app store.</p>

            <h2>6. App Store Purchases</h2>
            <p>Purchases made through Google Play or another app store may need to be refunded directly through that store under its policies. We will provide reasonable support for payment or delivery issues that are within our control.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this Refund Policy from time to time. The latest version will be published on this page with an updated date.</p>

            <h2>8. Contact Us</h2>
            <p>If you have questions about a refund, please contact us at:</p>
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
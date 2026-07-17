import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | BRIGHT VIEW TECH SOLUTIONS</title>
        <meta name="description" content="Privacy Policy for BRIGHT VIEW TECH SOLUTIONS applications." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-300">Effective Date: 15 July 2026</p>
            <p className="text-gray-300">Last Updated: 15 July 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-accent">
            {/* This privacy policy is a general template and should be reviewed by a qualified legal professional before production use. */}
            
            <p><strong>BRIGHT VIEW TECH SOLUTIONS</strong> ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications and related services (collectively, the "App").</p>
            
            <p>Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the App.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect via the App includes:</p>
            
            <h3>1.1 Personal Data</h3>
            <p>Demographic and other personally identifiable information that you voluntarily give to us when you register with the App, such as:</p>
            <ul>
              <li>Name or username</li>
              <li>Phone number (for account creation and OTP verification)</li>
              <li>Email address</li>
              <li>Profile picture</li>
              <li>Gender and Age/Date of Birth</li>
            </ul>

            <h3>1.2 Device Data</h3>
            <p>Information our servers automatically collect when you access the App, such as:</p>
            <ul>
              <li>Device ID and model</li>
              <li>Operating system version</li>
              <li>IP address</li>
              <li>App version</li>
              <li>Crash reports and performance data</li>
            </ul>

            <h3>1.3 Communication Data</h3>
            <p>When you use the App to communicate, we process:</p>
            <ul>
              <li>Call logs (duration, time, participant IDs)</li>
              <li>In-app messages and chat history</li>
              <li>Voice data (processed securely for the duration of the call; we do not routinely record calls unless specifically stated and consented to for quality/safety purposes)</li>
            </ul>

            <h3>1.4 Financial Data</h3>
            <p>If you purchase services within the App (e.g., wallet recharges, subscriptions), payment information is processed by third-party payment gateways (like Google Play Billing, Razorpay, etc.). We do not store your full credit card number or UPI PIN on our servers. We only retain transaction records (amount, date, transaction ID) for accounting and support purposes.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for various purposes, including to:</p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Provide and maintain the App's core communication functionality.</li>
              <li>Process transactions and send related information (e.g., purchase confirmations).</li>
              <li>Send you technical notices, updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and customer service requests.</li>
              <li>Monitor and analyze usage and trends to improve the App.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              <li>Enforce our Terms and Conditions and community guidelines.</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations:</p>

            <h3>3.1 With Other Users</h3>
            <p>To provide the service, certain profile information (like your username, profile picture, and online status) will be visible to other users. Your registered phone number is kept private and is not shared with other users during calls.</p>

            <h3>3.2 Third-Party Service Providers</h3>
            <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>

            <h3>3.3 By Law or to Protect Rights</h3>
            <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by applicable law.</p>

            <h3>3.4 Business Transfers</h3>
            <p>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>

            <h2>4. Third-Party Technologies</h2>
            <p>The App may contain links to third-party websites and applications of interest, including advertisements and external services. Once you have used these links to leave the App, any information you provide to these third parties is not covered by this Privacy Policy. We are not responsible for the content or privacy and security practices of any third parties.</p>

            <h2>5. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2>6. Data Retention</h2>
            <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

            <h2>7. Policy for Children</h2>
            <p>We do not knowingly solicit information from or market to children under the age of 18. If you become aware of any data we have collected from children under age 18, please contact us using the contact information provided below. We will take reasonable steps to delete the information as soon as possible.</p>

            <h2>8. Controls for Do-Not-Track Features</h2>
            <p>Most mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>

            <h2>9. Account Deletion</h2>
            <p>You may request the deletion of your account and associated personal data at any time. You can do this through the "Delete Account" option within the App settings or by contacting our support team via email. Upon request, we will deactivate your account and remove your active profile from our systems, though some data may be retained for legal, fraud prevention, or accounting purposes.</p>

            <h2>10. App Permissions</h2>
            <p>Our applications require certain device permissions to function correctly, such as:</p>
            <ul>
              <li><strong>Microphone:</strong> Essential for voice calls and voice messages.</li>
              <li><strong>Storage/Photos:</strong> Required to upload profile pictures or share media.</li>
              <li><strong>Notifications:</strong> To alert you of incoming calls or messages.</li>
              <li><strong>Network Access:</strong> To connect to our servers.</li>
            </ul>
            <p>You can revoke these permissions at any time through your device settings, though doing so may limit your ability to use certain features of the App.</p>

            <h2>11. User Generated Content</h2>
            <p>Information, images, or audio you share in public rooms or group chats within the App can be seen, collected, and used by others. We are not responsible for the personal information you choose to make public in these forums.</p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the App after the date such revised Privacy Policy is posted.</p>

            <h2>13. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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

import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: May 2026
            </p>

            <div className="prose prose-sm prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">1. Introduction</h2>
                <p>
                  PAB ("we", "our", "us") is committed to protecting your personal data and
                  respecting your privacy. This policy explains how we collect, use, and protect
                  your information in accordance with the UK General Data Protection Regulation
                  (UK GDPR) and the Data Protection Act 2018.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">2. Data Controller</h2>
                <p>
                  PAB is the data controller for personal data collected through this website.
                  Contact us at hello@pab.co.uk for any data protection queries.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">3. Information We Collect</h2>
                <p>We may collect the following personal data:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Information provided via our contact form</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                  <li>Usage data (pages visited, time spent, navigation patterns)</li>
                  <li>Cookie data (see our Cookie Policy)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">4. How We Use Your Data</h2>
                <p>We use your personal data for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Responding to your enquiries and providing quotes</li>
                  <li>Delivering our services as agreed</li>
                  <li>Sending relevant communications (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">5. Legal Basis for Processing</h2>
                <p>We process your data based on:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Consent</strong> – for marketing communications and non-essential cookies</li>
                  <li><strong>Contractual necessity</strong> – to provide services you've requested</li>
                  <li><strong>Legitimate interests</strong> – to improve our services and respond to enquiries</li>
                  <li><strong>Legal obligation</strong> – to comply with applicable laws</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">6. Data Retention</h2>
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes
                  for which it was collected. Contact form submissions are retained for 12 months.
                  Client project data is retained for 6 years in accordance with UK tax requirements.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">7. Your Rights</h2>
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Erase your data ("right to be forgotten")</li>
                  <li>Restrict processing</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-2">
                  To exercise these rights, contact us at hello@pab.co.uk. We will respond
                  within one month.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">8. Data Security</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect
                  your personal data, including encryption, access controls, and regular
                  security assessments.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">9. Third-Party Services</h2>
                <p>
                  We may use third-party services (analytics, hosting) that process data on
                  our behalf. All processors are bound by data processing agreements and
                  comply with UK GDPR requirements.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">10. Complaints</h2>
                <p>
                  If you're unhappy with how we handle your data, you have the right to
                  lodge a complaint with the Information Commissioner's Office (ICO) at{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    ico.org.uk
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">11. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. Any changes will be posted
                  on this page with an updated revision date.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

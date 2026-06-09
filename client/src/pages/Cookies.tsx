import { motion } from "framer-motion";

export default function Cookies() {
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
              Cookie Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: May 2026
            </p>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files placed on your device when you visit a website.
                  They help the website remember your preferences and understand how you
                  interact with the site.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">2. How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Essential cookies</strong> – Required for the website to function (e.g., cookie consent preference)</li>
                  <li><strong>Analytics cookies</strong> – Help us understand how visitors use our site (privacy-friendly analytics)</li>
                  <li><strong>Preference cookies</strong> – Remember your settings (e.g., theme preference)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">3. Cookies We Use</h2>
                <div className="overflow-x-auto mt-3">
                  <table className="w-full text-left border border-border rounded-lg overflow-hidden">
                    <thead className="bg-accent">
                      <tr>
                        <th className="px-4 py-2 text-xs font-semibold text-foreground">Cookie</th>
                        <th className="px-4 py-2 text-xs font-semibold text-foreground">Purpose</th>
                        <th className="px-4 py-2 text-xs font-semibold text-foreground">Duration</th>
                        <th className="px-4 py-2 text-xs font-semibold text-foreground">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="px-4 py-2 text-xs">pab-cookie-consent</td>
                        <td className="px-4 py-2 text-xs">Stores your cookie consent preference</td>
                        <td className="px-4 py-2 text-xs">1 year</td>
                        <td className="px-4 py-2 text-xs">Essential</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-2 text-xs">pab-theme</td>
                        <td className="px-4 py-2 text-xs">Remembers your dark/light mode preference</td>
                        <td className="px-4 py-2 text-xs">1 year</td>
                        <td className="px-4 py-2 text-xs">Preference</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-2 text-xs">_umami</td>
                        <td className="px-4 py-2 text-xs">Privacy-friendly analytics (no personal data)</td>
                        <td className="px-4 py-2 text-xs">Session</td>
                        <td className="px-4 py-2 text-xs">Analytics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">4. Managing Cookies</h2>
                <p>
                  You can control cookies through your browser settings. Most browsers allow
                  you to block or delete cookies. However, blocking essential cookies may
                  affect website functionality.
                </p>
                <p className="mt-2">
                  You can also manage your preferences using the cookie consent banner that
                  appears when you first visit our site.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">5. Third-Party Cookies</h2>
                <p>
                  We do not use third-party advertising cookies. Our analytics solution
                  (Umami) is privacy-focused and does not track personal data or use cookies
                  for cross-site tracking.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">6. Updates</h2>
                <p>
                  We may update this Cookie Policy from time to time. Changes will be posted
                  on this page. For questions, contact us at hello@pab.co.uk.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

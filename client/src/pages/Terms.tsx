import { motion } from "framer-motion";

export default function Terms() {
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
              Terms & Conditions
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: May 2026
            </p>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">1. Introduction</h2>
                <p>
                  These terms and conditions govern your use of the PAB website and our services.
                  By accessing this website or engaging our services, you agree to be bound by
                  these terms. PAB is registered in England & Wales.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">2. Services</h2>
                <p>
                  PAB provides IT consultancy, software development, cloud solutions, and related
                  technology services. Specific deliverables, timelines, and costs will be agreed
                  in writing via a separate Statement of Work (SOW) or project proposal.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">3. Quotations & Payment</h2>
                <p>
                  All quotations are valid for 30 days unless otherwise stated. Payment terms
                  are Net 14 days from invoice date. We reserve the right to charge interest on
                  overdue payments at 8% above the Bank of England base rate, in accordance with
                  the Late Payment of Commercial Debts (Interest) Act 1998.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">4. Intellectual Property</h2>
                <p>
                  Upon full payment, all custom-developed code and deliverables become the
                  property of the client. Third-party libraries and frameworks remain subject
                  to their respective licences. PAB retains the right to use general knowledge,
                  techniques, and non-proprietary code in future projects.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">5. Confidentiality</h2>
                <p>
                  Both parties agree to keep confidential any proprietary information shared
                  during the engagement. This obligation survives termination of the agreement
                  for a period of 2 years.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, PAB's total liability shall not exceed
                  the total fees paid by the client for the specific project giving rise to the
                  claim. We shall not be liable for indirect, consequential, or incidental damages.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">7. Termination</h2>
                <p>
                  Either party may terminate the engagement with 14 days' written notice. Upon
                  termination, the client shall pay for all work completed to date. Any deposits
                  paid are non-refundable once work has commenced.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">8. Website Use</h2>
                <p>
                  You may use this website for lawful purposes only. You must not use this
                  website in any way that causes damage, is unlawful, or infringes upon any
                  third party's rights. We reserve the right to restrict access at our discretion.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">9. Governing Law</h2>
                <p>
                  These terms are governed by the laws of England and Wales. Any disputes shall
                  be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">10. Contact</h2>
                <p>
                  For questions about these terms, contact us at hello@pab.co.uk.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

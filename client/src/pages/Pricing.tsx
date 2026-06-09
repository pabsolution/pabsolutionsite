import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for MVPs and small projects",
    price: "2,000",
    period: "from",
    features: [
      "Up to 5 pages or screens",
      "Responsive design",
      "Basic SEO setup",
      "1 month support",
      "Source code ownership",
      "Deployment assistance",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    desc: "For scaling businesses and complex apps",
    price: "8,000",
    period: "from",
    features: [
      "Custom web/mobile application",
      "API development & integrations",
      "Database design & setup",
      "3 months support",
      "CI/CD pipeline setup",
      "Performance optimisation",
      "Security audit included",
      "Dedicated project manager",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "Full-scale platforms and SaaS products",
    price: "Custom",
    period: "",
    features: [
      "Full SaaS/platform development",
      "Microservices architecture",
      "Cloud infrastructure setup",
      "12 months support & SLA",
      "Multi-tenant architecture",
      "Advanced security & compliance",
      "Performance monitoring",
      "Dedicated team allocation",
      "Priority support channel",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeading
            label="Pricing"
            title="Transparent, Fair Pricing"
            description="No hidden fees. No surprises. Choose a plan that fits your needs, or contact us for a custom quote."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className={`glass-card p-6 md:p-8 relative ${
                  plan.popular ? "border-primary/40 ring-1 ring-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>

                <div className="mt-6 mb-6">
                  {plan.period && (
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {plan.period}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && <span className="text-sm text-muted-foreground">£</span>}
                    <span className="text-3xl font-extrabold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-blue-hover"
                      : "border border-border text-foreground hover:bg-accent"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              All prices are in GBP and exclude VAT. Payment plans available for
              projects over £5,000. Every project includes a free initial
              consultation, detailed proposal, and fixed-price quote with no
              obligation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

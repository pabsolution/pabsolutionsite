import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "wouter";
import {
  Code2,
  Cloud,
  Smartphone,
  TestTube2,
  Cog,
  Globe,
  Database,
  Shield,
  ArrowRight,
} from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663604783728/HWr7EdutJXT6XX6NiBNgut/pab-services-bg-3r3n67PHGRVCMFgBjRgArT.webp";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Custom software solutions built with modern architectures. We specialise in full-stack development using React, Node.js, Python, and .NET to create robust, scalable applications.",
    features: ["Custom Web Applications", "API Development & Integration", "Legacy System Modernisation", "Microservices Architecture"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Migrate, optimise, and manage your cloud infrastructure. We work with AWS, Azure, and Google Cloud to deliver cost-effective, highly available solutions.",
    features: ["Cloud Migration", "Infrastructure as Code", "Cost Optimisation", "24/7 Monitoring"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    desc: "Cross-platform mobile applications and progressive web apps that deliver exceptional user experiences across all devices.",
    features: ["React Native & Flutter", "Progressive Web Apps", "UI/UX Design", "App Store Deployment"],
  },
  {
    icon: TestTube2,
    title: "Testing & QA",
    desc: "Comprehensive quality assurance services including automated testing, performance testing, and security audits to ensure your software is production-ready.",
    features: ["Automated Testing", "Performance Testing", "Security Audits", "CI/CD Integration"],
  },
  {
    icon: Cog,
    title: "Automation & DevOps",
    desc: "Streamline your development and operations with intelligent automation, CI/CD pipelines, and infrastructure management.",
    features: ["CI/CD Pipelines", "Infrastructure Automation", "Process Automation", "Monitoring & Alerting"],
  },
  {
    icon: Globe,
    title: "SaaS Development",
    desc: "End-to-end SaaS product development from market research and MVP to full-scale platform with multi-tenancy and subscription management.",
    features: ["MVP Development", "Multi-tenant Architecture", "Subscription Billing", "Analytics & Reporting"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    desc: "Transform raw data into actionable insights with custom dashboards, data pipelines, and machine learning solutions.",
    features: ["Data Pipelines", "Business Intelligence", "Custom Dashboards", "ML Integration"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protect your business with comprehensive security assessments, penetration testing, and compliance consulting tailored for UK regulations.",
    features: ["Security Assessments", "Penetration Testing", "GDPR Compliance", "Security Training"],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={SERVICES_BG} alt="" className="w-full h-full object-cover opacity-30" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              IT Solutions That{" "}
              <span className="text-gradient">Scale</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Comprehensive technology services designed for startups and SMEs.
              From development to deployment, we handle the technical complexity
              so you can focus on growing your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book a free consultation and we'll recommend the best approach for your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 glow-blue-hover"
          >
            Book Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

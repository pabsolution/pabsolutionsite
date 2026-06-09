import { Link } from "wouter";
import {
  Code2,
  Cloud,
  Smartphone,
  TestTube2,
  Cog,
  Globe,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";

/* ─── DESIGN: Liquid Glass / Glassmorphic Depth ─── 
   Deep navy-black base, frosted glass cards, electric blue accents,
   Plus Jakarta Sans headings, Inter body, smooth scroll animations
*/

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663604783728/HWr7EdutJXT6XX6NiBNgut/pab-hero-bg-N49WJFCGyJefKthnvw4yuv.webp";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663604783728/HWr7EdutJXT6XX6NiBNgut/pab-cta-bg-PnSvovozgnuU6bBKwm2xHg.webp";

const services = [
  { icon: Code2, title: "EPoS Software", desc: "Enterprise-grade point-of-sale systems for retail, hospitality, and service businesses. Real-time analytics and seamless integration." },
  { icon: Globe, title: "Booking Software", desc: "Intelligent booking and scheduling solutions for service providers, clinics, salons, and appointment-based businesses." },
  { icon: Cog, title: "Automation Tools", desc: "Streamline workflows with intelligent automation that saves time, reduces errors, and improves efficiency across your operations." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure on AWS, Azure, and GCP with 99.9% uptime and enterprise-grade security." },
  { icon: Smartphone, title: "Web & Mobile Apps", desc: "Cross-platform mobile and responsive web applications built with modern tech stacks for optimal user experience." },
  { icon: TestTube2, title: "Custom Development", desc: "Bespoke software solutions tailored to your unique business requirements and industry needs." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We understand your goals, challenges, and requirements through in-depth consultation." },
  { step: "02", title: "Strategy", desc: "We craft a tailored technical roadmap with clear milestones and deliverables." },
  { step: "03", title: "Development", desc: "Agile sprints with regular demos ensure you stay in control of the process." },
  { step: "04", title: "Launch & Support", desc: "We deploy, monitor, and provide ongoing support to ensure long-term success." },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Building Beyond <span className="text-gradient">Limits</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Affordable, enterprise-grade software development, cloud solutions, and custom applications for startups and SMEs worldwide. Serving clients globally with innovative technology solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 glow-blue-hover flex items-center gap-2">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/services" className="inline-flex">
            <button className="px-8 py-3 rounded-lg border border-border/50 text-foreground font-semibold hover:bg-card/50 transition-all duration-200">
              Explore Services
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container">
        <SectionHeading
          title="Our Services"
          description="Comprehensive solutions available for all clients, from startups to enterprises"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 glow-blue-hover group"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <SectionHeading
          title="Our Process"
          description="A structured approach to delivering exceptional results"
        />

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {process.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>

              {idx < process.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-background to-primary/5">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's discuss your project and create something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 glow-blue-hover flex items-center gap-2">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/services" className="inline-flex">
            <button className="px-8 py-3 rounded-lg border border-border/50 text-foreground font-semibold hover:bg-card/50 transition-all duration-200">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

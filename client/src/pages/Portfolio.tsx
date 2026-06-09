import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    category: "SaaS Platform",
    desc: "A comprehensive financial management SaaS for UK SMEs with automated invoicing, expense tracking, and real-time reporting dashboards.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "MediConnect",
    category: "Healthcare App",
    desc: "Patient management system for private clinics with appointment scheduling, secure messaging, and NHS integration capabilities.",
    tech: ["React Native", "Python", "FHIR API", "Azure"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "LogiFlow",
    category: "Automation Platform",
    desc: "Warehouse automation platform reducing manual processes by 70% through intelligent routing, barcode scanning, and real-time inventory management.",
    tech: ["Vue.js", "Go", "Redis", "GCP"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "EduSpark",
    category: "EdTech Platform",
    desc: "Online learning platform serving 10,000+ students with live classes, progress tracking, and AI-powered content recommendations.",
    tech: ["Next.js", "Python", "MongoDB", "Vercel"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "PropView",
    category: "Property Tech",
    desc: "Property management dashboard for landlords with tenant screening, maintenance requests, and automated rent collection.",
    tech: ["React", "Express", "Stripe", "AWS"],
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    title: "CloudShift",
    category: "Cloud Migration",
    desc: "Enterprise cloud migration project moving 50+ legacy services to AWS with zero downtime, resulting in 40% cost reduction.",
    tech: ["Terraform", "Docker", "AWS", "CI/CD"],
    color: "from-sky-500/20 to-indigo-500/20",
  },
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title="Our Work Speaks for Itself"
            description="A selection of projects we've delivered for clients across various industries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
              >
                {/* Gradient header */}
                <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-foreground/80">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-medium text-muted-foreground bg-accent rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

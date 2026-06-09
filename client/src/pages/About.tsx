import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Target, Heart, Zap, Users } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663604783728/HWr7EdutJXT6XX6NiBNgut/pab-about-visual-8gjFkTE6GBBXJ93GtTfC6u.webp";

const values = [
  { icon: Target, title: "Passion", desc: "We pour genuine enthusiasm into every line of code and every client interaction." },
  { icon: Heart, title: "Integrity", desc: "Transparent communication, honest timelines, and fair pricing — always." },
  { icon: Zap, title: "Innovation", desc: "We stay ahead of the curve, adopting cutting-edge technologies that deliver real value." },
  { icon: Users, title: "Partnership", desc: "Your success is our success. We build lasting relationships, not just software." },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">
                About PAB
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Passion Always{" "}
                <span className="text-gradient">Beyond</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Founded in the United Kingdom, PAB was born from a simple belief:
                every startup and SME deserves access to enterprise-grade technology
                without the enterprise price tag.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                We are a team of passionate engineers, designers, and strategists
                who combine deep technical expertise with a genuine commitment to
                our clients' success. From cloud migrations to custom SaaS platforms,
                we deliver solutions that scale with your ambitions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <div className="glass-card p-2 overflow-hidden">
                <img
                  src={ABOUT_IMG}
                  alt="Abstract 3D glass objects representing innovation"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="The principles that guide every decision we make and every solution we build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl">
          <SectionHeading
            label="Why PAB"
            title="Why Choose Us"
            description="We combine technical excellence with business understanding to deliver real results."
          />

          <div className="space-y-6">
            {[
              { title: "Affordable Excellence", desc: "Enterprise-quality solutions at startup-friendly prices. No hidden fees, no surprises." },
              { title: "UK-Based Team", desc: "Work with a local team that understands UK business culture, regulations, and market needs." },
              { title: "End-to-End Delivery", desc: "From initial concept through development, testing, deployment, and ongoing support." },
              { title: "Agile & Transparent", desc: "Regular updates, sprint demos, and open communication throughout every project." },
              { title: "Future-Proof Technology", desc: "We build with scalability in mind using modern frameworks and cloud-native architecture." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

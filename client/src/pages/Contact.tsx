import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Calendar, Send } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const submitContactMutation = trpc.contact.submit.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    try {
      const result = await submitContactMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        projectDetails: formData.message,
      });
      
      if (result.success) {
        toast.success("Message sent! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-2"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">
                Contact Us
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Let's Build Something{" "}
                <span className="text-gradient">Great</span>
              </h1>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Ready to start your project? Get in touch and we'll respond within
                24 hours with a free consultation and quote.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:hello-pabsolutions@outlook.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      hello-pabsolutions@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:07867230157" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      07867 230157
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Global Service</p>
                    <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="mt-8 space-y-3">
                <a
                  href="https://wa.me/447867230157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <MessageSquare size={18} className="text-green-500" />
                  <span className="text-sm font-medium text-foreground">Chat on WhatsApp (+44 7867 230157)</span>
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <Calendar size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Book a Call (Calendly)</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@company.co.uk"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Company Ltd"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Project Details <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-all duration-200 glow-blue-hover"
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                  We'll respond within 24 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

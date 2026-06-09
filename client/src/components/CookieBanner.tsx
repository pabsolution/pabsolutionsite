import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pab-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("pab-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("pab-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 glass-card p-5 shadow-2xl"
        >
          <button
            onClick={decline}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie banner"
          >
            <X size={16} />
          </button>
          <h4 className="text-sm font-semibold text-foreground mb-2">
            We value your privacy
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            We use cookies to enhance your browsing experience, serve personalised
            content, and analyse our traffic. By clicking "Accept All", you consent
            to our use of cookies.{" "}
            <Link href="/cookies" className="text-primary hover:underline">
              Cookie Policy
            </Link>
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={accept}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={decline}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              Reject Non-Essential
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

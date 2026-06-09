// SEO Configuration and metadata
export const SEO_CONFIG = {
  title: "PAB - Global IT Solutions | EPoS, Booking Software & Custom Development",
  description: "Enterprise-grade software development, EPoS systems, booking software, and cloud solutions for businesses worldwide. Affordable, scalable technology from PAB Solutions.",
  keywords: "EPoS software, booking system, custom software development, cloud solutions, IT solutions, global tech company, software development agency",
  author: "PAB Solutions",
  
  // Open Graph (for social media sharing)
  og: {
    title: "PAB - Global IT Solutions",
    description: "Enterprise-grade software development and IT solutions for businesses worldwide",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663604783728/HWr7EdutJXT6XX6NiBNgut/pab-logo-premium.png",
    url: "https://pabsolutionsite.vercel.app",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "PAB - Global IT Solutions",
    description: "Enterprise-grade software development and IT solutions",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663604783728/HWr7EdutJXT6XX6NiBNgut/pab-logo-premium.png",
  },
  
  // Structured Data (Schema.org)
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PAB Solutions",
    description: "Global IT solutions provider specializing in EPoS software, booking systems, and custom development",
    url: "https://pabsolutionsite.vercel.app",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663604783728/HWr7EdutJXT6XX6NiBNgut/pab-logo-premium.png",
    email: "hello-pabsolutions@outlook.com",
    telephone: "+44-7867-230157",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.linkedin.com/company/pab-solutions",
      "https://twitter.com/pabsolutions",
    ],
  },
};

// Keywords for different pages
export const PAGE_KEYWORDS = {
  home: "EPoS software, booking software, custom development, cloud solutions, IT solutions, software development agency",
  services: "EPoS systems, booking software, automation tools, cloud solutions, web apps, mobile apps, custom development",
  contact: "contact PAB solutions, get in touch, software development services, IT consulting",
};

// Meta tags for different pages
export const PAGE_META = {
  home: {
    title: "PAB - Global IT Solutions | EPoS & Custom Software Development",
    description: "Enterprise-grade software development, EPoS systems, and booking software for businesses worldwide. Affordable, scalable solutions from PAB.",
  },
  services: {
    title: "Our Services - PAB Solutions | EPoS, Booking Software & More",
    description: "Explore our services: EPoS software, booking systems, automation tools, cloud solutions, web & mobile apps, and custom development.",
  },
  contact: {
    title: "Contact PAB Solutions - Get Your Project Started",
    description: "Ready to start your project? Contact PAB Solutions for a free consultation. We serve clients worldwide.",
  },
};

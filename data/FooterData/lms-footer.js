// data/FooterData/lms-footer.js
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

// --- Icon props ---
const iconProps = {
  className: "mr-3 h-5 w-5 flex-shrink-0",
};

const socialIconProps = {
  size: 20,
};

// --- Column 1 Data ---
export const companyLinks = [
  { name: "Dashboard", href: "/" },
  { name: "Workspace", href: "/workspace" },
  { name: "My Learning", href: '/workspace/my-learning' },
  { name: 'AI Tools', href: "/workspace/ai-tools" },
  { name: "Profile", href: "/workspace/profile" },
];

// --- Column 3 Data ---
export const legalLinks = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "FAQs & Help", href: "/faqs" },
  { name: "Contact Support", href: "/support" },
];

// --- Column 2 Data ---
export const contactDetails = {
  phone: "+1 (555) 123-4567",
  email: "support@ailms.com",
  icons: {
    phone: <Phone {...iconProps} />,
    email: <Mail {...iconProps} />,
  },
};

// --- Column 4 Data ---
export const socialLinks = [
  { name: "LinkedIn", href: "#", icon: <Linkedin {...socialIconProps} /> },
  { name: "Instagram", href: "#", icon: <Instagram {...socialIconProps} /> },
  { name: "YouTube", href: "#", icon: <Youtube {...socialIconProps} /> },
  { name: "Facebook", href: "#", icon: <Facebook {...socialIconProps} /> },
];

// --- Bottom Bar Data ---
export const footerBottomLinks = [
  { name: "Home", href: "/" },
];

export const galleryImages = [
  "/lms-gallery/course-promo.jpg",
  "/lms-gallery/student-learning.jpg",
  "/lms-gallery/ai-feature.jpg",
  "/lms-gallery/dashboard-screenshot.jpg",
  "/lms-gallery/instructor-webinar.jpg",
  "/lms-gallery/community-event.jpg",
];
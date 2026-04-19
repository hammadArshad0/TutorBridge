export const C = {
  blue: "#1A3A8F",
  blueLight: "#2A52C9",
  bluePale: "#EEF2FF",
  gold: "#F5A623",
  goldLight: "#FDD87B",
  goldPale: "#FFF8E7",
  text: "#0F1F4B",
  muted: "#64748B",
  white: "#FFFFFF",
  bg: "#F8FAFF",
  border: "#E2E8F0",
};

export const slides = [
  {
    tag: 'Academic Excellence',
    title: 'Unlock Your\nPotential Today',
    subtitle: 'Connect with expert tutors for personalized, one-on-one learning experiences that drive results.',
    // Professional image of a student with a laptop/books
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop', 
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', 
  },
  {
    tag: 'Skill Development',
    title: 'Master New Skills\nFaster',
    subtitle: 'From coding to creative writing, find the perfect mentor to help you achieve your goals.',
    // High-quality image of someone learning/coding
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop', 
    bg: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
  },
  {
    tag: 'Test Preparation',
    title: 'Ace Your Exams\nWith Confidence',
    subtitle: 'Get targeted support and proven strategies from tutors who specialize in your specific tests.',
    // Professional library/study environment image
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop', 
    bg: 'linear-gradient(135deg, #0f172a 50%, #1e40af 100%)',
  },
];

export const packages = [
  {
    name: "Silver",
    price: "Basic",
    color: "#94A3B8",
    bg: "#F8FAFF",
    features: ["2 Home Tuition Leads", "Manual renewal required", "Basic profile listing", "Email support"],
    cta: "Get Started",
    recommended: false,
    emoji: "🥈",
  },
  {
    name: "Gold",
    price: "Standard",
    color: "#F5A623",
    bg: "#FFFBF0",
    features: ["4 Tuition Leads (Online/Home)", "Mixed format support", "Priority profile listing", "WhatsApp support"],
    cta: "Choose Gold",
    recommended: false,
    emoji: "🥇",
  },
  {
    name: "Platinum",
    price: "Premium",
    color: "#1A3A8F",
    bg: "#1A3A8F",
    features: ["Unlimited Opportunities", "One-time payment", "Top-tier profile badge", "24/7 dedicated support"],
    cta: "Go Platinum",
    recommended: true,
    emoji: "💎",
  },
];

export const steps = [
  { label: "Register as Tutor", desc: "Create your profile in minutes — add qualifications, subjects, and availability.", icon: "👤" },
  { label: "Get Tuition Leads", desc: "We match you with students actively looking for your expertise.", icon: "📚" },
  { label: "Connect with Students", desc: "Coordinate session details directly with students or parents.", icon: "🔗" },
  { label: "Start Teaching", desc: "Deliver your lessons and build your reputation on TutorBridge.", icon: "🎓" },
];

export const requirements = [
  { label: "Platform Knowledge", desc: "Familiarity with Zoom, Google Meet, or Microsoft Teams.", icon: "📹" },
  { label: "Stable Internet", desc: "Reliable broadband connection for uninterrupted sessions.", icon: "📶" },
  { label: "Laptop or Tablet", desc: "A capable device for delivering quality digital lessons.", icon: "💻" },
  { label: "Quiet Environment", desc: "A distraction-free space for focused, professional teaching.", icon: "🔇" },
];

export const faqs = [
  { q: "Tuition Assignment & Guarantee", a: "TutorBridge connects tutors with leads but does not guarantee conversion. Quality of the profile and timely response increases success rate significantly." },
  { q: "Registration Packages", a: "Choose from Silver, Gold, or Platinum packages based on your needs. Packages determine the number of leads you receive and support level." },
  { q: "Service Charges", a: "A one-time registration fee applies per package. This covers profile setup, lead access, and platform maintenance." },
  { q: "Commission Policy", a: "Commission is charged on the first two months of salary under Option A, or the first month under Option B. See the Commission section for exact percentages." },
  { q: "Selection Process", a: "Tutors are selected based on qualifications, subject expertise, and student feedback. Verified badge is awarded after review." },
  { q: "Technical Requirements", a: "All tutors conducting online sessions must have a working camera, microphone, stable internet, and a supported device." },
  { q: "Independent Status", a: "TutorBridge tutors are independent contractors. The platform does not employ tutors directly." },
];

export const testimonials = [
  { name: "Ayesha Khan", role: "Mathematics Tutor", rating: 5, text: "TutorBridge transformed my freelance tutoring career. Within two weeks I had 3 consistent students. Highly recommend!" },
  { name: "Bilal Ahmed", role: "A-Level Student", rating: 5, text: "Finding a qualified Physics tutor used to be so hard. TutorBridge matched me with someone perfect in just 24 hours." },
  { name: "Sara Malik", role: "English Tutor", rating: 4, text: "Professional platform, verified students, and great support team. The Platinum plan pays for itself in one month." },
  { name: "Hassan Raza", role: "Parent", rating: 5, text: "My son's grades improved dramatically after finding a tutor through TutorBridge. Clean, trustworthy, and reliable." },
];

export const navLinks = ["About", "Packages", "Commission", "How It Works", "Requirements", "Terms", "Contact"];

/** Primary WhatsApp / phone (E.164 without + for wa.me) */
export const CONTACT_PHONE_DISPLAY = "+92 330 8522929";
export const WHATSAPP_CHAT_URL = "https://wa.me/923308522929";

// ── Brand colours (derived from TutorBridge logo) ──────────────────────────
export const C = {
  blue:      '#1A3A8F',
  blueLight: '#2A52C9',
  bluePale:  '#EEF2FF',
  gold:      '#F5A623',
  goldLight: '#FDD87B',
  goldPale:  '#FFF8E7',
  text:      '#0F1F4B',
  muted:     '#64748B',
  white:     '#FFFFFF',
  bg:        '#F8FAFF',
  border:    '#E2E8F0',
};

// ── Slider data ─────────────────────────────────────────────────────────────
export const slides = [
  {
    id: 1,
    tag: 'Home Tuition',
    title: 'Learn From Home,\nGrow Without Limits',
    subtitle:
      'Get qualified tutors who come to you — personalised, flexible, and effective.',
    bg: `linear-gradient(135deg, ${C.blue} 0%, #0D2464 100%)`,
    accent: C.gold,
    emoji: '🏠',
  },
  {
    id: 2,
    tag: 'Online Tuition',
    title: 'World-Class Teaching,\nAnywhere You Are',
    subtitle:
      'Join live interactive sessions on Zoom, Meet, or Teams with verified educators.',
    bg: `linear-gradient(135deg, #0D2464 0%, ${C.blue} 60%, #1B5E8F 100%)`,
    accent: C.goldLight,
    emoji: '💻',
  },
  {
    id: 3,
    tag: 'Verified Tutors',
    title: 'Trust Built On\nCredentials & Results',
    subtitle:
      'Every tutor is verified, background-checked, and rated by real students.',
    bg: `linear-gradient(135deg, #1B2A6B 0%, ${C.blue} 100%)`,
    accent: C.gold,
    emoji: '✅',
  },
];

// ── Packages ────────────────────────────────────────────────────────────────
export const packages = [
  {
    name: 'Silver',
    price: 'Basic',
    color: '#94A3B8',
    bg: '#F8FAFF',
    features: [
      '2 Home Tuition Leads',
      'Manual renewal required',
      'Basic profile listing',
      'Email support',
    ],
    cta: 'Get Started',
    recommended: false,
  },
  {
    name: 'Gold',
    price: 'Standard',
    color: C.gold,
    bg: '#FFFBF0',
    features: [
      '4 Tuition Leads (Online/Home)',
      'Mixed format support',
      'Priority profile listing',
      'WhatsApp support',
    ],
    cta: 'Choose Gold',
    recommended: false,
  },
  {
    name: 'Platinum',
    price: 'Premium',
    color: C.blue,
    bg: C.blue,
    features: [
      'Unlimited Opportunities',
      'One-time payment',
      'Top-tier profile badge',
      '24/7 dedicated support',
    ],
    cta: 'Go Platinum',
    recommended: true,
  },
];

// ── How it works ─────────────────────────────────────────────────────────────
export const steps = [
  {
    label: 'Register as Tutor',
    desc: 'Create your profile in minutes — add qualifications, subjects, and availability.',
  },
  {
    label: 'Get Tuition Leads',
    desc: 'We match you with students actively looking for your expertise.',
  },
  {
    label: 'Connect with Students',
    desc: 'Coordinate session details directly with students or parents.',
  },
  {
    label: 'Start Teaching',
    desc: 'Deliver your lessons and build your reputation on TutorBridge.',
  },
];

// ── Requirements ─────────────────────────────────────────────────────────────
export const requirements = [
  {
    label: 'Platform Knowledge',
    desc: 'Familiarity with Zoom, Google Meet, or Microsoft Teams.',
    emoji: '🎥',
  },
  {
    label: 'Stable Internet',
    desc: 'Reliable broadband connection for uninterrupted sessions.',
    emoji: '📶',
  },
  {
    label: 'Laptop or Tablet',
    desc: 'A capable device for delivering quality digital lessons.',
    emoji: '💻',
  },
  {
    label: 'Quiet Environment',
    desc: 'A distraction-free space for focused, professional teaching.',
    emoji: '🔇',
  },
];

// ── T&C accordion ────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: 'Tuition Assignment & Guarantee',
    a: 'TutorBridge connects tutors with leads but does not guarantee conversion. Quality of the profile and timely response increases success rate significantly.',
  },
  {
    q: 'Registration Packages',
    a: 'Choose from Silver, Gold, or Platinum packages based on your needs. Packages determine the number of leads you receive and support level.',
  },
  {
    q: 'Service Charges',
    a: 'A one-time registration fee applies per package. This covers profile setup, lead access, and platform maintenance.',
  },
  {
    q: 'Commission Policy',
    a: 'Commission is charged on the first two months of salary under Option A, or the first month under Option B. See the Commission section for exact percentages.',
  },
  {
    q: 'Selection Process',
    a: 'Tutors are selected based on qualifications, subject expertise, and student feedback. Verified badge is awarded after review.',
  },
  {
    q: 'Technical Requirements',
    a: 'All tutors conducting online sessions must have a working camera, microphone, stable internet, and a supported device.',
  },
  {
    q: 'Independent Status',
    a: 'TutorBridge tutors are independent contractors. The platform does not employ tutors directly.',
  },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Mathematics Tutor',
    rating: 5,
    text: 'TutorBridge transformed my freelance tutoring career. Within two weeks I had 3 consistent students. Highly recommend!',
  },
  {
    name: 'Bilal Ahmed',
    role: 'A-Level Student',
    rating: 5,
    text: 'Finding a qualified Physics tutor used to be so hard. TutorBridge matched me with someone perfect in just 24 hours.',
  },
  {
    name: 'Sara Malik',
    role: 'English Tutor',
    rating: 4,
    text: 'Professional platform, verified students, and great support team. The Platinum plan pays for itself in one month.',
  },
  {
    name: 'Hassan Raza',
    role: 'Parent',
    rating: 5,
    text: "My son's grades improved dramatically after finding a tutor through TutorBridge. Clean, trustworthy, and reliable.",
  },
];

export const navLinks = [
  'About',
  'Packages',
  'Commission',
  'How It Works',
  'Requirements',
  'Terms',
  'Contact',
];

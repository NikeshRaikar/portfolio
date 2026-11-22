export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  accent: 'cyan' | 'amber' | 'emerald' | 'slate';
}

export const SITE = {
  name: 'Nikesh Raikar',
  fullName: 'Nikesh Jagadeesh Raikar',
  monogram: 'NR',
  role: 'Senior DQA Engineer & Automation Lead',
  specialty: 'Automotive Embedded · Test Bench Commissioning · Multimedia Automation',
  location: 'Frankfurt am Main, Germany',
  email: 'raikarnikeshapril@outlook.com',
  github: 'https://github.com/yourusername', // Replace with your GitHub URL
  linkedin: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn URL
  domain: 'https://nikeshraikar.dev',
  formEndpoint: 'https://api.web3forms.com/submit',
  avatarSrc: '/images/avatar.webp', // Swap with /images/avatar.jpg
  statusText: 'Senior DQA Engineer @ LG Vehicle Components · Frankfurt, DE',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Work', href: '/work' },
  { label: 'Notes', href: '/notes' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_METRICS: MetricItem[] = [
  {
    value: '7+ Years',
    label: 'Industry Experience',
    sublabel: 'Automotive IVI, ECU & Multimedia Automation',
    accent: 'cyan',
  },
  {
    value: '3× ISTQB',
    label: 'Certified',
    sublabel: 'CTFL · CT-TAS · Automotive Tester',
    accent: 'emerald',
  },
  {
    value: 'VW / OEM',
    label: 'OTA & TBMS Lead',
    sublabel: 'FOTA automation for VW, SEAT & SKODA',
    accent: 'amber',
  },
  {
    value: 'Embedded',
    label: 'Custom Loggers',
    sublabel: 'Jetson Nano (MIB/ICAS) & RPi 5 (TTxB)',
    accent: 'slate',
  },
];

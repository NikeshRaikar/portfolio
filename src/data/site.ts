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
  role: 'Senior Automation Engineer & Tech Lead',
  specialty: 'Automotive Embedded Systems · ECU Testing · Diagnostics',
  location: 'Frankfurt am Main, Germany',
  email: 'hello@nikeshraikar.dev', // Replace with your actual email
  github: 'https://github.com/yourusername', // Replace with your GitHub URL
  linkedin: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn URL
  domain: 'https://nikeshraikar.dev',
  formEndpoint: 'https://api.web3forms.com/submit', // Or your Formspree endpoint
  avatarSrc: '/images/avatar-placeholder.svg', // Swap with /images/avatar.jpg
  statusText: 'Senior Automation Engineer & Tech Lead · Frankfurt am Main, DE',
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
    value: '3× ISTQB',
    label: 'Certified',
    sublabel: 'CTFL · CT-TAS · Automotive Tester',
    accent: 'cyan',
  },
  {
    value: 'Dual-Bus',
    label: 'TTxB Logger',
    sublabel: 'CAN FD + Automotive Ethernet on RPi 5',
    accent: 'emerald',
  },
  {
    value: 'DE ↔ IN',
    label: 'Remote HIL Bridge',
    sublabel: 'Cross-border CAN & Eth test bench tunnels',
    accent: 'amber',
  },
  {
    value: 'ISO 14229',
    label: 'Protocol Depth',
    sublabel: 'UDS · DoIP · 100/1000BASE-T1 · DLT',
    accent: 'slate',
  },
];

export interface Credential {
  issuer: string;
  title: string;
  date: string;
  badge: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface SkillGroup {
  category: string;
  accent: 'cyan' | 'amber' | 'emerald';
  items: string[];
}

export const CREDENTIALS: Credential[] = [
  {
    issuer: 'ISTQB / GTB',
    title: 'Automotive Software Tester',
    date: 'Oct 2026',
    badge: 'CT-AuT',
  },
  {
    issuer: 'ISTQB',
    title: 'Test Automation Strategy',
    date: 'Jul 2026',
    badge: 'CT-TAS',
  },
  {
    issuer: 'ISTQB',
    title: 'Certified Tester Foundation',
    date: 'Jul 2026',
    badge: 'CTFL',
  },
  {
    issuer: 'Engineering Degree',
    title: 'B.Sc. Electronics & Comm.',
    date: 'Completed',
    badge: 'ECE',
  },
  {
    issuer: 'Open Source',
    title: 'TTxB (ceT-logger) Debian Pkg',
    date: '2026',
    badge: '.deb',
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: 'Present',
    role: 'Senior Automation Engineer & Tech Lead',
    organization: 'Automotive Embedded & Infotainment Validation',
    location: 'Frankfurt am Main, Germany',
    summary:
      'Leading automated validation architectures for next-generation automotive ECUs, infotainment systems, and multi-bus vehicle networks.',
    highlights: [
      'Architected hardware-software test benches bridging CAN FD and Automotive Ethernet protocols over secure network tunnels between engineering teams in Germany and India.',
      'Designed deterministic diagnostic validation pipelines covering UDS (ISO 14229), DoIP, and Diagnostic Log and Trace (DLT).',
      'Mentored test automation engineers on scalable framework architecture, CI/CD HIL integration, and ISTQB-aligned test strategy.',
    ],
    tags: ['CAN FD', 'Automotive Ethernet', 'UDS / DoIP', 'HIL Automation', 'Python', 'Linux'],
  },
  {
    period: '2026',
    role: 'Creator & Maintainer — TTxB (ceT-logger)',
    organization: 'Open-Source Automotive Tooling',
    location: 'GitHub · Debian Package',
    summary:
      'Engineered an open-source dual-channel CAN and Automotive Ethernet data logger running on Raspberry Pi 5, distributed as a production-ready Debian package.',
    highlights: [
      'Built synchronized multi-interface capture pipelines with microsecond-level timestamp correlation across CAN and Ethernet frames.',
      'Packaged system daemons, CLI utilities, and dependencies into a repeatable .deb build pipeline for zero-friction field deployment.',
      'Evaluated sub-second boot embedded alternatives using ESP32-S3 ETH, FreeRTOS, and SN65HVD230 transceivers.',
    ],
    tags: ['Raspberry Pi 5', 'Debian Packaging', 'SocketCAN', '100BASE-T1', 'ESP32-S3', 'FreeRTOS'],
  },
  {
    period: 'Earlier',
    role: 'Embedded Systems & Test Automation Engineer',
    organization: 'Automotive ECU & Bus Diagnostics',
    location: 'India & Germany',
    summary:
      'Built end-to-end functional, regression, and diagnostic test suites for automotive electronics and in-vehicle communication buses.',
    highlights: [
      'Automated ECU flashing, fault-injection, and bus-load stress testing across CAN, LIN, and FlexRay networks.',
      'Developed custom Python automation harnesses and log parsers to reduce manual triage cycles during vehicle integration milestones.',
    ],
    tags: ['ECU Testing', 'LIN', 'FlexRay', 'Python', 'Diagnostics'],
  },
];

export const SKILL_MATRIX: SkillGroup[] = [
  {
    category: 'Automotive Protocols & Diagnostics',
    accent: 'cyan',
    items: [
      'UDS (ISO 14229)',
      'CAN / CAN FD',
      'Automotive Ethernet (100BASE-T1 / 1000BASE-T1)',
      'DoIP (ISO 13400)',
      'DLT (Diagnostic Log & Trace)',
      'LIN',
      'FlexRay',
      'SOME/IP',
    ],
  },
  {
    category: 'Embedded Hardware & Linux Systems',
    accent: 'emerald',
    items: [
      'Raspberry Pi 5',
      'ESP32-S3 ETH',
      'FreeRTOS',
      'Debian Packaging (.deb)',
      'SocketCAN & Netlink',
      'systemd Services',
      'WireGuard / Secure Tunnels',
      'Microsecond Time Sync (PTP/NTP)',
    ],
  },
  {
    category: 'Test Automation & Strategy',
    accent: 'amber',
    items: [
      'HIL / SIL Test Bench Architecture',
      'Python Automation Frameworks',
      'Infotainment & ECU Validation',
      'CI/CD Hardware Pipelines',
      'ISTQB Test Automation Strategy',
      'Bash / Shell Tooling',
      'Git & Release Engineering',
      'Log Analysis & Telemetry',
    ],
  },
];

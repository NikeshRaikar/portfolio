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
    issuer: 'VTU, Belgaum',
    title: 'B.E. Electronics & Comm.',
    date: '2017',
    badge: 'ECE',
  },
  {
    issuer: 'Annamalai Univ.',
    title: 'Post Graduate Diploma',
    date: '2021',
    badge: 'PGD',
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: 'May 2023 – Present',
    role: 'Senior DQA Engineer',
    organization: 'LG Vehicle Components',
    location: 'Frankfurt, Germany',
    summary:
      'Leading the TBMS (Test Bench Management System) team for online commissioning of test benches and vehicles, alongside a 3-member automation engineering team.',
    highlights: [
      'Led online commissioning of automotive test benches and vehicles using VKMS, CP Tool, ODIS, DORIS, System42, and UDS diagnostics.',
      'Built OTA (FOTA) test automation from scratch for VW, SEAT, and SKODA vehicle platforms, and developed an LSF automation framework for system and sanity testing.',
      'Engineered a VW MIB/ICAS vehicle logger on NVIDIA Jetson Nano and a Renault/Nissan Android vehicle logger on Raspberry Pi to capture Logcat, bug reports, and video logs.',
      'Validated core connected-vehicle features including e-Call, IAA, PSO, and OTA updates.',
    ],
    tags: ['ODIS / DORIS', 'UDS', 'FOTA', 'Vector CANoe', 'DLT Viewer', 'Jetson Nano', 'Raspberry Pi'],
  },
  {
    period: 'Sep 2020 – May 2023',
    role: 'Senior Test Engineer',
    organization: 'GlobalLogic',
    location: 'Bengaluru, India',
    summary:
      'Member of the Automation Deployment Team for Roku TV, owning automation lab setup, test case development, and post-deployment script reliability.',
    highlights: [
      'Automated major US OTT channels including Netflix, Amazon Prime Video, and Sling on the Roku Automation Framework.',
      'Set up and maintained dedicated multimedia automation labs with 2K/4K generators (Murideo, Leo Bodnar, Quantum), DekTec, TG-39, and Audio Precision.',
      'Validated peripheral devices (soundbars, AVRs, DVRs) and media standards: CEC, Dolby Vision, HDR, HLG, VRR, ALLM, HDCP, ATSC/QAM, and HLS/MPEG-DASH.',
    ],
    tags: ['Roku TV', 'OTT Automation', 'CEC / HDCP', 'Dolby Vision / HDR', 'Jenkins / TeamCity', 'Python'],
  },
  {
    period: 'Nov 2019 – Sep 2020',
    role: 'Software Engineer',
    organization: 'Alten Calsoft Labs',
    location: 'Bengaluru, India',
    summary:
      'Developed automated test suites for Android Mobile and TV IPTV platforms and contributed to computer-vision R&D.',
    highlights: [
      'Built Python (unittest, pytest) automation suites for OTT/IPTV features including Subtitles, Closed Captions, and screen casting across Android Mobile and TV.',
      'Contributed to an AI/ML R&D initiative using image detection and annotation to power automated Audio Description for visually impaired viewers.',
    ],
    tags: ['Python', 'pytest / unittest', 'IPTV / OTT', 'Android TV', 'AI/ML R&D'],
  },
  {
    period: 'Feb 2019 – Nov 2019',
    role: 'Software Engineer',
    organization: 'HCL ERS',
    location: 'Bengaluru, India',
    summary:
      'Executed broadcast verification (BCV), software quality assurance, and terrestrial/satellite DTV & ATV validation.',
    highlights: [
      'Verified country broadcast standards using TG-39, VG-56, DekTec, Signal Generators, and CAM (Ziggo) modules.',
      'Performed functional, performance, exploratory, aging, stress, and OTA testing across digital and analog TV receivers.',
    ],
    tags: ['BCV', 'DTV / ATV', 'DekTec', 'CAM (Ziggo)', 'Android Automation', 'TestRail'],
  },
];

export const SKILL_MATRIX: SkillGroup[] = [
  {
    category: 'Automotive & Diagnostics',
    accent: 'cyan',
    items: [
      'UDS (ISO 14229)',
      'ODIS / DORIS / CP Tool',
      'Online Commissioning & ECU Flashing',
      'OTA (FOTA) · e-Call · PSO · IAA',
      'Vector CANoe & DLT Viewer',
      'CAN FD & Automotive Ethernet',
      'AUTOSAR · IVI · Drive Testing',
      'CarPlay · Android Auto · BT (HFP/A2DP/AVRCP/PBAP)',
    ],
  },
  {
    category: 'Python, Frameworks & Embedded',
    accent: 'emerald',
    items: [
      'Python (pytest, unittest, Robot Framework)',
      'LSF & Modular Frameworks',
      'pycanoe · paramiko · socket · Pillow',
      'Raspberry Pi 5 & Jetson Nano',
      'Debian Packaging (.deb) & Linux',
      'Jenkins · TeamCity · Git',
      'JIRA (KPM/VLM) · CodeBeamer · TestRail',
    ],
  },
  {
    category: 'Multimedia, Broadcast & Streaming',
    accent: 'amber',
    items: [
      'Roku TV · Sony BRAVIA · LG webOS',
      'MPEG-DASH · HLS · RTSP · RTP · Smooth Streaming',
      'ATSC · DVB-T/T2 · NTSC · PAL · QAM',
      'Dolby Vision · HDR · HLG · 4K/8K · VRR · ALLM',
      'VP9 · HEVC · AVC · AAC · AC3 · EAC3 · DTS',
      'CEC · HDCP · DLNA · CAM (Ziggo) · STB',
    ],
  },
];

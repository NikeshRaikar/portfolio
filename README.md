Nikesh Raikar — Engineering Portfolio
A modern, single-file dark-mode personal portfolio built for Nikesh Raikar, Senior Automation Engineer & Tech Lead specializing in Automotive Embedded Systems, ECU Diagnostics, CAN FD, Automotive Ethernet, UDS, and DoIP.
Designed for maximum performance, zero build-step complexity, and instant deployment on any static hosting provider.
---
✨ Key Features
Zero-Build Single-File Architecture: All markup, styling, and interactivity live cleanly inside `index.html`.
Precision Dark-Mode UI: Deep obsidian palette (`#090C10`) with subtle radial glows, glassmorphic metric strips, and semantic accent highlights (Cyan, Amber, Emerald, Purple).
Interactive Architecture Modals: Dedicated deep-dive modals for featured systems—TTxB (ceT-logger) and the Cross-Border Remote ECU Test Bench (DE ↔ IN).
Embedded CV / Resume Modal: Built-in executive summary modal with one-click Print / Save PDF support.
Scroll-Spy Navigation & Mobile Drawer: Sticky translucent navbar with active section highlighting via `IntersectionObserver` and a responsive mobile menu.
EU / German Legal Compliance Ready: Includes placeholder modals for Impressum (§ 5 DDG) and Datenschutzerklärung (DSGVO) in the footer.
---
🛠️ Tech Stack
Markup: Semantic HTML5
Styling: Tailwind CSS (loaded via CDN with custom theme configuration)
Typography: Plus Jakarta Sans (Display), Inter (Body), and JetBrains Mono (Technical labels & metadata)
Interactivity: Vanilla JavaScript (modals, scroll-spy, clipboard copy, mobile menu, form feedback)
---
📁 Repository Structure
```text
.
├── index.html          # Complete single-file portfolio website
├── README.md           # Project documentation
└── assets/             # (Optional) Folder for your headshot photo & PDF resume
    ├── avatar.jpg
    └── Nikesh_Raikar_CV.pdf
```
---
🚀 Local Development & Preview
Because there is no build step, you can preview the site immediately:
Direct Open: Double-click `index.html` to open it in your default browser.
Local Server (Recommended): Run a lightweight local server from the project root:
```bash
# Using Python 3
python3 -m http.server 8080

# Or using Node.js (npx)
npx serve .
```
Then visit `http://localhost:8080` in your browser.
---
🔧 Customization Checklist Before Publishing
Before deploying publicly, update the following placeholders inside `index.html`:
[ ] Portrait Photo: Replace the placeholder `<svg>` inside the Hero portrait card with an `<img src="assets/avatar.jpg" alt="Nikesh Raikar" class="w-full h-full object-cover" />`.
[ ] Social & Email Links: Update `mailto:contact@nikeshraikar.dev`, GitHub, and LinkedIn URLs in the `#contact` section and `copyEmail()` function.
[ ] Contact Form Backend: Connect `#contact-form` to a static form provider like Formspree or Web3Forms so submissions are delivered to your inbox.
[ ] CV / Resume PDF: Link the Download CV (PDF) buttons directly to your hosted PDF file (e.g., `assets/Nikesh_Raikar_CV.pdf`), or customize the built-in CV modal content.
[ ] Legal Details: Fill in your full legal address and hosting details inside `LEGAL_DATA` (`Impressum` and `Datenschutz`).
[ ] Project Specs: Update `PROJECT_DATA` in the `<script>` block with live GitHub repository links or updated metrics as your systems evolve.
---
🌐 Deployment
This portfolio can be hosted for free with automatic HTTPS on any static CDN:
Option 1: Cloudflare Pages (Recommended)
Push this repository to GitHub.
In the Cloudflare dashboard, go to Workers & Pages → Create → Pages → Connect to Git.
Select this repository, leave Framework preset as `None` and Build command blank, and click Save and Deploy.
Attach your custom domain under the Custom domains tab.
Option 2: GitHub Pages
Open your GitHub repository and go to Settings → Pages.
Under Build and deployment, set Source to `Deploy from a branch`.
Select the `main` branch and `/ (root)` folder, then click Save.
---
📄 License
© 2026 Nikesh Raikar. All rights reserved. Feel free to reference the layout structure for inspiration, but please do not reuse personal content, biographical details, or project descriptions without permission.

import type { Project } from "@/types";

// ========== PERSONALIZE: Add/edit your flagship projects ==========
export const projects: Project[] = [
  {
    id: "agentverse",
    name: "AI Onboarding Agent",
    tagline: "FAQs, HR/IT email drafts, and Anam AI voice avatar for new hires.",
    description:
      "AgentVerse Hackathon (UCL London, Nov 2025). Collaborated with a team of 6 to build an AI onboarding agent that answers FAQs and drafts HR/IT emails for new hires. Integrated GitHub and Slack APIs to ground responses in current projects and organisational updates; prototyped an Anam AI voice avatar for conversational onboarding. Produced and published a creative pitch video on YouTube.",
    tech: ["LLM/AI", "GitHub API", "Slack API", "Anam AI"],
    role: "Team of 6 — integration, APIs, voice avatar",
    links: [
      { label: "Devpost", href: "https://devpost.com/software/agentic-ai-onboarding" },
      { label: "Pitch video", href: "https://youtu.be/mqZyZmwG5bk" },
    ],
    impact: [
      "GitHub and Slack APIs ground responses in current projects and updates.",
      "Anam AI voice avatar for conversational onboarding.",
      "Pitch video on YouTube showcasing capabilities.",
    ],
    image: "/agentverse-team.jpg",
    video: "/AI-Onboarding-Agent.mov",
    videoPortrait: true,
  },
  {
    id: "hackabot",
    name: "Hackabot 2024 and 2025",
    tagline: "Mona bots: multi-bot mapping and computer-vision navigation.",
    description:
      "Robosoc Society Manchester (Mar 2024 – Mar 2025). Team of 4 programming Mona bots to solve maze challenges. In 2024, coordinated two bots to communicate and collaboratively map the maze using onboard sensors. In 2025, explored computer-vision-based navigation for a sensor-less bot for reliable route following.",
    tech: ["Embedded C", "Sensors", "Computer vision", "Multi-robot"],
    role: "Team of 4 — coordination, sensors, CV prototype",
    links: [
      { label: "Robosoc", href: "https://uom-robosoc.com/" },
      { label: "Instagram", href: "https://www.instagram.com/uom_robosoc/" },
    ],
    impact: [
      "2024: Two bots communicating and collaboratively mapping with onboard sensors.",
      "2025: Computer-vision-based navigation for sensor-less bot.",
      "Sharpened vibe coding and rapid iteration.",
    ],
    images: [
      "/hackabot-2024-team.png",
      "/hackabot-2025-nav.png",
    ],
    imagePositions: ["right center", "center"],
    video: "/hackabot-video.mp4",
    videoPortrait: true,
  },
  {
    id: "line-following-buggy",
    name: "Embedded Systems Project – Line-following buggy",
    tagline: "Lead coder, PID control on MCU, design to delivery.",
    description:
      "University of Manchester (Sep 2024 – Jun 2025). Led a team of 5 as lead coder for a line-following buggy with a PID control algorithm on the MCU. Authored design documentation, test plans, and final reports; presented results to stakeholders. Designed chassis layout, sensor placement, and wiring diagrams; integrated motors, sensors, and MCU. Managed project budget and component selection; created promotional materials and a pitch.",
    tech: ["Embedded C", "PID control", "MCU", "Sensors", "Motors"],
    role: "Team lead & lead coder (5 people)",
    links: [
      { label: "Final report (PDF)", href: "/esp-final-report.pdf" },
    ],
    impact: [
      "Design docs, test plans, reports; presented to stakeholders.",
      "Chassis, sensor placement, wiring; motors, sensors, MCU integration.",
      "Budget, component selection; promotional materials and pitch.",
    ],
    image: "/line-following-buggy.png",
  },
  {
    id: "quantum-shors",
    name: "Quantum algorithms – Shor's algorithm",
    tagline: "University of Manchester project: theory, Qiskit implementation, and IBM quantum hardware. Report expected June 2026.",
    description:
      "University of Manchester project (Sep 2025 – Jun 2026). A blended approach: self-directed study of quantum computing foundations (quantum gates, superposition, interference, entanglement) and hands-on implementation in Python using Qiskit, with simulation and execution on IBM's online quantum platform. The design follows the standard Shor's algorithm formulation; circuit diagrams are used to visualise gates and sequences. A classical counterpart in Python provides a baseline. Metrics: execution time, resources (qubits, circuit depth, gates), and scalability. Report in progress; expected June 2026.",
    tech: ["Python", "Qiskit", "IBM Quantum", "Quantum algorithms", "Number theory"],
    role: "University of Manchester — solo project and report",
    links: [],
    impact: [
      "Theoretical study and analysis of Shor's algorithm; implementation and testing on simulators and real IBM hardware.",
      "Classical baseline and performance comparison; report expected June 2026.",
    ],
  },
  {
    id: "lattice-internship",
    name: "Lattice Semiconductor – DDR IP",
    tagline: "DDR software IP support, automation, and critical bug fixes.",
    description:
      "Internship, Penang, Malaysia (Jun – Sept 2025). Supported LPDDR4/DDR3 software IP in the DDR technology team. Automated pin assignment for development boards with a custom script; restructured example projects for easier customization and faster customer adoption. Identified and resolved critical bugs in DDR3 IP, improving reliability ahead of release.",
    tech: ["C", "Bash/Scripts", "DDR", "Lattice tools"],
    role: "Intern — DDR IP support and tooling",
    links: [],
    impact: [
      "Automated pin assignment speeding setup and reducing errors.",
      "Restructured example projects for faster customer adoption.",
      "Critical DDR3 IP bug fixes improving reliability ahead of release.",
    ],
    images: ["/lattice-team.png", "/lattice-presenting.png"],
    imagePositions: ["center", "right top"],
  },
  {
    id: "amd-internship",
    name: "AMD – PCIe & register tooling",
    tagline: "Bash and Python automation for diagnostics and validation.",
    description:
      "Internship, Penang, Malaysia (Jun – Sept 2024). Automated PCIe endpoint capability extraction using Bash, accelerating diagnostics and performance analysis on Linux. Developed a Python tool to compare and validate register values across devices and configurations, flagging mismatches early. Integrated both tools into the team's workflow, reducing manual steps and increasing repeatability.",
    tech: ["Bash", "Python", "Linux", "PCIe", "Diagnostics"],
    role: "Intern — automation and tooling",
    links: [],
    impact: [
      "PCIe capability extraction accelerating diagnostics on Linux.",
      "Register comparison tool improving data integrity and debug turnaround.",
      "Workflow integration reducing manual steps and increasing repeatability.",
    ],
    images: ["/amd-meeting.png", "/amd-id.png"],
  },
];

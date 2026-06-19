import connectCareImg from "@/assets/connect-care.jpg";
import playoraImg from "@/assets/playora.jpg";
import aiImg from "@/assets/dealmind.png";
import resumeUrl from "@/assets/resume.pdf?url";
const ecomImg = playoraImg;

export const profile = {
  name: "Sadiya Rehman",
  tagline: "CSE Student • AI & Full Stack Developer",
  location: "Bengaluru, Karnataka, India",
  email: "sadiyarehman78@gmail.com",
  phone: "+91 9019667116",
  github: "https://github.com/sadiyarehman78",
  linkedin: "https://www.linkedin.com/in/sadiya-rehman",
  resume: resumeUrl,
  roles: [
    "AI Engineer in the Making",
    "Full Stack Developer",
    "Generative AI Explorer",
    "Problem Solver",
  ],
};

export const skillGroups = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL"] },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS v4"] },
  { title: "Backend", items: ["Java Servlets", "JSP", "JDBC", "REST APIs", "Spring Framework"] },
  { title: "Database", items: ["MySQL", "PostgreSQL"] },
  { title: "AI & ML", items: ["Generative AI", "Prompt Engineering", "Google Gemini API"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel", "Maven", "Gradle", "MySQL Workbench"] },
];

export const projects = [
  {
    title: "DealMind — AI Powered Negotiation Copilot",
    image: aiImg,
    description:
      "Full-stack AI application that provides intelligent negotiation assistance across multiple domains with Analyze, Respond, Pricing and Playbook modes.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini API", "Zod"],
    features: [
      "Four AI modes: Analyze, Respond, Pricing, Playbook",
      "Google Gemini API integration with typed prompts",
      "Production deployment on Vercel with modern UI",
    ],
    github: "https://github.com/sadiyarehman78/Dealmind",
    demo: "https://dealmind-rose.vercel.app",
  },
  {
    title: "Connect Care — Healthcare Management System",
    image: connectCareImg,
    description:
      "Healthcare management platform for appointments and patient records with role-based dashboards for admins, doctors and patients.",
    tech: ["Java", "Servlet", "JSP", "JDBC", "MySQL", "Apache Tomcat"],
    features: [
      "Admin, Doctor and Patient dashboards",
      "Secure authentication & session management",
      "Normalized MySQL schema with JDBC layer",
    ],
    github: null,
    demo: null,
  },
  {
    title: "Playora — Player & Venue Booking Platform",
    image: ecomImg,
    description:
      "Platform that connects players and lets them discover and book sports venues online with a clean booking flow.",
    tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "User registration & secure login",
      "Search and connect with players",
      "Online venue booking workflow",
    ],
    github: null,
    demo: null,
  },
];

export const experience = [
  {
    title: "AI Full-Stack Project — DealMind",
    org: "Self-initiated",
    period: "May 2026 – June 2026",
    desc: "Designed and shipped a production Next.js + TypeScript app integrating the Google Gemini API for multi-mode negotiation assistance.",
  },
  {
    title: "Healthcare Management System — Connect Care",
    org: "Academic Project",
    period: "June 2025 – July 2025",
    desc: "Built a Java EE (Servlet + JSP + JDBC + MySQL) platform with role-based dashboards deployed on Apache Tomcat.",
  },
  {
    title: "Sports Booking Platform — Playora",
    org: "Academic Project",
    period: "Nov 2025 – Dec 2025",
    desc: "Created a Java + MySQL web application connecting players and enabling online venue bookings.",
  },
  {
    title: "Codex Hackathon — Participant",
    org: "Hackathon",
    period: "2025",
    desc: "Collaborated with fellow developers to build solutions under strict deadlines — sharpened problem-solving, teamwork, adaptability, and rapid prototyping with new technologies.",
  },
  {
    title: "TNSIF Full Stack Java Training",
    org: "TNS India Foundation",
    period: "Ongoing",
    desc: "Building a strong foundation in Java, OOP, DBMS/SQL, frontend and backend development through hands-on projects and modern software engineering practices.",
  },
  {
    title: "SAP Training — Enterprise Technologies",
    org: "SAP Learning",
    period: "Ongoing",
    desc: "Exploring SAP S/4HANA, cloud platforms and digital transformation to understand how large organizations run business processes at industry scale.",
  },
];

export const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    school: "Sri Krishna Institute of Technology, Bengaluru",
    period: "2023 – 2027",
    cgpa: "8.04 / 10",
    courses: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOP",
      "Software Engineering",
    ],
  },
  {
    degree: "Pre-University (PUC) — Science",
    school: "Shaheen Independent PU College",
    period: "2021 – 2023",
    cgpa: "87%",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    degree: "SSLC",
    school: "Ebenezer St. Thomas English High School",
    period: "2020 – 2021",
    cgpa: "93%",
    courses: [],
  },
];

export const certifications = [
  { title: "Generative AI for Software Developers", issuer: "Coursera", year: "2025" },
];

export const achievements = [
  "Built and deployed DealMind, a production AI negotiation copilot powered by Google Gemini.",
  "Maintained a consistent academic record with 8.04 CGPA in B.E. CSE.",
  "Shipped multiple full-stack Java EE projects with normalized MySQL schemas.",
  "Self-taught modern stack: Next.js, TypeScript, Tailwind v4 and Generative AI tooling.",
];

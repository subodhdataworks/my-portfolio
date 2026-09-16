import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaChartBar,
} from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Category 1: Business Intelligence & Reporting (Zero duplicates)
export const BI_SKILLS = [
  {
    skill_name: "Power BI",
    image: "powerbi.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tableau",
    image: "tableau.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Excel",
    image: "excel.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Google Sheets",
    image: "sheets.svg",
    width: 65,
    height: 65,
  },
] as const;

// Category 2: Databases, ETL & Querying (Zero duplicates)
export const DATABASE_SKILLS = [
  {
    skill_name: "SQL",
    image: "sql.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Power Query",
    image: "powerquery.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "DAX",
    image: "dax.svg",
    width: 65,
    height: 65,
  },
] as const;

// Category 3: Analytics, Python & AI (Zero duplicates)
export const ANALYTICS_AI_SKILLS = [
  {
    skill_name: "Python",
    image: "python.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Pandas",
    image: "pandas.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "NumPy",
    image: "numpy.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Gemini AI",
    image: "gemini.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 65,
    height: 65,
  },
] as const;

// Backward-compatible exports without any duplicate entries
export const SKILL_DATA = BI_SKILLS;
export const FRONTEND_SKILL = DATABASE_SKILLS;
export const BACKEND_SKILL = ANALYTICS_AI_SKILLS;
export const FULLSTACK_SKILL = [] as const;
export const OTHER_SKILL = [] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/subodh-kumar-3520503ba/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/subodhdataworks",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:subodh.dataworks@gmail.com",
  },
] as const;

export const PROJECTS = [
  {
    title: "PhonePe Payment Analytics Dashboard",
    description:
      "Interactive Power BI dashboard analyzing 288K+ digital transactions worth ₹3B across 108K unique users (96% success rate). Designed time-intelligence DAX measures, loan & service value distributions, age-segment analysis, and weekday vs. weekend transaction KPIs.",
    image: "/projects/phonepe-analytics.jpg",
    link: "https://github.com/subodhdataworks/PhonePe-Payment-Analytics-PowerBI",
    tags: ["Power BI", "DAX", "Power Query", "SQL"],
    metric: "₹3B Volume • 288K Txns • 96% Success",
  },
  {
    title: "Starbucks Beverage Analytics Dashboard",
    description:
      "Comprehensive nutritional and beverage analytics platform built with Power Query and DAX. Analyzed 33 beverage categories, evaluated calorie counts (avg 193.87 kcal), sugar content (avg 32.96g), and caffeine concentration (avg 81.35 mg) with global presence maps and Top 5 visual highlights.",
    image: "/projects/starbucks-analytics.jpg",
    link: "https://github.com/subodhdataworks/-Starbucks-Beverage-Analytics-Dashboard-Power-BI",
    tags: ["Power BI", "Power Query", "DAX", "Excel"],
    metric: "33 Beverages • Nutrition KPIs • Global Map",
  },
  {
    title: "NeuroSathi - AI Innovation (2nd Prize Winner)",
    description:
      "Award-winning AI solution developed as a core member of Team Psytech, securing 2nd Prize at the AI Innovation Challenge (2026). Engineered end-to-end data pipelines, exploratory analysis, and predictive model inference in Python to empower neurodivergent minds.",
    image: "/projects/neurosathi-award.jpg",
    link: "https://lnkd.in/p/d66am9pf",
    tags: ["Python", "Machine Learning", "AI Engineering", "Team Psytech"],
    metric: "🏆 2nd Prize • Team Psytech • Official Post",
  },
] as const;

export const EXPERIENCES = [
  {
    role: "Data Analytics Intern",
    company: "Codec Technologies",
    location: "Remote",
    period: "Apr 2026 - Jul 2026",
    type: "Internship",
    achievements: [
      "Built 3 interactive Power BI dashboards using SQL, Excel, and Power Query, centralizing business performance and KPI tracking for stakeholders.",
      "Developed 10+ reusable DAX measures and standardized datasets through SQL, Excel, and Power Query, improving data consistency and reducing repetitive reporting work.",
      "Conducted exploratory data analysis (EDA) to extract key business trends, enhancing executive decision-making speed.",
    ],
    skills: ["Power BI", "DAX", "SQL", "Excel", "Power Query"],
  },
  {
    role: "Operations, Procurement & Reporting",
    company: "Ganesh Foundry & Castings Limited",
    location: "Muzaffarpur, India",
    period: "May 2020 - Dec 2025",
    type: "Full-time (5+ Years)",
    achievements: [
      "Managed 5+ years of purchase, sales, inventory, and operational data in Google Sheets, maintaining daily/monthly MIS reports and dashboards for management analysis.",
      "Tracked 170+ tonnes/day of Furnace production and 120+ tonnes/day of Rolling Mill production, recording production, consumption, scrap, stock movement, and reconciliation.",
      "Processed and monitored 100+ tonnes/day of finished-goods dispatches, maintaining party-wise, truck-wise, weight-wise, and product-wise records for TMT Bars and Square Patti.",
      "Recorded and reconciled ₹6.5+ lakh in daily cash transactions, while maintaining Scrap and Sponge Iron purchases, advances, supplier payments, freight, diesel, and other operational expenses.",
    ],
    skills: ["MIS Reporting", "Google Sheets", "Inventory Analytics", "Reconciliation", "Process Optimization"],
  },
] as const;

export const EDUCATION = [
  {
    degree: "Master of Science, Computer Science - Machine Learning & AI Engineering",
    institution: "AlmaBetter / Woolf University",
    year: "2026",
    badge: "Specialized in AI & ML",
  },
  {
    degree: "Master of Science, Information Technology",
    institution: "Sikkim Manipal University",
    year: "2017",
    badge: "Core IT Foundations",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    date: "09/2026",
    link: "https://www.linkedin.com/in/subodh-kumar-3520503ba/details/certifications/",
    image: "/certificates/microsoft.svg",
    highlight: true,
  },
  {
    title: "Professional Certification in Data Analytics & Business Intelligence",
    issuer: "AlmaBetter",
    date: "2026",
    link: "https://www.linkedin.com/in/subodh-kumar-3520503ba/details/certifications/",
    image: "/certificates/almabetter.svg",
    highlight: false,
  },
  {
    title: "GenAI-Powered Data Analytics Job Simulation",
    issuer: "Deloitte Australia & Tata",
    date: "2026",
    link: "https://www.linkedin.com/in/subodh-kumar-3520503ba/details/certifications/",
    image: "/certificates/deloitte.svg",
    highlight: false,
  },
  {
    title: "Working Effectively with Stakeholders",
    issuer: "Google / Coursera",
    date: "Aug 2026",
    link: "https://www.linkedin.com/in/subodh-kumar-3520503ba/details/certifications/",
    image: "/certificates/google.svg",
    highlight: false,
  },
  {
    title: "2nd Prize Winner - AI Innovation Challenge (NeuroSathi)",
    issuer: "AI Innovation Challenge / Team Psytech",
    date: "2026",
    link: "https://lnkd.in/p/d66am9pf",
    image: "/certificates/neurosathi-award.jpg",
    highlight: true,
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/subodh-kumar-3520503ba/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/subodhdataworks",
      },
      {
        name: "Portfolio",
        icon: null,
        link: "https://subodhdataworks.github.io/my-portfolio/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "subodh.dataworks@gmail.com",
        icon: FaEnvelope,
        link: "mailto:subodh.dataworks@gmail.com",
      },
      {
        name: "+91 8210778369",
        icon: FaPhone,
        link: "tel:+918210778369",
      },
      {
        name: "New Delhi, India",
        icon: null,
        link: "#about-me",
      },
    ],
  },
  {
    title: "Specializations",
    data: [
      {
        name: "Power BI & DAX Modeling",
        icon: null,
        link: "#skills",
      },
      {
        name: "SQL & Relational ETL",
        icon: null,
        link: "#skills",
      },
      {
        name: "Executive KPI Reporting",
        icon: null,
        link: "#projects",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Credentials",
    link: "#credentials",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/subodhdataworks",
  linkedin: "https://www.linkedin.com/in/subodh-kumar-3520503ba/",
  portfolio: "https://subodhdataworks.github.io/my-portfolio/",
  email: "mailto:subodh.dataworks@gmail.com",
  phone: "tel:+918210778369",
};

import type { Portfolio } from '../types/portfolio'

// Your content lives here. Null values and empty arrays display labeled placeholders.
export const portfolio: Portfolio = {
  name: 'Javie Alfaro',
  initials: 'JA',
  role: 'Software Developer · Data Analyst',
  headline: { lead: 'Building with software,', accent: 'data & cloud.' },
  introduction:
    'I’m a Computer Science student at Holy Angel University building mobile and web applications and working with data and machine learning. I’m looking for an internship where I can contribute my software development and analytical skills.',
  about: [
    'My projects span fruit ripeness classification, productivity tools, and personal finance. For my undergraduate thesis, Chami, I led data preparation and model training and co-developed an Android app with on-device inference.',
    'During my internship at ISU-PAGASA, I recorded weather observations, prepared daily reports, and validated observational records. That experience complements my work turning data into useful applications.',
  ],
  education:
    'Bachelor of Science in Computer Science · Holy Angel University · 2023–Expected 2027',
  educationHonors: ['Dean’s Lister six times', 'President’s Lister once'],
  workExperience: [
    {
      id: 'isu-pagasa',
      role: 'Intern',
      organization: 'ISU-PAGASA Agrometeorological and Radar Station',
      dates: 'March–May 2023',
      highlights: [
        'Monitored and recorded precipitation, temperature, humidity, and atmospheric pressure at three-hour intervals using station instruments and radar systems.',
        'Prepared daily meteorological reports over 12 weeks, consolidating observations for station monitoring and archival documentation.',
        'Maintained observational databases and validated 200+ records for accuracy, completeness, and consistency.',
      ],
    },
  ],
  certifications: [
    {
      id: 'data-analytics',
      name: 'Data Analytics Essentials',
      issuer: 'Cisco',
      date: 'April 2026',
    },
    {
      id: 'ccna',
      name: 'CCNA: Introduction to Networks',
      issuer: 'Cisco',
      date: 'April 2026',
    },
    {
      id: 'aws-cloud',
      name: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'AWS',
      date: 'March 2026',
    },
    {
      id: 'cyber-threat',
      name: 'Cyber Threat Management',
      issuer: 'Cisco',
      date: 'December 2025',
    },
    {
      id: 'endpoint',
      name: 'Endpoint Security',
      issuer: 'Cisco',
      date: 'August 2025',
    },
    {
      id: 'relational-db',
      name: 'Relational Database V8',
      issuer: 'freeCodeCamp',
      date: 'February 2025',
    },
    {
      id: 'javascript',
      name: 'JavaScript Essentials 1',
      issuer: 'Cisco',
      date: 'October 2024',
    },
    {
      id: 'responsive-design',
      name: 'Legacy Responsive Web Design V8',
      issuer: 'freeCodeCamp',
      date: 'September 2024',
    },
    {
      id: 'comptia',
      name: 'CompTIA IT Fundamentals+ (ITF+)',
      issuer: 'CompTIA',
      date: 'November 2023',
    },
    {
      id: 'python',
      name: 'Python Essentials 1',
      issuer: 'Cisco',
      date: 'September 2023',
    },
  ],
  location: null,
  email: 'javiealfaro1@gmail.com',
  githubUrl: 'https://github.com/javieAlfaro',
  linkedinUrl: 'https://www.linkedin.com/in/javie-alfaro/',
  resume: { url: '/resume.pdf', fileName: 'Javie_Alfaro_Resume.pdf' },
  skills: [
    {
      id: 'languages',
      title: 'Languages',
      description: 'The foundations I build with.',
      skills: ['Python', 'Java', 'JavaScript', 'Dart', 'SQL', 'HTML', 'CSS'],
    },
    {
      id: 'development',
      title: 'Software development',
      description: 'From an idea to an interface.',
      skills: ['Flutter', 'React', 'Node.js', 'Express'],
    },
    {
      id: 'data',
      title: 'Data & AI',
      description: 'Finding meaning in information.',
      skills: ['TensorFlow', 'PyTorch', 'PostgreSQL', 'Supabase', 'Firebase'],
    },
    {
      id: 'tools',
      title: 'Tools & workflow',
      description: 'How I work, test, and collaborate.',
      skills: [
        'Amazon AWS',
        'Git',
        'GitHub',
        'Render',
        'Vercel',
        'Linux (CLI)',
        'Figma',
        'OpenAI Codex',
        'Google Antigravity',
      ],
    },
  ],
  projects: [
    {
      id: 'chami',
      title: 'Chami',
      category: 'Mobile & AI',
      description:
        'Co-developed an Android fruit ripeness classification app for my undergraduate thesis, with offline inference for three fruit varieties and shelf-life guidance. Led preparation of 1,725 images and model training, achieving a 97.67% F1-score and 97.81% precision on test data. Evaluated the app through 50+ public usability tests and five software and AI experts. Implemented scan history, batch tracking, SQLite storage, and Supabase synchronization; all 18 functional tests passed.',
      technologies: [
        'Flutter',
        'Dart',
        'TensorFlow Lite',
        'SQLite',
        'Supabase',
        'MobileNetV4',
      ],
    },
    {
      id: 'alfafocus',
      title: 'AlfaFocus',
      category: 'Web development',
      description:
        'Built a full-stack productivity dashboard combining task management, nested projects, calendar planning, and habit tracking. Developed a drift-free timer with three focus modes, automatic session logging, and productivity heat maps. Created a 17-endpoint Express REST API with PostgreSQL, JWT authentication, and user-specific workspaces.',
      technologies: [
        'React',
        'JavaScript',
        'Tailwind CSS',
        'Express',
        'PostgreSQL',
      ],
    },
    {
      id: 'onlyfunds',
      title: 'OnlyFunds',
      category: 'Mobile development',
      description:
        'Developed an Android budgeting app for income and expense tracking, savings goals, and linear regression-based forecasting using up to six months of transaction history. Integrated Firebase Authentication and Cloud Firestore for real-time synchronization of balances, monthly totals, and transaction histories.',
      technologies: [
        'Flutter',
        'Dart',
        'Firebase Authentication',
        'Cloud Firestore',
      ],
    },
  ],
}

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof navigation)[number]['id']

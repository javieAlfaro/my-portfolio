import type { Portfolio } from '../types/portfolio'

// Your content lives here. Null values and empty arrays display labeled placeholders.
// The introduction below is editable draft copy, not a credential.
export const portfolio: Portfolio = {
  name: 'Javie Alfaro',
  initials: 'JA',
  role: 'Software Developer · Data Analyst',
  headline: { lead: 'Building with software,', accent: 'data & cloud.' },
  introduction:
    'I’m a Computer Science student exploring software engineering, software development, and data science & AI. I’m looking for an internship where I can learn, contribute, and turn ideas into something useful.',
  about: [], // Add 1–3 short paragraphs about your interests and approach to solving problems.
  education: 'B.S. Computer Science · Holy Angel University · Expected 2027',
  location: null,
  email: 'javiealfaro1@gmail.com',
  githubUrl: 'https://github.com/javieAlfaro',
  linkedinUrl: 'https://www.linkedin.com/in/javie-alfaro/',
  // Put your real PDF in public/resume.pdf, then replace null with:
  // { url: '/resume.pdf', fileName: 'Your-Name-Resume.pdf' }
  resume: null,
  skills: [
    {
      id: 'languages',
      title: 'Languages',
      description: 'The foundations I build with.',
      skills: [],
    },
    {
      id: 'development',
      title: 'Software development',
      description: 'From an idea to an interface.',
      skills: [],
    },
    {
      id: 'data',
      title: 'Data & AI',
      description: 'Finding meaning in information.',
      skills: [],
    },
    {
      id: 'tools',
      title: 'Tools & workflow',
      description: 'How I work, test, and collaborate.',
      skills: [],
    },
  ],
  // Add only your real projects. See README.md for a complete object example.
  projects: [],
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

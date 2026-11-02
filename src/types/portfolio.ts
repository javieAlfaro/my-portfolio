export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  image?: { src: string; alt: string }
}

export interface WorkExperience {
  id: string
  role: string
  organization: string
  dates: string
  highlights: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
}

export interface Portfolio {
  name: string
  initials: string
  role: string
  headline: { lead: string; accent: string }
  introduction: string
  about: string[]
  education: string | null
  educationHonors: string[]
  workExperience: WorkExperience[]
  certifications: Certification[]
  location: string | null
  email: string | null
  githubUrl: string | null
  linkedinUrl: string | null
  resume: { url: string; fileName: string } | null
  skills: SkillCategory[]
  projects: Project[]
}

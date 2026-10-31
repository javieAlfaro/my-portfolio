import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      tabIndex={-1}
      className="section page-container"
    >
      <Reveal>
        <SectionHeading
          number="01"
          label="Experience"
          title="Learning through experience."
          description="My work history and education."
        />
      </Reveal>
      <div className="experience-list">
        <Reveal className="experience-entry">
          <BriefcaseBusiness
            size={23}
            className="text-accent"
            aria-hidden="true"
          />
          <div>
            <h3>Work experience</h3>
            <p className="content-label">TO ADD</p>
            <p>[Role · Organization · Dates]</p>
            <p className="content-note">
              [Your responsibilities, contributions, and achievements.]
            </p>
          </div>
        </Reveal>
        <Reveal className="experience-entry">
          <GraduationCap size={23} className="text-accent" aria-hidden="true" />
          <div>
            <h3>Education</h3>
            <p>{portfolio.education ?? '[Degree · Institution · Dates]'}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

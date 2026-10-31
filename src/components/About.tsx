import { GraduationCap, MapPin } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      tabIndex={-1}
      className="section page-container"
    >
      <Reveal className="about-grid">
        <SectionHeading
          number="01"
          label="About"
          title="A curious mind. A builder’s mindset."
        />
        <div className="about-copy">
          {portfolio.about.length ? (
            portfolio.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <>
              <p className="content-label">YOUR STORY GOES HERE</p>
              <p>
                What draws you to computer science? Share the questions that
                interest you, what motivates you to build, and how you approach
                an unfamiliar problem.
              </p>
              <p>
                Make it personal: a small moment, a challenging class, or an
                idea you couldn’t leave alone is a good place to start.
              </p>
            </>
          )}
          <div className="about-details">
            <p>
              <GraduationCap size={17} aria-hidden="true" />
              {portfolio.education ?? '[Degree · University · Graduation year]'}
            </p>
            <p>
              <MapPin size={16} aria-hidden="true" />
              {portfolio.location ?? '[Your location]'}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

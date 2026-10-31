import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  ExternalLink,
  FolderOpen,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'
import type { Project } from '../types/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function ProjectLinks({ project }: { project?: Project }) {
  return (
    <div className="project-links">
      {project?.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code (opens in a new tab)`}
        >
          <Code2 size={16} aria-hidden="true" />
          Source
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      ) : (
        <span aria-disabled="true">
          <Code2 size={16} aria-hidden="true" />
          Source unavailable
        </span>
      )}
      {project?.demoUrl ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} demo (opens in a new tab)`}
        >
          <ExternalLink size={15} aria-hidden="true" />
          Live demo
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      ) : (
        <span aria-disabled="true">
          <ExternalLink size={15} aria-hidden="true" />
          Demo unavailable
        </span>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-image">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            width="720"
            height="420"
          />
        </div>
      ) : (
        <div className="project-cover">
          <FolderOpen size={46} strokeWidth={1} aria-hidden="true" />
          <span className="font-mono">{project.category}</span>
        </div>
      )}
      <div className="project-body">
        <p className="eyebrow text-accent">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tech-list" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

function ProjectPlaceholder({ secondary = false }: { secondary?: boolean }) {
  return (
    <article className="project-card placeholder-card">
      <div
        className={`placeholder-cover ${secondary ? 'placeholder-cover-data' : ''}`}
        aria-hidden="true"
      >
        {secondary ? (
          <div className="chart-sketch">
            {[35, 57, 42, 76, 62, 90, 72].map((height, i) => (
              <span key={i} style={{ height: `${height}%` }} />
            ))}
          </div>
        ) : (
          <div className="interface-sketch">
            <div className="sketch-top">
              <i />
              <i />
              <i />
            </div>
            <div className="sketch-layout">
              <span />
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        )}
        <span className="cover-caption">A SPACE FOR YOUR NEXT IDEA</span>
      </div>
      <div className="project-body">
        <p className="eyebrow text-accent">PROJECT PLACEHOLDER</p>
        <h3>
          {secondary
            ? 'Another idea worth sharing.'
            : 'Your first project goes here.'}
        </h3>
        <p className="project-description">
          {secondary
            ? 'A class project, a personal experiment, or an exploration with data. Add the work that tells your story.'
            : 'What did you build? What problem did it solve? Add a real project and share your approach, decisions, and what you learned.'}
        </p>
        <p className="placeholder-tech">
          <Braces size={14} aria-hidden="true" />
          Technologies to be added
        </p>
        <ProjectLinks />
      </div>
    </article>
  )
}

export function Projects() {
  const [category, setCategory] = useState('All')
  const categories = [
    'All',
    ...new Set(portfolio.projects.map((project) => project.category)),
  ]
  const visibleProjects = portfolio.projects.filter(
    (project) => category === 'All' || project.category === category,
  )

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      tabIndex={-1}
      className="section page-container"
    >
      <Reveal>
        <div className="section-heading-row">
          <SectionHeading
            number="03"
            label="Projects"
            title="Ideas, put into practice."
            description="A place for the things I build, explore, and learn along the way."
          />
          <span className="section-note">
            SELECTED WORK <ArrowDownRight size={22} aria-hidden="true" />
          </span>
        </div>
        {portfolio.projects.length === 0 && (
          <p className="content-note">
            The project cards below are editable placeholders. Real work will be
            added here.
          </p>
        )}
        {categories.length > 2 && (
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </Reveal>
      <div className="project-list">
        {portfolio.projects.length > 0 ? (
          visibleProjects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))
        ) : (
          <>
            <Reveal>
              <ProjectPlaceholder />
            </Reveal>
            <Reveal>
              <ProjectPlaceholder secondary />
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}

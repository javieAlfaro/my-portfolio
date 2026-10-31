import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Braces,
  Database,
  FileText,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'

function InterestMap() {
  return (
    <div
      className="interest-map"
      role="img"
      aria-label="Areas of interest: software engineering, software development, and data science and AI"
    >
      <div className="map-topline">
        <span className="font-mono">EXPLORING THE POSSIBILITIES</span>
        <span className="map-corner">↗</span>
      </div>
      <div className="map-diagram" aria-hidden="true">
        <svg viewBox="0 0 360 220" fill="none" className="map-lines">
          <path
            d="M180 37V91M180 91H70V159M180 91H290V159"
            stroke="currentColor"
          />
          <path
            d="M70 195V211H290V195"
            stroke="currentColor"
            strokeDasharray="3 5"
          />
          <circle
            cx="180"
            cy="91"
            r="4"
            fill="var(--color-accent)"
            stroke="var(--color-canvas)"
            strokeWidth="3"
          />
        </svg>
        <div className="map-root">
          <span className="text-accent">&lt;</span> curiosity{' '}
          <span className="text-accent">/&gt;</span>
        </div>
        <div className="map-node map-node-software">
          <Braces size={22} strokeWidth={1.3} />
          <span>SOFTWARE</span>
        </div>
        <div className="map-node map-node-data">
          <Database size={21} strokeWidth={1.3} />
          <span>DATA & AI</span>
        </div>
      </div>
      <div className="map-bottomline">
        <span>One idea. Many ways to build.</span>
        <ArrowDownRight size={17} aria-hidden="true" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      tabIndex={-1}
      className="hero page-container"
    >
      <Reveal className="hero-main">
        <p className="eyebrow text-accent">About</p>
        <p className="eyebrow">
          <span className="status-dot" />
          OPEN TO INTERNSHIP OPPORTUNITIES
        </p>
        <p className="hero-intro">
          Hi, I’m <span className="text-primary">{portfolio.name}</span>
          <span className="text-accent">.</span>
        </p>
        <h1 id="hero-heading">
          {portfolio.headline.lead}
          <br />
          <span className="text-accent">{portfolio.headline.accent}</span>
        </h1>
        <p className="hero-description">{portfolio.introduction}</p>
        <div className="about-copy merged-about">
          {portfolio.about.length ? (
            portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))
          ) : (
            <p className="content-note">
              [Your story: interests, motivation, and approach to building.]
            </p>
          )}
          {portfolio.location && <p>{portfolio.location}</p>}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#resume">
            <FileText size={16} aria-hidden="true" />
            Resume
          </a>
        </div>
      </Reveal>
      <Reveal className="hero-aside">
        <InterestMap />
      </Reveal>
      <div className="hero-bottom">
        <span className="font-mono">SOFTWARE · DATA · PROBLEM SOLVING</span>
        <a href="#experience">
          My experience & education <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

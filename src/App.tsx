import { ArrowUp } from 'lucide-react'
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { portfolio } from './data/portfolio'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { CursorSpotlight } from './components/CursorSpotlight'

const currentYear = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  timeZone: 'Asia/Manila',
}).format(new Date())

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <CursorSpotlight />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="portfolio-shell">
          <Navbar />
          <div className="reading-column">
            <main id="main-content" tabIndex={-1}>
              <Hero />
              <Experience />
              <Skills />
              <Projects />
              <Resume />
              <Contact />
            </main>
            <footer className="page-container footer">
              <p>
                © {currentYear} {portfolio.name}
                <span className="footer-divider">/</span>Built with curiosity.
              </p>
              <a href="#about">
                Back to top <ArrowUp size={14} aria-hidden="true" />
              </a>
            </footer>
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}

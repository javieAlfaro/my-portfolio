import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Mail, Menu, X } from 'lucide-react'
import { Github, Linkedin } from './Contact'
import { ThemeToggle } from './ThemeToggle'
import { SoundToggle } from './SoundToggle'
import { navigation, portfolio } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const rail = useRef<HTMLElement>(null)
  const [canStick, setCanStick] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const activeSection = useActiveSection()

  useEffect(() => {
    const element = rail.current
    if (!element) return
    const update = () =>
      setCanStick(element.offsetHeight + 96 <= window.innerHeight)
    const observer = new ResizeObserver(update)
    observer.observe(element)
    window.addEventListener('resize', update)
    update()
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (media.matches) setMenuOpen(false)
    }
    media.addEventListener('change', closeOnDesktop)
    return () => media.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header
      ref={rail}
      className={`site-header ${canStick ? 'rail-sticky' : ''}`}
    >
      <nav
        aria-label="Main navigation"
        className="page-container nav-inner"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && menuOpen) {
            setMenuOpen(false)
            menuButton.current?.focus()
          }
        }}
      >
        <a
          className="wordmark"
          href="#about"
          aria-label="Portfolio home"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/ja-logo.png" alt="" width="44" height="44" />
        </a>
        <div className="rail-identity">
          <p className="rail-name">{portfolio.name}</p>
          <p className="rail-role">{portfolio.role}</p>
        </div>
        <div className="desktop-navigation">
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link"
              aria-current={activeSection === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Let’s connect <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <div className="rail-socials" aria-label="Contact links">
          {portfolio.githubUrl && (
            <a
              href={portfolio.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <Github size={20} aria-hidden="true" />
            </a>
          )}
          {portfolio.linkedinUrl && (
            <a
              href={portfolio.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
          )}
          {portfolio.email && (
            <a href={`mailto:${portfolio.email}`} aria-label="Email">
              <Mail size={20} aria-hidden="true" />
            </a>
          )}
        </div>
        <div
          className="rail-controls"
          role="group"
          aria-label="Appearance and sound"
        >
          <ThemeToggle />
          <SoundToggle />
        </div>
        <button
          ref={menuButton}
          type="button"
          className="icon-button menu-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? 'mobile-navigation' : undefined}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" size={21} />
          ) : (
            <Menu aria-hidden="true" size={21} />
          )}
        </button>
        {menuOpen && (
          <div id="mobile-navigation" className="mobile-navigation">
            {navigation.map(({ id, label }, index) => (
              <a
                key={id}
                href={`#${id}`}
                className="mobile-nav-link"
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-mono text-xs text-muted">0{index}</span>
                {label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

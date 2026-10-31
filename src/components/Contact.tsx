import type { SVGProps } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type BrandIconProps = SVGProps<SVGSVGElement> & { size?: number }

export function Github({ size = 21, ...props }: BrandIconProps) {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 .5a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 6.006 0c2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.294c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .5Z" />
    </svg>
  )
}

export function Linkedin({ size = 21, ...props }: BrandIconProps) {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M20.447 2H3.553C2.695 2 2 2.678 2 3.514v16.972C2 21.322 2.695 22 3.553 22h16.894c.858 0 1.553-.678 1.553-1.514V3.514C22 2.678 21.305 2 20.447 2ZM7.93 18.75H4.97V9.205h2.96v9.545ZM6.45 7.9a1.716 1.716 0 1 1 0-3.432 1.716 1.716 0 0 1 0 3.432Zm12.3 10.85h-2.96v-4.642c0-1.107-.022-2.53-1.542-2.53-1.543 0-1.779 1.205-1.779 2.45v4.722H9.51V9.205h2.84v1.304h.04c.395-.75 1.361-1.542 2.8-1.542 2.995 0 3.56 1.972 3.56 4.537v5.246Z" />
    </svg>
  )
}

export function Contact() {
  const contacts = [
    {
      label: 'Email',
      Icon: Mail,
      value: portfolio.email,
      url: portfolio.email ? `mailto:${portfolio.email}` : null,
      placeholder: '[Your email address]',
    },
    {
      label: 'GitHub',
      Icon: Github,
      value: portfolio.githubUrl ? 'Explore my repositories' : null,
      url: portfolio.githubUrl,
      placeholder: '[Your GitHub profile]',
    },
    {
      label: 'LinkedIn',
      Icon: Linkedin,
      value: portfolio.linkedinUrl ? 'Connect with me' : null,
      url: portfolio.linkedinUrl,
      placeholder: '[Your LinkedIn profile]',
    },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      tabIndex={-1}
      className="section page-container contact-section"
    >
      <Reveal className="contact-grid">
        <div>
          <SectionHeading
            number="05"
            label="Contact"
            title="Good things start with a conversation."
            description="Have an internship opportunity, a project in mind, or a question? I’d love to hear from you."
          />
          <span className="contact-signoff">
            <Mail size={17} strokeWidth={1.4} aria-hidden="true" />
            Let’s build something thoughtful.
          </span>
        </div>
        <div className="contact-links">
          {contacts.map((contact) =>
            contact.url ? (
              <a
                key={contact.label}
                href={contact.url}
                target={contact.label === 'Email' ? undefined : '_blank'}
                rel={
                  contact.label === 'Email' ? undefined : 'noopener noreferrer'
                }
                aria-label={`${contact.label}: ${contact.value}${contact.label === 'Email' ? '' : ' (opens in a new tab)'}`}
              >
                <contact.Icon
                  className="contact-icon"
                  size={21}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </span>
                <ArrowUpRight size={22} strokeWidth={1.4} aria-hidden="true" />
              </a>
            ) : (
              <div key={contact.label} className="contact-placeholder">
                <contact.Icon
                  className="contact-icon"
                  size={21}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.placeholder}</span>
                </span>
                <span className="font-mono text-[10px] text-muted">TO ADD</span>
              </div>
            ),
          )}
        </div>
      </Reveal>
    </section>
  )
}

import { useState } from 'react'
import { ArrowUpRight, Download, Eye, FileText, X } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Resume() {
  const [showPreview, setShowPreview] = useState(false)
  const { resume } = portfolio

  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      tabIndex={-1}
      className="section page-container"
    >
      <Reveal>
        <div className="resume-panel">
          <div>
            <SectionHeading
              number="04"
              label="Resume"
              title="The short version, on paper."
              description={
                resume
                  ? 'A closer look at my education, projects, and experience.'
                  : 'A place for my education, projects, and experience. A resume PDF will be added here.'
              }
            />
            {resume ? (
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="button button-primary"
                  aria-expanded={showPreview}
                  aria-controls={showPreview ? 'resume-preview' : undefined}
                  onClick={() => setShowPreview((shown) => !shown)}
                >
                  {showPreview ? (
                    <X size={17} aria-hidden="true" />
                  ) : (
                    <Eye size={17} aria-hidden="true" />
                  )}
                  {showPreview ? 'Close preview' : 'Preview resume'}
                </button>
                <a
                  className="button button-secondary"
                  href={resume.url}
                  download={resume.fileName}
                >
                  <Download size={16} aria-hidden="true" />
                  Download PDF
                </a>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="button button-primary"
                    disabled
                  >
                    <Eye size={16} aria-hidden="true" />
                    Preview resume
                  </button>
                  <button
                    type="button"
                    className="button button-secondary"
                    disabled
                  >
                    <Download size={16} aria-hidden="true" />
                    Download PDF
                  </button>
                </div>
                <p className="resume-note">
                  <FileText size={13} aria-hidden="true" />
                  PDF not added yet
                </p>
              </>
            )}
          </div>
          <div className="resume-paper" aria-hidden="true">
            <span className="paper-label">{portfolio.name}</span>
            <span className="paper-subtitle">{portfolio.role}</span>
            <div className="paper-rule" />
            <span className="paper-line paper-line-short" />
            <span className="paper-line" />
            <span className="paper-line" />
            <div className="paper-rule" />
            <span className="paper-line paper-line-short" />
            <span className="paper-line" />
            <span className="paper-line" />
            <div className="paper-stamp">
              <FileText size={13} />
              {resume ? 'RESUME / PDF' : 'YOUR RESUME / PDF'}
            </div>
          </div>
        </div>
        {resume && showPreview && (
          <div id="resume-preview" className="resume-preview">
            <div className="preview-toolbar">
              <span className="font-mono text-xs">RESUME PREVIEW</span>
              <a href={resume.url} target="_blank" rel="noopener noreferrer">
                Open PDF in a new tab{' '}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <p className="pdf-fallback">
              If your browser cannot display the PDF, use the open-in-tab or
              download link.
            </p>
            <iframe
              title={`${portfolio.name} resume PDF`}
              src={resume.url}
              loading="lazy"
            />
          </div>
        )}
      </Reveal>
    </section>
  )
}

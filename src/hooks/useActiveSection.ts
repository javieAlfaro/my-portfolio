import { useEffect, useState } from 'react'
import { navigation, type SectionId } from '../data/portfolio'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  useEffect(() => {
    const sections = navigation.flatMap(({ id }) => {
      const element = document.getElementById(id)
      return element ? [element] : []
    })
    let frame: number | null = null

    function update() {
      frame = null
      // The last section may not reach the reading line before the page ends.
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      const current = atBottom
        ? sections.at(-1)
        : [...sections]
            .reverse()
            .find(
              (section) =>
                section.getBoundingClientRect().top <= window.innerHeight * 0.4,
            )
      if (current) setActiveSection(current.id as SectionId)
    }

    function scheduleUpdate() {
      // Coalesce scroll events into one geometry check per animation frame.
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  return activeSection
}

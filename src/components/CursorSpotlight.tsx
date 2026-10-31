import { useEffect, useRef } from 'react'

export function CursorSpotlight() {
  const spotlight = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = spotlight.current
    if (!element) return

    const enabled = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    let frame: number | null = null
    let x = 0
    let y = 0

    function hide() {
      if (frame !== null) window.cancelAnimationFrame(frame)
      frame = null
      element!.style.opacity = '0'
    }

    function move(event: PointerEvent) {
      if (!enabled.matches || event.pointerType !== 'mouse') {
        hide()
        return
      }
      x = event.clientX
      y = event.clientY
      if (frame !== null) return
      frame = window.requestAnimationFrame(() => {
        element!.style.transform = `translate3d(${x}px, ${y}px, 0)`
        element!.style.opacity = '1'
        frame = null
      })
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', hide)
    window.addEventListener('blur', hide)
    window.addEventListener('keydown', hide)
    enabled.addEventListener('change', hide)
    return () => {
      hide()
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', hide)
      window.removeEventListener('blur', hide)
      window.removeEventListener('keydown', hide)
      enabled.removeEventListener('change', hide)
    }
  }, [])

  return <div ref={spotlight} className="cursor-spotlight" aria-hidden="true" />
}

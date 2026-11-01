import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function SoundToggle() {
  const [muted, setMuted] = useState(() => {
    try {
      return localStorage.getItem('portfolio-sound') !== 'on'
    } catch {
      return true
    }
  })
  const audio = useRef<AudioContext | null>(null)
  const lastSound = useRef(-Infinity)

  function playSound(navigation = false, hover = false) {
    try {
      // Hover alone cannot unlock browser audio; wait for an enabled click.
      if (hover && audio.current?.state !== 'running') return
      const context = audio.current ?? (audio.current = new AudioContext())
      if (context.state === 'suspended') void context.resume().catch(() => {})
      const now = context.currentTime
      if (now - lastSound.current < 0.07) return
      lastSound.current = now
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(
        hover ? 720 : navigation ? 660 : 480,
        now,
      )
      oscillator.frequency.exponentialRampToValueAtTime(
        hover ? 820 : navigation ? 880 : 320,
        now + (hover ? 0.04 : 0.09),
      )
      gain.gain.setValueAtTime(0, now)
      gain.gain.linearRampToValueAtTime(hover ? 0.012 : 0.035, now + 0.008)
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + (hover ? 0.06 : 0.12),
      )
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start(now)
      oscillator.stop(now + 0.13)
      oscillator.onended = () => {
        oscillator.disconnect()
        gain.disconnect()
      }
    } catch {
      /* Sound is optional on browsers without audio support. */
    }
  }

  useEffect(() => {
    if (muted) return
    function onClick(event: MouseEvent) {
      if (!event.isTrusted || !(event.target instanceof Element)) return
      const control = event.target.closest('a, button')
      if (
        !control ||
        control.hasAttribute('disabled') ||
        control.hasAttribute('data-sound-toggle')
      )
        return
      playSound(control.getAttribute('href')?.startsWith('#'))
    }
    document.addEventListener('click', onClick)
    function onHover(event: PointerEvent) {
      if (
        !event.isTrusted ||
        event.pointerType === 'touch' ||
        !(event.target instanceof Element)
      )
        return
      const control = event.target.closest('a, button')
      if (
        !control ||
        control.hasAttribute('disabled') ||
        control.getAttribute('aria-disabled') === 'true'
      )
        return
      // Ignore movement between an icon and its surrounding button.
      if (
        event.relatedTarget instanceof Node &&
        control.contains(event.relatedTarget)
      )
        return
      playSound(false, true)
    }
    document.addEventListener('pointerover', onHover)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('pointerover', onHover)
    }
  }, [muted])

  useEffect(
    () => () => {
      void audio.current?.close().catch(() => {})
    },
    [],
  )

  function toggleSound() {
    const next = !muted
    setMuted(next)
    try {
      localStorage.setItem('portfolio-sound', next ? 'off' : 'on')
    } catch {
      /* Works without storage. */
    }
    if (!next) playSound(true)
    else if (audio.current) void audio.current.suspend().catch(() => {})
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      data-sound-toggle
      onClick={toggleSound}
      aria-label={muted ? 'Enable sound effects' : 'Mute sound effects'}
      aria-pressed={!muted}
      title={muted ? 'Enable sound effects' : 'Mute sound effects'}
    >
      {muted ? (
        <VolumeX size={19} strokeWidth={1.6} aria-hidden="true" />
      ) : (
        <Volume2 size={19} strokeWidth={1.6} aria-hidden="true" />
      )}
    </button>
  )
}

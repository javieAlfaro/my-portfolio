import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'light' ? '#f8fafc' : '#0f172a')
    setTheme(next)
    try {
      localStorage.setItem('portfolio-theme', next)
    } catch {
      /* Theme still works when storage is unavailable. */
    }
  }
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={19} strokeWidth={1.6} aria-hidden="true" />
      ) : (
        <Moon size={19} strokeWidth={1.6} aria-hidden="true" />
      )}
    </button>
  )
}

import { useState } from 'react'
import { Terminal, Menu, X } from 'lucide-react'

const links = [
  { href: '#summary', label: 'summary' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 backdrop-blur bg-bg/85 border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="focus-ring flex items-center gap-2 font-mono text-sm text-ink"
        >
          <Terminal size={16} className="text-green" aria-hidden="true" />
          <span className="text-cyan">portfolio</span>
          <span className="text-ink-dim">:~$</span>
        </a>

        {/* Tablet and up: inline links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring font-mono text-xs text-ink-dim uppercase tracking-widest hover:text-cyan active:text-amber transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: disclosure menu */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="focus-ring md:hidden text-ink-dim hover:text-cyan active:text-amber transition-colors p-2 -mr-2"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <ul
          id="mobile-menu"
          className="md:hidden border-t border-border px-6 py-4 space-y-3 bg-bg"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring block font-mono text-sm text-ink-dim uppercase tracking-widest hover:text-cyan active:text-amber transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

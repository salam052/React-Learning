import { GraduationCap } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Education({ degree, institution, location }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl mx-auto px-6 sm:px-10 py-14 sm:py-20 border-t border-border`}
    >
      <SectionLabel id="education-heading">education</SectionLabel>
      <div className="flex items-start gap-3 border border-border bg-panel/40 px-5 py-5 max-w-xl">
        <GraduationCap size={20} className="text-cyan mt-0.5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-sans text-ink font-semibold">{degree}</p>
          <p className="font-sans text-ink-dim text-sm mt-1">
            {institution} <span className="mx-2 text-border">|</span> {location}
          </p>
        </div>
      </div>
    </section>
  )
}

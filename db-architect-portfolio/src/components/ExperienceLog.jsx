import { Briefcase } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import useReveal from '../hooks/useReveal.js'

export default function ExperienceLog({ entries }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl mx-auto px-6 sm:px-10 py-14 sm:py-20 border-t border-border`}
    >
      <SectionLabel id="experience-heading">migration_log.sql — work experience</SectionLabel>

      <ol className="space-y-10">
        {entries.map((entry, i) => (
          <li key={i} className="relative pl-6 border-l border-border">
            {/* Timeline marker — absolute positioning here is necessary to
                center the dot on the vertical connecting line. */}
            <span
              className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan"
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-ink-dim">{entry.range}</span>
              <h3 className="font-sans text-ink font-semibold">{entry.company}</h3>
              <span className="font-mono text-xs text-ink-dim">— {entry.location}</span>
            </div>
            {entry.title && (
              <p className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan mt-1.5 uppercase tracking-widest">
                <Briefcase size={12} aria-hidden="true" />
                {entry.title}
              </p>
            )}

            {entry.points.length > 0 && (
              <ul className="mt-4 space-y-2">
                {entry.points.map((point, j) => (
                  <li key={j} className="font-sans text-sm text-ink-dim leading-relaxed flex gap-3">
                    <span className="font-mono text-green shrink-0" aria-hidden="true">+</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {entry.note && (
              <p className="mt-3 font-sans text-sm text-ink-dim italic">{entry.note}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

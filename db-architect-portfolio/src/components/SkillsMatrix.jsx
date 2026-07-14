import { Database, Award } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import useReveal from '../hooks/useReveal.js'

export default function SkillsMatrix({ groups, certifications }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl mx-auto px-6 sm:px-10 py-14 sm:py-20 border-t border-border`}
    >
      <SectionLabel id="skills-heading">schema: skills</SectionLabel>

      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        {groups.map((group) => (
          <div key={group.table} className="border border-border bg-panel/40">
            <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-cyan uppercase tracking-widest">
                <Database size={13} aria-hidden="true" />
                {group.table}
              </span>
              <span className="font-mono text-[10px] text-ink-dim">
                {group.items.length} rows
              </span>
            </div>
            <ul className="divide-y divide-border">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-4 py-2.5 font-sans text-sm text-ink-dim hover:text-ink hover:bg-bg/50 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="font-mono text-xs text-ink-dim mt-12 sm:mt-14 mb-4 uppercase tracking-widest">
        <span className="text-green" aria-hidden="true">--</span> certifications
      </h3>
      <ul className="flex flex-wrap gap-3">
        {certifications.map((cert) => (
          <li key={cert}>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-amber border border-amber/40 px-3 py-2">
              <Award size={13} aria-hidden="true" />
              {cert}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

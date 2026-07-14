import SectionLabel from './SectionLabel.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Summary({ paragraphs, stats }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id="summary"
      aria-labelledby="summary-heading"
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl mx-auto px-6 sm:px-10 py-14 sm:py-20`}
    >
      <SectionLabel id="summary-heading">summary.md</SectionLabel>

      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        <div className="md:col-span-2 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="font-sans text-ink-dim text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:border-l md:border-border md:pl-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[11px] text-ink-dim uppercase tracking-widest">
                {stat.label}
              </dt>
              <dd className="font-mono text-xl sm:text-2xl md:text-3xl text-cyan mt-1">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

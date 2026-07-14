import { Mail, Linkedin, MapPin, Clock } from 'lucide-react'

export default function Hero({ name, role, location, years, email, linkedin }) {
  return (
    <header id="top" className="dot-grid">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32">
        <p className="font-mono text-xs text-ink-dim mb-6">
          <span className="text-green">$</span> connect --host=career --user=guest
        </p>

        <pre className="font-mono text-base sm:text-xl md:text-2xl leading-relaxed whitespace-pre-wrap">
          <span className="text-amber">SELECT</span>{' '}
          <span className="text-ink">*</span>{' '}
          <span className="text-amber">FROM</span>{' '}
          <span className="text-cyan">engineer</span>
          {'\n'}
          <span className="text-amber">WHERE</span>{' '}
          <span className="text-ink">name</span> = <span className="text-green">'{name}'</span>
          <span className="blink-cursor" aria-hidden="true"></span>
        </pre>

        <div className="mt-10 border border-border bg-panel/60 max-w-xl">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2555A]" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-green" aria-hidden="true" />
            <span className="font-mono text-[11px] text-ink-dim ml-2">result — 1 row</span>
          </div>
          <div className="px-5 py-5 sm:px-6 sm:py-6">
            <h1 className="text-ink text-2xl sm:text-3xl font-semibold">{name}</h1>
            <p className="text-cyan text-base sm:text-lg mt-1">{role}</p>

            <dl className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Location</dt>
                <MapPin size={14} className="text-ink-dim" aria-hidden="true" />
                <dd className="font-sans text-ink-dim text-sm">{location}</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Experience</dt>
                <Clock size={14} className="text-ink-dim" aria-hidden="true" />
                <dd className="font-sans text-ink-dim text-sm">{years}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={`mailto:${email}`}
                className="focus-ring inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-cyan text-cyan px-4 py-2 hover:bg-cyan hover:text-bg active:bg-amber active:border-amber active:text-bg transition-colors"
              >
                <Mail size={14} aria-hidden="true" />
                Email
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-border text-ink-dim px-4 py-2 hover:border-cyan hover:text-cyan active:border-amber active:text-amber transition-colors"
              >
                <Linkedin size={14} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

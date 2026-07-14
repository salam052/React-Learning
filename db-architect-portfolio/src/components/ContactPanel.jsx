import { Mail, Phone, Linkedin, Server } from 'lucide-react'
import SectionLabel from './SectionLabel.jsx'
import ContactForm from './ContactForm.jsx'
import useReveal from '../hooks/useReveal.js'

export default function ContactPanel({ email, phone, location, linkedin }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl mx-auto px-6 sm:px-10 py-14 sm:py-24 border-t border-border`}
    >
      <SectionLabel id="contact-heading">connection string</SectionLabel>

      <div className="border border-border bg-panel/60 px-5 py-6 sm:px-8 sm:py-8">
        <pre className="font-mono text-xs sm:text-sm md:text-base leading-loose whitespace-pre-wrap break-all">
          <span className="text-ink-dim">Server=</span>
          <span className="text-ink">{location}</span>
          <span className="text-ink-dim">;</span>
        </pre>

        <ul className="grid sm:grid-cols-3 gap-3 mt-2">
          <li>
            <a
              href={`mailto:${email}`}
              className="focus-ring flex items-center gap-2 border border-border px-3 py-2.5 text-sm text-ink-dim hover:border-cyan hover:text-cyan active:border-amber active:text-amber transition-colors"
            >
              <Mail size={14} aria-hidden="true" />
              <span className="truncate">{email}</span>
            </a>
          </li>
          <li>
            <a
              href={`tel:${phone}`}
              className="focus-ring flex items-center gap-2 border border-border px-3 py-2.5 text-sm text-ink-dim hover:border-cyan hover:text-cyan active:border-amber active:text-amber transition-colors"
            >
              <Phone size={14} aria-hidden="true" />
              <span className="truncate">{phone}</span>
            </a>
          </li>
          <li>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-2 border border-border px-3 py-2.5 text-sm text-ink-dim hover:border-cyan hover:text-cyan active:border-amber active:text-amber transition-colors"
            >
              <Linkedin size={14} aria-hidden="true" />
              <span className="truncate">LinkedIn</span>
            </a>
          </li>
        </ul>

        <p className="inline-flex items-center gap-1.5 font-mono text-xs text-green mt-6">
          <Server size={12} aria-hidden="true" />
          status: open to opportunities
        </p>

        <ContactForm />
      </div>
    </section>
  )
}

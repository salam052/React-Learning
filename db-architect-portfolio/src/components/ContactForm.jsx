import { useState } from 'react'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const initialForm = { name: '', email: '', message: '' }

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const isValid =
    form.name.trim().length > 1 && isValidEmail(form.email) && form.message.trim().length > 5

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (status === 'error' || status === 'success') setStatus('idle')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isValid || status === 'loading') return

    setStatus('loading')
    try {
      // Simulated network request — wire this up to a real endpoint
      // (Formspree, a serverless function, etc.) when deploying.
      await new Promise((resolve, reject) =>
        setTimeout(() => (Math.random() > 0.05 ? resolve() : reject()), 1200),
      )
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const fieldClasses =
    'focus-ring w-full bg-bg border border-border px-4 py-2.5 font-sans text-sm text-ink placeholder:text-ink-dim/60 hover:border-ink-dim focus:border-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

  const isSubmitting = status === 'loading'

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4" aria-describedby="form-status">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="font-mono text-[11px] text-ink-dim uppercase tracking-widest">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={isSubmitting}
            value={form.name}
            onChange={handleChange}
            className={`${fieldClasses} mt-1.5`}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-[11px] text-ink-dim uppercase tracking-widest">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isSubmitting}
            value={form.email}
            onChange={handleChange}
            className={`${fieldClasses} mt-1.5`}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[11px] text-ink-dim uppercase tracking-widest">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={isSubmitting}
          value={form.message}
          onChange={handleChange}
          className={`${fieldClasses} mt-1.5 resize-none`}
          placeholder="What are you looking to discuss?"
        />
      </div>

      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="focus-ring inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-cyan text-cyan px-5 py-2.5 hover:bg-cyan hover:text-bg active:bg-amber active:border-amber transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-cyan"
        >
          {isSubmitting ? (
            <Loader2 size={14} className="animate-spin" aria-hidden="true" />
          ) : (
            <Send size={14} aria-hidden="true" />
          )}
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>

        <p id="form-status" role="status" aria-live="polite" className="font-mono text-xs">
          {status === 'success' && (
            <span className="inline-flex items-center gap-1.5 text-green">
              <CheckCircle2 size={14} aria-hidden="true" />
              Message sent — thanks!
            </span>
          )}
          {status === 'error' && (
            <span className="inline-flex items-center gap-1.5 text-[#F2555A]">
              <AlertCircle size={14} aria-hidden="true" />
              Something went wrong — try again.
            </span>
          )}
        </p>
      </div>
    </form>
  )
}

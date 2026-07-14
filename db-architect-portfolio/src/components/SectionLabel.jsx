export default function SectionLabel({ children, id }) {
  return (
    <h2 id={id} className="font-mono text-xs text-ink-dim mb-4 uppercase tracking-widest">
      <span className="text-green" aria-hidden="true">--</span> {children}
    </h2>
  )
}

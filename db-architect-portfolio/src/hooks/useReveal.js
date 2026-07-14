import { useEffect, useRef, useState } from 'react'

// Adds the .is-visible class once a section scrolls into view.
// Kept as a single small hook so every section can opt in with one line,
// instead of copy-pasting IntersectionObserver setup in each component.
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

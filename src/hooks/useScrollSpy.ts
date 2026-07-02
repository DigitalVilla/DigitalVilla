import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view from a list of element ids.
 * Used to drive the active state of the process timeline.
 */
export function useScrollSpy(ids: string[], offset = 0.5): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: `-${offset * 100}% 0px -${(1 - offset) * 100}% 0px` }
    )

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids, offset])

  return active
}

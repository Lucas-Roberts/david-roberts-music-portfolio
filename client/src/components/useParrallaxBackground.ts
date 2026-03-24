import { useEffect } from "react"

export function useParallaxBackground(
  ref: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    let ticking = false

    const updateStyles = () => {
      const fromTop = window.scrollY
      const el = ref.current
      if (!el) return

      const baseZoom = 100
      const zoomAmount = fromTop / 20
      const newSize = baseZoom + zoomAmount

      el.style.backgroundSize = `${newSize}%`

      const blur = Math.min(fromTop / 100, 6)
      el.style.filter = `blur(${blur}px)`

      const opacity = Math.max(
        1 - (fromTop / document.body.scrollHeight) * 1.2,
        0
      )
      el.style.opacity = `${opacity}`
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateStyles()
          ticking = false
        })
        ticking = true
      }
    }

    updateStyles()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [ref])
}
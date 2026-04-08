import { useEffect, useState } from "react"

function ScrollIndicator() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHidden(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <span
      className={`
        material-icons
        absolute bottom-10 left-1/2 -translate-x-1/2
        scale-230
        transition-all duration-300
        animate-bounce
        sm:opacity-0
        ${hidden ? "opacity-0 translate-y-10" : "opacity-30"}
      `}
    >
      keyboard_double_arrow_down
    </span>
  )
}

export default ScrollIndicator
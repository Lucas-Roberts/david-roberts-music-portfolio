import { useEffect, useState } from "react"
import DownwardsArrowIcon from "../components/icons/DownwardsArrowIcon"
import ScrollIndicator from "../components/icons/Scroll_Indicator"

function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section
      id="Home"
      className="
        relative
        flex items-center justify-center
        w-full min-h-dvh
        text-white
        px-6 md:px-12 lg:px-20
        border-b border-white/10
        overflow-hidden
      "
    >
      {/* Content */}
      <div className="relative z-10 max-w-[100rem] px-[clamp(1rem,4vw,3rem)] w-full">

        <h1
          className={`
            font-semibold tracking-tight
            leading-[1.05]
            mb-6

            text-[clamp(2.5rem,5vw,4.2rem)]

            transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
        >
          Discover Your
          <span className="block text-white/70">
            Next Favorite Sound
          </span>
        </h1>

        <p
          className={`
            mb-10 max-w-xl
            text-[clamp(1rem,1.5vw,1.2rem)]
            text-white/70

            transition-all duration-[1200ms] delay-200 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
        >
          Explore my latest tracks and get in touch if you'd like to use my music in your next project.
        </p>

        <a
          href="#Music"
          className="
            group
            inline-flex items-center gap-2
            h-11 px-5

            rounded-md
            bg-[#FFC50F]
            text-black font-medium

            shadow-[0_6px_20px_rgba(255,197,15,0.35)]
            transition-all duration-300
            
            hover:shadow-[0_10px_30px_rgba(255,197,15,0.5)]

            
          "
        >
          My Tracks
          <span className="transition-transform duration-300 ">
            <DownwardsArrowIcon />
          </span>
        </a>
      </div>

      {/* Blob */}
      <div className="blob" />

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}

export default Hero




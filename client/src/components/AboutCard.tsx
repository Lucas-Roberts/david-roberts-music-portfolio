type AboutCardProps = {
  title: string
  description: string
}

function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div
      className="
        group
        relative
        h-full w-full
        rounded-lg
        overflow-hidden
        bg-white/5
        border border-white/10
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:-translate-y-2
        hover:border-white/20
      "
    >

      <div className="relative h-full flex flex-col justify-between p-[clamp(1.5rem,2vw,2.25rem)]">


        <div className="flex flex-col gap-2">

          {/* Micro label */}
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
            About
          </span>

          {/* Title */}
          <h3
            className="
              text-[clamp(1.6rem,2.5vw,2.2rem)]
              leading-tight
              tracking-tight
              text-white
              font-semibold
            "
          >
            {title}
          </h3>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6">



          {/* Description */}
          <p
            className="
              text-[clamp(0.95rem,1.4vw,1.05rem)]
              leading-relaxed
              text-white/90
              max-w-[90%]
              pt-2
              
            "
          >
            {description}
          </p>

        </div>

      </div>

      {/* Corner detail (subtle personality) */}
      <div className="absolute bottom-4 right-4 text-[#FFC50F] text-xs tracking-widest">
        ✦
      </div>
    </div>
  )
}

export default AboutCard
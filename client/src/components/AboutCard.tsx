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
        rounded-2xl
        overflow-hidden

        bg-gradient-to-b from-white/[0.04] to-transparent
        backdrop-blur-xl

        border border-white/10
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:-translate-y-2
        hover:border-white/20
      "
    >
      {/* Soft gradient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      </div>

      {/* Noise / texture layer (subtle premium feel) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-[clamp(1.5rem,2vw,2.25rem)]">

        {/* Top */}
        <div className="flex flex-col gap-4">
          
          {/* Micro label */}
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
            About
          </span>

          {/* Title */}
          <h3
            className="
              font-archivo
              text-[clamp(1.6rem,2.5vw,2.2rem)]
              leading-tight
              tracking-tight
              text-white
            "
          >
            {title}
          </h3>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6">

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/30 to-transparent" />

          {/* Description */}
          <p
            className="
              text-[clamp(0.95rem,1.4vw,1.05rem)]
              leading-relaxed
              text-white/65
              max-w-[90%]
            "
          >
            {description}
          </p>

        </div>

      </div>

      {/* Corner detail (subtle personality) */}
      <div className="absolute bottom-4 right-4 text-white/10 text-xs tracking-widest">
        ✦
      </div>
    </div>
  )
}

export default AboutCard
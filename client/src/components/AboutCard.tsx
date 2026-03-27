type AboutCardProps = {
  title: string
  description: string
}

function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div
      className="
        h-full w-full
        rounded-lg
        overflow-hidden

        bg-[#1c2024]/95
        border border-white/10

        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        transition-all duration-500 ease-out

        hover:-translate-y-2
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
      "
    >
      {/* Header */}
      <div
        className="
          font-archivo
          bg-[#FFC50F]
          text-black

          px-[clamp(1rem,2vw,1.5rem)]
          py-[clamp(0.75rem,1.5vw,1.25rem)]

          text-[clamp(1.5rem,2.5vw,2.25rem)]
          tracking-tight
        "
      >
        {title}
      </div>

      {/* Content */}
      <div
        className="
          px-[clamp(1rem,2vw,1.5rem)]
          py-[clamp(1.25rem,2vw,2rem)]

          text-[clamp(0.95rem,1.5vw,1.1rem)]
          leading-relaxed
          text-white/80
        "
      >
        {description}
      </div>
    </div>
  )
}

export default AboutCard
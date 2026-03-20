type AboutCardProps = {
  title: string,
  description: string
}

function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className="
      h-full w-full
      rounded-3xl
      p-[clamp(1.5rem,3vw,3rem)]
      bg-[#1c2024]/95
      border border-white/10
      text-white/80
    ">

      {/* 🔥 Responsive title */}
      <h2 className="font-archivo text-[clamp(1.75rem,3vw,2.5rem)] py-2">
        {title}
      </h2>

      {/* 🔥 Responsive text */}
      <p className="mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.95rem,1.5vw,1.125rem)] leading-relaxed">
        {description}
      </p>

    </div>
  )
}

export default AboutCard

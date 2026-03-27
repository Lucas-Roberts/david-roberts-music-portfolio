type AboutCardProps = {
  title: string
  description: string
}

function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div
      className="
        h-full
        w-full
        rounded-sm

        border border-white/10
        text-white/80
        transition-all duration-500 ease-out
        hover:-translate-y-2
      "
    >


  

      <h2 className=" font-archivo bg-amber-200 text-black p-[clamp(1rem,1vw,1.5rem)] text-[clamp(1.75rem,3vw,2.5rem)] ">
        {title}
      </h2>

      <p className=" py-[clamp(1rem,1.5vw,2rem)] px-[clamp(1rem,1vw,1.5rem)] text-[clamp(0.95rem,1.5vw,1.125rem)] leading-relaxed">
        {description}
      </p>
    
    </div>
  )
}

export default AboutCard
//         p-}
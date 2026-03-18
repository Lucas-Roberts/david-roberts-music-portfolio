

type AboutCardProps = {
    title: string,
    description: string
}

function AboutCard({title, description}: AboutCardProps) {
  return (
    <div className=' h-full w-full m-2 rounded-3xl p-15 bg-[#1c2024]/95 border border-white/10 text-white/80'>

            <h2 className='text-3xl py-2'>{title}</h2>

            <p className='mt-5 text-md'>{description}</p>
      
    </div>
  )
}

export default AboutCard

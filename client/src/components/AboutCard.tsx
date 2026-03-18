

type AboutCardProps = {
    title: string,
    description: string
}

function AboutCard({title, description}: AboutCardProps) {
  return (
    <div className=' h-full w-1/4 m-2 rounded-3xl p-15 bg-[#1c2024]/95 border border-white/10'>

            <h2 className='text-2xl border-b-2 p-2'>{title}</h2>

            <p className='mt-5'>{description}</p>
      
    </div>
  )
}

export default AboutCard

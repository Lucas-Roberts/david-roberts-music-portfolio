import React from 'react'

type AboutCardProps = {
    title: string,
    description: string
}

function AboutCard({title, description}: AboutCardProps) {
  return (
    <div className='bg-white h-full w-1/4 m-2 rounded-2xl'>

     
            {title}
            {description}
        
      
    </div>
  )
}

export default AboutCard

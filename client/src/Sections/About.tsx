
import AboutCard from '../components/AboutCard'


function About() {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] px-10 gap-10 h-[60dvh] w-full bg-[linear-gradient(to_top,#151514_10%,transparent_80%)]'>

        <AboutCard title="Background" description="I’ve spent over 40 years playing music, I started out on base guitar and got comfotbale with playing a few other instruments too. Over the past few years, I’ve become mroe interested in creating and releasing my own music, bringing together decades of experience and a deep passion for sound into every track."  />
        <AboutCard title="About Me" description="22"  />
        <AboutCard title="What I Do" description="22"  />

    

        
      
    </div>
  )
}

export default About


//


import AboutCard from '../components/AboutCard'


function About() {
  return (
    <section id='About' className=' bg-[linear-gradient(to_top,#f4f3f2_10%,transparent_80%)]'>
    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] px-10 gap-10 min-h-[50dvh] w-full '>

        <AboutCard title="Background" description="I’ve spent over 40 years playing music, I started out on base guitar and got comfotbale with playing a few other instruments too. Over the past few years, I’ve become mroe interested in creating and releasing my own music, bringing together decades of experience and a deep passion for sound into every track."  />
        <AboutCard title="About Me" description="22"  />
        <AboutCard title="What I Do" description="22"  />

    

        
      
    </div>
    </section>
  )
}

export default About


//

import AboutCard from '../components/AboutCard'

function About() {
  return (
    <section 
      id='About' 
      className='bg-[linear-gradient(to_top,#f4f3f2_50%,transparent_50%)] py-[clamp(2rem,6vw,5rem)]'
    >

      <div className="
        grid
        grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
        gap-[clamp(1rem,3vw,2.5rem)]
        px-[clamp(0.3rem,2vw,1rem)]
        max-w-7xl
        mx-auto
      ">

        <AboutCard 
          title="Background" 
          description="I’ve spent over 40 years playing music, I started out on bass guitar and got comfortable with playing a few other instruments too. Over the past few years, I’ve become more interested in creating and releasing my own music, bringing together decades of experience and a deep passion for sound into every track."  
        />

        <AboutCard title="About Me" description="22" />
        <AboutCard title="What I Do" description="22" />

      </div>

    </section>
  )
}

export default About




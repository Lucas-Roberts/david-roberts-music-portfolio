import AboutCard from '../components/AboutCard'

function About() {
  return (
    <section 
      id='About' 
      className=' py-[clamp(2rem,6vw,5rem)]'
    >
      <div
        className="
          flex
          flex-wrap
          gap-[clamp(1rem,3vw,2.5rem)]
          px-[clamp(1rem,4vw,3rem)]
          max-w-[100rem]
          mx-auto
        "
      >
        <div className="w-full sm:w-[48%] lg:w-[31%]">
          <AboutCard 
            title="Background" 
            description="I’ve spent over 40 years playing music, I started out on bass guitar and got comfortable with playing a few other instruments too. Over the past few years, I’ve become more interested in creating and releasing my own music, bringing together decades of experience and a deep passion for sound into every track."  
          />
        </div>

        <div className="w-full sm:w-[48%] lg:w-[31%]">
          <AboutCard title="About Me" description="22" />
        </div>

        <div className="w-full sm:w-[48%] lg:w-[31%]">
          <AboutCard title="What I Do" description="22" />
        </div>
      </div>
    </section>
  )
}

export default About




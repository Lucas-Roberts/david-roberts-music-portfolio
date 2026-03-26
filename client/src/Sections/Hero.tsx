import DownwardsArrowIcon from "../components/icons/DownwardsArrowIcon"

function Hero() {
  return (
    <section
      id="Home"
      className="flex items-center bg-[linear-gradient(to_bottom,#333333_90%,#e5e5e5_100%)] w-full min-h-dvh text-white px-6 md:px-12 lg:px-20 border-b border-b-white/10"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-7xl">

        <h1 className="font-archivo font-bold leading-tight mb-6 text-[clamp(2.5rem,5vw,4rem)]">
          Discover Your Next Favorite Sound
        </h1>


        <p className="mb-10 max-w-2xl text-[clamp(1rem,1.5vw,1.25rem)] text-white/80">
          Check out my tracks and get in contact if you want to use my music for your next project!
        </p>

    
        <a 
          href="#Music"
          className="w-fit h-10 bg-[#FFC50F]/80 rounded-3xl gap-2 shadow-lg flex items-center justify-center px-4 hover:border-2 hover:border-white/20 transition"
        >
          My tracks
          <DownwardsArrowIcon />

          
        </a>

      </div>

      <div className="blob"> hello</div>
    </section>
  )
}

export default Hero




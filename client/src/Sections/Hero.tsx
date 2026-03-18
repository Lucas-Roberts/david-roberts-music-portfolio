import DownwardsArrowIcon from "../components/icons/DownwardsArrowIcon"

function Hero() {
  return (
    <section
      id="Home"
      className="flex items-center w-full h-[calc(95dvh)] text-white py-24"
      
    >

      <div></div>
      <div className="w-full h-full p-50 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Your Next Favorite Sound
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl  ">
          Check out my tracks and get in contact it you want to use my music for your next project!
        </p>

        <a 
          href="#Music"
          className="w-fit h-10 bg-black/60 rounded-3xl gap-2 shadow-lg flex items-center justify-center px-3 hover:border-2 hover:border-white/20"
        >
          My tracks
          <DownwardsArrowIcon></DownwardsArrowIcon>
        </a>

      </div>
    </section>
  )
}

export default Hero




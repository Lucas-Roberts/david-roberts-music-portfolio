import DownwardsArrowIcon from "../components/icons/DownwardsArrowIcon"

function Hero() {
  return (
    <section
      id="Home"
      className="flex items-center w-full h-[calc(80dvh)] text-white py-24"
      
    >
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black">
          Discover Your Next Favorite Sound
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-black/80">
          Stream trending tracks, explore new artists, and build playlists that match your vibe.
        </p>

        <a 
          href="#Music"
          className="w-20 h-10 bg-black/60 rounded-3xl shadow-lg flex items-center justify-center mx-auto hover:border-2 hover:border-white/20"
        >
          
          <DownwardsArrowIcon></DownwardsArrowIcon>
        </a>

      </div>
    </section>
  )
}

export default Hero




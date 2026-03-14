import DownwardsArrowIcon from "../components/icons/DownwardsArrowIcon"

function Hero() {
  return (
    <section
      id="Home"
      className="flex items-center w-full h-[calc(100dvh-2rem)] text-white py-24 bg-cover bg-center"
      
    >
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Your Next Favorite Sound
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Stream trending tracks, explore new artists, and build playlists that match your vibe.
        </p>

        <a 
          href="#Music"
          className="w-20 h-10 bg-black/60 rounded-3xl shadow-lg flex items-center justify-center mx-auto hover:border-2 hover:border-white/20"
        >
          <DownwardsArrowIcon />
        </a>

      </div>
    </section>
  )
}

export default Hero


{/* <a
  key={tab}
  href={"#" + tab}
  onClick={() => setActive(tab)}
  className={`relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${
    active === tab
      ? "text-white"
      : "text-gray-400 hover:text-white"
  }`}
>
  {tab}

  {active === tab && (
    <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-neutral-600 rounded-full" />
  )}
</a> */}

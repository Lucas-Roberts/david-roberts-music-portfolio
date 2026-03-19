import DownwardsArrowIcon from "../components/icons/DownwardsArrowIcon"

function Hero() {
  return (
    <section
      id="Home"
      className="flex items-center w-full h-[calc(95dvh)] text-white p-50">

       <div className="flex flex-col justify-center border-flow p-8   w-full h-full bg-linear-to-r from-black/80 to-transparent">

       
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-archivo"  >
            Discover Your Next Favorite Sound
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-2xl  ">
            Check out my tracks and get in contact it you want to use my music for your next project!
          </p>

          <a 
            href="#Music"
            className="w-fit h-10 bg-[#FFC50F]/80 rounded-3xl gap-2 shadow-lg flex items-center justify-center px-3 hover:border-2 hover:border-white/20"
          >
            My tracks
            <DownwardsArrowIcon></DownwardsArrowIcon>
          </a>

          <span className="left-start"></span>
          <span className="top-line"></span>
          <span className="bottom-line"></span>


        </div>
      
    </section>

    


  )
}
//className="flex flex-col justify-center w-full px-8 h-full border-2 border-white/30 border-r-0 bg-gradient-to-r from-black/20 to-transparent"
export default Hero




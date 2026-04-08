import { useEffect, useState } from "react"
import { getSongs } from "../services/songs"
import SongCard from "../components/SongCard"

type Song = {
  _id: string
  title: string
  artist: string
  releaseDate: string
  audioFile: {
    asset: {
      url: string
    }
  }
}

function Music() {
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getSongs()
      setSongs(data)
    }

    fetchSongs()
  }, [])

  return (
    <section
      id="Music"
      className="max-w-[100rem] mx-auto"
    >
      <div className="w-full px-[clamp(1rem,4vw,3rem)]">

        {/* Title */}
        <div className="mb-[clamp(2rem,5vw,4rem)] text-center md:text-left ">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight ">
            My Tracks
          </h2>
          <p className="text-white/60 mt-2 text-md">
            A selection of my latest work
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-[clamp(1rem,2vw,1.5rem)]
            items-stretch
          "
        >
          {/* Existing songs */}
          {songs.map((song) => (
            <SongCard key={song._id} song={song} />
          ))}

          {/* Coming Soon Card */}
          <div
            className="
              h-full
              flex flex-col items-center justify-center
              text-center
              border border-dashed border-white/20
              rounded-sm
              bg-[#1c2024]/40
              text-white/50
              transition-all duration-300
              hover:border-white/40 hover:text-white/70
            "
          >
            <div className="text-lg font-semibold mb-2">
              Coming Soon...
            </div>
            <div className="text-sm opacity-70">
              New tracks on the way
            </div>
          </div>

        </div>

        {/* Empty state */}
        {songs.length === 0 && (
          <div className="text-center text-white/50 mt-10">
            No tracks available
          </div>
        )}

      </div>
    </section>
  )
}

export default Music

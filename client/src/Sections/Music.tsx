import { useEffect, useState } from "react"
import { getSongs } from "../services/songs"
import SongCard from "../components/SongCard"

type Song = {
  _id: string
  title: string
  description: string
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
  className="w-full py-[clamp(3rem,6vw,5rem)] bg-[#0E121B]"
>
  <div className="w-full max-w-7xl mx-auto px-[clamp(1rem,4vw,3rem)]">

    {/* Heading */}
    <div className="max-w-3xl mb-[clamp(2rem,5vw,4rem)] mx-auto text-center">
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight">
        My Tracks
      </h2>
    </div>

    {/* 🔥 Grid */}
    <div className="
      grid
      grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
      gap-[clamp(0.75rem,2vw,1.5rem)]
      items-stretch
    ">

      {songs.map((song) => (
        <SongCard key={song._id} song={song} />
      ))}

    </div>

  </div>
</section>
  )
}

export default Music

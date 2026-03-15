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
      className="w-full min-h-dvh flex justify-center  py-20"
    >

      <div className="w-full mx-auto p-10">

        {/* About Section */}
        <div className="max-w-3xl mb-16 mx-auto text-center">

          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            My Tracks
          </h2>

        </div>

        {/* Music Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-3
          justify-items-center
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

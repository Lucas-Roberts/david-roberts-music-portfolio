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
      className="flex flex-wrap items-center px-45 justify-center min-h-dvh w-full"
    >

      {/* Content wrapper */}
      <div className="flex w-full">

        {/* About section */}
        <div className="flex min-h-[calc(100dvh-4rem)] w-1/2 px-40 py-30 items-center">

          <div className="flex-1 bg-white rounded-2xl shadow-xl p-10 max-w-xl">

            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About Me
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusantium
              consectetur natus incidunt accusamus! Itaque quo, ipsa vitae voluptate
              molestias labore qui autem.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Neque obcaecati sunt, cum ut in facilis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium officiis adipisci ipsum
              necessitatibus.
            </p>

          </div>

        </div>

        {/* Songs section */}
        <div className="flex flex-col min-h-[calc(100dvh-4rem)] w-1/2 pt-30 items-center">

          {songs.map((song) => (
            <SongCard key={song._id} song={song} />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Music

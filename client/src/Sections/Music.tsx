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
      className="flex flex-col flex-wrap items-center min-h-[calc(100dvh-4rem)] w-full bg-gray-800"
    >


      {songs.map((song) => (
        <SongCard key={song._id} song={song} />
      ))}
    </section>
  )
}

export default Music

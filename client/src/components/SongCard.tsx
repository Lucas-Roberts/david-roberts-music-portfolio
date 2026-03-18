import { useEffect, useRef, useState } from "react"
import WaveSurfer from "wavesurfer.js"
import PlayPauseIcon from "./icons/PlayPauseIcon"

let activePlayer: WaveSurfer | null = null

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

type SongCardProps = {
  song: Song
}

function SongCard({ song }: SongCardProps) {
  const waveformRef = useRef<HTMLDivElement | null>(null)
  const wavesurferRef = useRef<WaveSurfer | null>(null)

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!waveformRef.current) return

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "rgba(0,0,0,0.4)",
      progressColor: "rgba(191, 9, 47, 1.0)", 
      height: 80,
      barWidth: 2,
      barGap: 1,
      cursorColor: "transparent"
    })

    wavesurfer.load(song.audioFile.asset.url)

    wavesurfer.on("ready", () => {
      setDuration(wavesurfer.getDuration())
    })

    wavesurfer.on("timeupdate", () => {
      setCurrentTime(wavesurfer.getCurrentTime())
    })

    wavesurfer.on("play", () => setPlaying(true))
    wavesurfer.on("pause", () => setPlaying(false))

    wavesurfer.on("finish", () => {
      setPlaying(false)
      setCurrentTime(0)
      wavesurfer.seekTo(0)
    })

    wavesurferRef.current = wavesurfer

    return () => {
      wavesurfer.destroy()
    }
  }, [song])

  const togglePlay = () => {
    const player = wavesurferRef.current
    if (!player) return

    if (activePlayer && activePlayer !== player) {
      activePlayer.stop()
      activePlayer.seekTo(0)
    }

    player.playPause()
    activePlayer = player
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0")

    return `${minutes}:${seconds}`
  }

  return (
    <div className="p-8 bg-[#1c2024]/95 border border-white/10 rounded-xl shadow w-full ">

      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-bold">{song?.title}</h2>
          <p className="text-sm text-gray-600">{song?.description}</p>
        </div>

        <span className="text-sm text-gray-500 cursor-default">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">

        <button
          onClick={togglePlay}
          className="
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-indigo-500 text-white
            transition-all duration-200
            hover:scale-110 hover:bg-indigo-600
            active:scale-95
            cursor-pointer
          "
        >
          <PlayPauseIcon playing={playing} />
        </button>

        <div
          ref={waveformRef}
          className="flex-1 cursor-pointer"
        />

      </div>

    </div>
  )
}

export default SongCard
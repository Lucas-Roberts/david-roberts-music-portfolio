import { useEffect, useRef, useState } from "react"
import WaveSurfer from "wavesurfer.js"
import PlayPauseIcon from "./icons/PlayPauseIcon"

let activePlayer: WaveSurfer | null = null

const PRIMARY = "#3b82f6" 

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
      waveColor: "rgba(255,255,255,0.7)", 
      progressColor: PRIMARY,             
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
  <div
    className="
      bg-[#1c2024]/95
      shadow-lg/50
      w-full
      h-full
      grid
      grid-rows-[auto_1fr]
      gap-4

    "
  >
    {/* Waveform */}
    <div
      ref={waveformRef}
      className="w-full h-30 cursor-pointer bg-red-500 "
    />

    {/* Content */}
    <div>
      <div className="grid gap-2">
        <h2 className="flex items-baseline gap-2">
          <span className="text-[clamp(1rem,1.5vw,1.25rem)] font-bold">
            {song?.title}
          </span>
        </h2>

        <p className="text-[clamp(0.85rem,1.2vw,1rem)] text-white/70 line-clamp-3 leading-relaxed">
          {song?.description}
        </p>
      </div>

      <span className="text-[clamp(0.75rem,1vw,0.9rem)] text-white/50 whitespace-nowrap">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
    </div>
  </div>
)
}

export default SongCard



      {/* <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
        <button
          onClick={togglePlay}
          className={`
            w-[clamp(2.25rem,3vw,2.5rem)]
            h-[clamp(2.25rem,3vw,2.5rem)]
            flex items-center justify-center
            rounded-full
            bg-blue-500
            transition-all duration-200
            hover:scale-110 hover:bg-blue-600
            active:scale-95
            ${playing ? "shadow-[0_0_20px_rgba(59,130,246,0.35)]" : ""}
          `}
        >
          <PlayPauseIcon playing={playing} />
        </button>

      </div> */}
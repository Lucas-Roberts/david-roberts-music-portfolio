import { useRef, useState, useEffect } from "react"
import WaveSurfer from "wavesurfer.js"
import PlayPauseIcon from "./icons/PlayPauseIcon"

let activePlayer: WaveSurfer | null = null

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

type SongCardProps = {
  song: Song
}

function SongCard({ song }: SongCardProps) {
  const waveformRef = useRef<HTMLDivElement | null>(null)
  const wavesurferRef = useRef<WaveSurfer | null>(null)

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [initialized, setInitialized] = useState(false)

  // 🚀 Initialize WaveSurfer
  const initWaveSurfer = () => {
    if (!waveformRef.current || wavesurferRef.current) return

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "rgb(160,165,171)",
      progressColor: "rgba(255,255,255,1)",
      height: 80,
      barWidth: 1,
      barGap: 2,
      cursorColor: "transparent",
      backend: "MediaElement",
    })

    ws.load(song.audioFile.asset.url)

    ws.on("ready", () => {
      setDuration(ws.getDuration())
    })

    ws.on("timeupdate", () => {
      setCurrentTime(ws.getCurrentTime())
    })

    ws.on("play", () => setPlaying(true))
    ws.on("pause", () => setPlaying(false))

    ws.on("finish", () => {
      setPlaying(false)
      setCurrentTime(0)
      ws.seekTo(0)
    })

    wavesurferRef.current = ws
    setInitialized(true)
  }

  // 👀 Lazy load when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          initWaveSurfer()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (waveformRef.current) {
      observer.observe(waveformRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // 🧹 Cleanup on unmount
  useEffect(() => {
    return () => {
      wavesurferRef.current?.destroy()
      wavesurferRef.current = null
    }
  }, [])

  const togglePlay = () => {
    let player = wavesurferRef.current

    // Init if needed
    if (!player) {
      initWaveSurfer()

      // wait briefly then play
      setTimeout(() => {
        wavesurferRef.current?.play()
        activePlayer = wavesurferRef.current
      }, 300)

      return
    }

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
        relative
        w-full
        h-55
        grid
        grid-rows-[60%_40%]
        min-h-0
        rounded-md
        overflow-hidden

        bg-[#1c2024]/95
        border border-white/10

        shadow-[0_10px_35px_rgba(0,0,0,0.45)]
        transition-all duration-500 ease-out

        hover:-translate-y-1
        hover:shadow-[0_15px_45px_rgba(0,0,0,0.6)]
      "
    >
      {/* Waveform */}
      <div className="relative min-h-0 flex items-center justify-center  px-4">
        
        {!initialized && (
          <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xs">
            Loading waveform...
          </div>
        )}

        <div
          ref={waveformRef}
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className="min-h-0 p-4 flex flex-col justify-between">
        <div className="grid gap-1">
          <h2 className="text-[clamp(1rem,1.5vw,1.2rem)] font-medium tracking-tight text-white">
            {song.title}
          </h2>

          <div className="flex justify-between text-center">
            <p className="text-[clamp(0.85rem,1.2vw,0.95rem)] text-white/60 font-light">
              {song.artist}
            </p>

            <span className="text-[clamp(0.75rem,1vw,0.85rem)] text-white/40">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>  
        </div>


      </div>

      {/* Play Button */}
      <button
        onClick={togglePlay}
        className={`
          absolute
          right-5
          top-[60%]
          -translate-y-1/2
          w-14 h-14
          flex items-center justify-center
          rounded-full

          bg-blue-500
          transition-all duration-300
          hover:scale-110 hover:bg-blue-600
          active:scale-95

          shadow-lg
          cursor-pointer

          ${playing
            ? "shadow-[0_0_25px_rgba(59,130,246,0.9)] scale-105"
            : ""
          }
        `}
      >
        <PlayPauseIcon className="scale-50" playing={playing} />
      </button>
    </div>
  )
}

export default SongCard
import { useEffect, useRef, useState } from "react"
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

  useEffect(() => {
    if (!waveformRef.current) return

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "rgb(160, 165, 171)",
      progressColor: "rgba(255,255,255,0.7)",
      height: 80,
      barWidth: 1,
      barGap: 2,
      cursorColor: "transparent",
      backend: "MediaElement",
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

    wavesurfer.on("error", (err) => {
      console.error("WaveSurfer error:", err)
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
        relative
        shadow-[0_0_12px_rgba(0,0,0,0.4)]
        w-full
        h-60
        grid
        grid-rows-2
        min-h-0
      "
    >
      {/* Top 50% (Waveform) */}
      <div className="min-h-0 flex items-center bg-amber-400/20">
        <div
          ref={waveformRef}
          className="w-full cursor-pointer"
        />
        

      </div>

      {/* Bottom 50% (Content) */}
      <div className="min-h-0  p-3 flex flex-col justify-between">
        <div className="grid gap-2">
          <h2 className="flex items-baseline gap-2">
            <span className="text-[clamp(1rem,1.5vw,1.25rem)]">
              {song?.title}
            </span>
          </h2>

          <p className="text-[clamp(0.85rem,1.2vw,1rem)] line-clamp-3 leading-relaxed">
            {song?.artist}
          </p>
        </div>

        <span className="absolute bottom-1 right-1  whitespace-nowrap">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>


      </div>

      {/* Floating Play Button */}
      <button
        onClick={togglePlay}
        className={`
          absolute
          right-6
          top-1/2
          -translate-y-1/2
          w-12 h-12
          flex items-center justify-center
          rounded-full
          bg-blue-500
          transition-all duration-200
          hover:scale-110 hover:bg-blue-600
          active:scale-95
          shadow-lg
          cursor-pointer
          ${playing ? "shadow-[0_0_20px_rgba(59,130,246,0.95)]" : ""}
        `}
      >
        <PlayPauseIcon playing={playing} />
      </button>
    </div>
  )
}

export default SongCard
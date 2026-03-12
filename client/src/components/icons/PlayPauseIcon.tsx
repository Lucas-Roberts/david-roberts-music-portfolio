type IconProps = {
  playing: boolean
  className?: string
}

function PlayPauseIcon({ playing, className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      {/* Play triangle */}
      <polygon
        points="6,4 20,12 6,20"
        className={`origin-center transition-all duration-300 ${
          playing ? "opacity-0 scale-50" : "opacity-100 scale-100"
        }`}
      />

      {/* Pause bars */}
      <g
        className={`origin-center transition-all duration-300 ${
          playing ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </g>
    </svg>
  )
}

export default PlayPauseIcon
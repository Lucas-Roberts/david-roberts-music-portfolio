type IconProps = {
  className?: string
}

function DownwardsArrowIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v18m0 0l8.5-8.5M12 21l-8.5-8.5" />
    </svg>
  )
}

export default DownwardsArrowIcon
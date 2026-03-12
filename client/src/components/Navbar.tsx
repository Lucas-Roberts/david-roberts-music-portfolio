import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const tabs = ["About", "Music", "Contact"];

  return (
    <nav className="fixed top-0 min-w-full bg-gray-900/90 text-white border-b border-b-gray-600/80">
      <div className="min-w-full px-7 max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16">

          <div className="text-xl font-semibold tracking-wide">
            MusicApp
          </div>

          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <a
                key={tab}
                href={"#" + tab}
                onClick={() => setActive(tab)}
                className={`relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                  active === tab
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}

                {active === tab && (
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-neutral-600 rounded-full" />
                )}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}

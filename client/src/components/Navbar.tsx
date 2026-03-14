import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("About");

  const tabs = ["Home", "Music", "Contact"];

  useEffect(() => {
    const sections = tabs.map((tab) =>
      document.getElementById(tab)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed z-50 top-0 min-w-full bg-gray-900/70 text-white border-b border-b-yellow-300/50 backdrop-blur-xs">
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
                className={`NavbarEffect relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                  active === tab
                    ? "active text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}

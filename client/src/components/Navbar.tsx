import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("About");

  const tabs = ["About", "Music", "Contact"];

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
    <nav
      className="
        fixed top-0 z-50 w-full
        backdrop-blur-xl
        bg-white/5
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#Home"
            className="
              text-lg md:text-xl
              font-medium
              tracking-tight
              text-white/90
              transition-colors duration-300
              hover:text-[#FFC50F]
            "
          >
            Skye<span className="text-white/50">.Music</span>
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-6">

            {tabs.map((tab) => (
              <a
                key={tab}
                href={"#" + tab}
                onClick={() => setActive(tab)}
                className={`
                  relative
                  text-sm
                  font-medium
                  tracking-wide

                  text-white/70
                  transition-all duration-300

                  hover:text-white

                  ${active === tab ? "text-white" : ""}
                `}
              >
                {tab}

                {/* underline indicator */}
                <span
                  className={`
                    absolute left-0 -bottom-1
                    h-[2px] w-full
                    bg-[#FFC50F]
                    rounded-full

                    transition-all duration-300

                    ${
                      active === tab
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-50"
                    }
                  `}
                />
              </a>
            ))}

          </div>
        </div>
      </div>
    </nav>
  );
}



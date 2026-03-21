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
    <nav className="fixed  z-50 top-0 min-w-full  text-white border-b border-b-white/10 backdrop-blur-xs shadow-2xl">
      <div className="min-w-full px-7 max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-15">

          <a href="#Home" className="text-xl font-semibold tracking-wide hover:text-[#FFC50F]">
            MusicApp
          </a>

          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <a
                key={tab}
                href={"#" + tab}
                onClick={() => setActive(tab)}
                className={`NavbarEffect relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-4xl ${
                  active === tab
                    ? "active text-[#FFC50F] bg-gray-900/80"
                    : " hover:text-[#FFC50F]"
                }`}
              >
                {tab}
              </a>
            ))}

            <div>
              
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}



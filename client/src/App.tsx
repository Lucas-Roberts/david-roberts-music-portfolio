import { useRef } from "react"
import "./App.css"

import Navbar from "./components/Navbar"
import Hero from "./Sections/Hero"
import Music from "./Sections/Music"
import Contact from "./Sections/Contact"
import About from "./Sections/About"
import { useParallaxBackground } from "./components/useParrallaxBackground"

import bgImage from "./assets/recordBackground.jpg"

export default function App() {
const bgRef = useRef<HTMLDivElement | null>(null)
useParallaxBackground(bgRef)

  return (
    <>
      <div
        ref={bgRef}
        className="parallax-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="parallax-overlay" />

      <div className="app-content">
        <Navbar />
        <Hero />
        <About />
        <Music />
        <Contact />
      </div>
    </>
  )
}

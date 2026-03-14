import './App.css'
import Navbar from './components/Navbar'
import  Hero from './Sections/Hero'
import  Music from './Sections/Music'
import Contact from './Sections/Contact'

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>

    <div className='bg-gray-900/60 backdrop-blur-xs'>
    <Music></Music>
    <Contact></Contact>
    </div>
    
    
    </>
  )
}
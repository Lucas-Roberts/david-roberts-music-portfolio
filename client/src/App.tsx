import './App.css'
import Navbar from './components/Navbar'
import  Hero from './Sections/Hero'
import  Music from './Sections/Music'
import Contact from './Sections/Contact'
import About from './Sections/About'

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>


    <div className='bg-gray-900/60 backdrop-blur-xs'>
    <Music></Music>
    <Contact></Contact>
    </div>
    
    
    </>
  )
}
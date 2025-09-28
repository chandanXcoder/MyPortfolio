import { useState } from 'react'

import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Hero from './components/Hero'
import Contact from './components/contact'
import Skill from './components/Skill'
import Project from './components/Project'
import Footer from './components/Footer'
import profileImage from "./assets/chandan.jpg";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <profileImage />
     <Hero />
     <AboutMe />
     <Skill />
     <Project />
     <Contact />
     <Footer />
     
    </>
  )
}

export default App

import { useState } from 'react'

import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Hero from './components/Hero'
import Contact from './components/contact'
import Skill from './components/Skill'
import Project from './components/Project'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <AboutMe />
     <Skill />
     <Project />
     <Contact />
     
    </>
  )
}

export default App

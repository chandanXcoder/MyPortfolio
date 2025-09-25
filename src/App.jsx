import { useState } from 'react'

import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Hero from './components/Hero'
// import Skills from './components/Skill'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <AboutMe />
     {/* <Skill /> */}
     
    </>
  )
}

export default App

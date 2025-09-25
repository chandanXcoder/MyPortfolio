import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './componets/Navbar'
import Aboutme from './componets/About me'
import Hero from './componets/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <About me />
     <Hero />
    </>
  )
}

export default App

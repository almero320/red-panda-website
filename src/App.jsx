import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FunFacts from './components/FunFacts'
import Characteristics from './components/Characteristics'
import Habitat from './components/Habitat'
import Behavior from './components/Behavior'
import Conservation from './components/Conservation'
import Footer from './components/Footer'
import EasterEggGame from './components/EasterEggGame'

function App() {
  const [showGame, setShowGame] = useState(false)

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar onDoubleClickLogo={() => setShowGame(true)} />

      <AnimatePresence>
        {showGame && <EasterEggGame onClose={() => setShowGame(false)} />}
      </AnimatePresence>

      {/* Konten utama jadi flex-grow supaya footer ke bawah */}
      <main className="flex-grow">
        <Hero />
        <FunFacts />
        <Characteristics />
        <Habitat />
        <Behavior />
        <Conservation />
      </main>

      <Footer />
    </div>
  )
}

export default App
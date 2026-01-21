import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import redPandaLogo from '/assets/logo-redpanda.png'  // pastikan path ini sesuai gambar logo kamu di src/assets/

export default function EasterEggGame({ onClose }) {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(20)
  const [items, setItems] = useState([])

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    const spawnInterval = setInterval(() => {
      const id = Date.now()
      const x = Math.random() * 80 + 10
      const y = Math.random() * 70 + 10
      setItems(prev => [...prev, { id, x, y }])

      // auto-remove setelah 4 detik kalau tidak diklik
      setTimeout(() => {
        setItems(prev => prev.filter(item => item.id !== id))
      }, 4000)
    }, 700)

    return () => {
      clearInterval(timer)
      clearInterval(spawnInterval)
    }
  }, [timeLeft])

  const handleFeed = (id) => {
    setScore(prev => prev + 1)
    setItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full text-center relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-800 transition"
        >
          ✕
        </button>

        <h2 className="text-3xl sm:text-4xl panda-font text-panda-red mb-4">
          Ayo Beri makan Panda Merah!
        </h2>

        <p className="text-xl mb-6">
          Score: <span className="font-bold">{score}</span> | Waktu: <span className="font-bold">{timeLeft}s</span>
        </p>

        <div className="relative h-72 sm:h-80 bg-gradient-to-br from-panda-green/30 to-panda-cream/40 rounded-2xl overflow-hidden border-4 border-panda-brown/40 shadow-inner">
          {items.map(item => (
            <motion.div
              key={item.id}
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: [0, 8, -8, 0] }}
              transition={{ rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
              className="absolute cursor-pointer select-none"
              style={{ 
                left: `${item.x}%`, 
                top: `${item.y}%`, 
                transform: 'translate(-50%, -50%)',
                width: '80px',    // ← Diperbesar dari 48px jadi 80px (mirip emoji tapi lebih jelas di game)
                height: '80px'
              }}
              onClick={() => handleFeed(item.id)}
            >
              <img 
                src={redPandaLogo} 
                alt="Red Panda Feed" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.div>
          ))}
        </div>

        {timeLeft <= 0 && (
          <div className="mt-8">
            <p className="text-2xl sm:text-3xl font-bold mb-4">
              {score >= 10 
                ? "Kamu Hero Red Panda! 🎉" 
                : "Coba lagi yuk, pasti bisa lebih tinggi! 🐾"}
            </p>
            <button
              onClick={() => {
                setScore(0)
                setTimeLeft(20)
                setItems([])
              }}
              className="px-8 py-4 bg-panda-red text-white rounded-full text-lg font-semibold shadow-lg hover:bg-panda-brown transition"
            >
              Main Lagi
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )

}

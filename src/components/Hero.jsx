import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xl scale-110 transform-gpu"
        style={{ backgroundImage: "url('/assets/red-panda-bg-landscape.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 max-w-4xl"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold panda-font mb-6 drop-shadow-2xl leading-tight">
          Ada Panda Selain Hitam Putih!
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-10 drop-shadow-lg">
          Yuk kenali si imut <span className="text-panda-red font-bold">Red Panda</span> 🐾
        </p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="px-10 py-5 bg-panda-red text-white rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-shadow"
          onClick={() => document.getElementById('funfacts')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Mulai Jelajah!
        </motion.button>
      </motion.div>
    </section>
  )

}


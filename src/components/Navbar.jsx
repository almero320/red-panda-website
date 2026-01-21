import { motion } from 'framer-motion'
import redPandaLogo from '/assets/logo-redpanda.webp'  // ← sesuaikan nama file gambar logo kamu di src/assets/

export default function Navbar({ onDoubleClickLogo }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3 cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onDoubleClick={onDoubleClickLogo}
        >
          {/* Teks "Red Panda" dulu */}
          <span className="text-2xl md:text-3xl panda-font text-panda-red font-bold">
            Red Panda
          </span>

          {/* Logo gambar Red Panda menggantikan emoji */}
          <img 
            src={redPandaLogo} 
            alt="Red Panda Logo" 
            className="w-9 h-9 md:w-11 md:h-11 object-contain"  // ukuran mirip emoji asli, tanpa bundar
          />
        </motion.div>

        <div className="space-x-6 md:space-x-8 text-sm md:text-base font-medium">
          <a href="#funfacts" className="hover:text-panda-red transition-colors">Fun Facts</a>
          <a href="#characteristics" className="hover:text-panda-red transition-colors">Ciri Fisik</a>
          <a href="#habitat" className="hover:text-panda-red transition-colors">Habitat</a>
        </div>
      </div>
    </motion.nav>
  )

}


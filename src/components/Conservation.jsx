import { motion } from 'framer-motion'

export default function Conservation() {
  const threats = [
    "Kerusakan dan hilangnya habitat hutan",
    "Perubahan iklim",
    "Perburuan ilegal",
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-panda-red/5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl panda-font text-panda-red mb-10"
        >
          Fakta Penting: Red Panda Terancam Punah
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto"
        >
          Red Panda termasuk hewan yang terancam punah. Populasi di alam terus menurun, sehingga upaya konservasi sangat penting.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {threats.map((threat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-panda-red/20"
            >
              <p className="text-xl font-semibold text-panda-brown">{threat}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-medium text-panda-red"
        >
          Melindungi Red Panda berarti melindungi keseimbangan alam 🌱
        </motion.p>
      </div>
    </section>
  )
}
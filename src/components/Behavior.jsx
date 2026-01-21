import { motion } from 'framer-motion'

const behaviors = [
  "Pemalu dan soliter, jarang hidup berkelompok",
  "Sangat ahli memanjat pohon",
  "Menghabiskan sebagian besar waktunya untuk makan dan tidur",
  "Menggunakan suara kecil dan bahasa tubuh untuk berkomunikasi",
  "Meski terlihat santai, Red Panda sangat waspada terhadap lingkungan sekitarnya",
]

export default function Behavior() {
  return (
    <section className="py-20 px-6 md:px-12 bg-panda-green/10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl panda-font text-center text-panda-red mb-12"
        >
          Perilaku dan Gaya Hidup
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-5 text-lg"
          >
            {behaviors.map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-start gap-4"
              >
                <span className="text-panda-red text-2xl font-bold">🐾</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src="/assets/gbr-redpanda.webp"
            alt="Red Panda behavior"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  )

}


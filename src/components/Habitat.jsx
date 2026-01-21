import { motion } from 'framer-motion'

export default function Habitat() {
  return (
    <section id="habitat" className="py-20 px-6 md:px-12 bg-white/80">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl panda-font text-panda-red mb-10"
        >
          Habitat dan Persebaran Red Panda
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto"
        >
          Red Panda hidup di hutan pegunungan yang sejuk, terutama di wilayah Himalaya, Nepal, Bhutan, India bagian utara, dan Cina selatan. Mereka menyukai hutan dengan banyak pepohonan tinggi dan bambu sebagai sumber makanan utama, walaupun juga suka buah-buahan.
        </motion.p>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src="/src/assets/habitat-redpanda.jpg"  // ganti kalau punya gambar hutan
          alt="Habitat Red Panda"
          className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto object-cover max-h-[500px]"
        />
      </div>
    </section>
  )
}
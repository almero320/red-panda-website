import { motion } from 'framer-motion'

export default function Characteristics() {
  const charList = [
    "Tubuh kecil dengan panjang sekitar 50–60 cm",
    "Bulu berwarna merah kecokelatan yang tebal",
    "Wajah imut dengan pola putih di sekitar mata",
    "Ekor panjang bercorak cincin",
    "Kaki pendek namun kuat untuk memanjat pohon",
  ]

  return (
    <section id="characteristics" className="py-20 px-6 md:px-12 bg-panda-green/5">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl panda-font text-center text-panda-red mb-12"
        >
          Karakteristik Fisik Red Panda
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-4 text-lg"
          >
            {charList.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-3"
              >
                <span className="text-panda-red text-2xl">•</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.img
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/assets/karakteristiktubuh-redpanda.jpg"
            alt="Red Panda close-up"
            className="rounded-3xl shadow-2xl w-full object-cover max-h-96"
          />
        </div>

        <p className="mt-10 text-center text-lg italic text-gray-700">
          Penampilannya yang lucu sering membuat orang mengira Red Panda adalah hewan peliharaan, padahal ia adalah satwa liar.
        </p>
      </div>
    </section>
  )

}

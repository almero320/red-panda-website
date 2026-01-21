import { motion } from 'framer-motion'

const facts = [
  {
    title: "Bukan Keluarga Dekat Panda Raksasa",
    text: "Meski sama-sama menyukai bambu, Red Panda (Ailurus fulgens) lebih dekat dengan rakun dibandingkan panda raksasa.",
    image: "/assets/redpanda.webp",
    reverse: false,
  },
  {
    title: "Punya “Ibu Jari Palsu”",
    text: "Red Panda punya tulang tambahan di pergelangan tangan yang berfungsi seperti ibu jari palsu untuk memegang bambu lebih mudah.",
    image: "/assets/red-panda-portrait1.webp",
    reverse: true,
  },
  {
    title: "Aktif Saat Senja & Malam",
    text: "Hewan krepuskular dan nokturnal: lebih aktif saat matahari terbenam hingga malam, banyak tidur di siang hari.",
    image: "/assets/redpanda-malam.webp",
    reverse: false,
  },
  {
    title: "Ekor yang Multifungsi",
    text: "Ekor panjang & berbulu tebal membantu keseimbangan saat memanjat dan jadi selimut alami di pegunungan dingin.",
    image: "/assets/ekor-redpanda.webp",
    reverse: true,
  },
]

export default function FunFacts() {
  return (
    <section id="funfacts" className="py-20 sm:py-24 px-6 md:px-12 bg-white/90">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl sm:text-5xl panda-font text-center text-panda-red mb-16"
        >
          Apakah Kamu Tahu? 
        </motion.h2>

        {facts.map((fact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: fact.reverse ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 mb-16 last:mb-0 ${fact.reverse ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-panda-brown">{fact.title}</h3>
              <p className="text-lg leading-relaxed text-gray-700">{fact.text}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={fact.image}
                alt={fact.title}
                className="rounded-3xl shadow-2xl w-full object-cover max-h-96 lg:max-h-[420px] transition-transform hover:scale-105 duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )

}




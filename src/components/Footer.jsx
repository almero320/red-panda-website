export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-panda-brown text-white text-center">
      <p className="text-lg">
        © {new Date().getFullYear()} Red Panda Awareness • Dibuat dengan ❤️ untuk melindungi si imut 
      </p>
      <p className="mt-2 text-sm opacity-80">
        Double-click Logo Red Panda di pojok kiri atas untuk memainkan MiniGame Tersembunyi
      </p>

      {/* Kredit super kecil, hampir tidak kelihatan sekilas */}
      <p className="mt-5 text-[5px] opacity-15">
        Created by Alien320
      </p>
    </footer>
  )

}




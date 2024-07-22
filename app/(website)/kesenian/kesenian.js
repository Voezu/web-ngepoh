import Container from "@/components/container"; 

import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Kesenian() {
  const galleryImages = [
    { src: "/img/karawitan1.jpg", alt: "Deskripsi Gambar 1" },
    { src: "/img/karawitan2.jpg", alt: "Deskripsi Gambar 2" },
    { src: "/img/karawitan3.jpg", alt: "Deskripsi Gambar 3" },
    { src: "/img/karawitan4.jpg", alt: "Deskripsi Gambar 4" },
    { src: "/img/karawitan5.jpg", alt: "Deskripsi Gambar 5" },
    { src: "/img/gejoglesung1.jpg", alt: "Kegiatan gejog lesung Padukuhan Ngepoh" },
    { src: "/img/galerikarawitan2.jpg", alt: "Galeri karawitan yang teletak di balai padukuhan" },
    { src: "/img/galerikarawitan3.jpg", alt: "Galeri karawitan yang teletak di balai padukuhan" },
    { src: "/img/galerikarawitan4.jpg", alt: "Galeri karawitan yang teletak di balai padukuhan" },
    { src: "/img/galerikarawitan5.jpg", alt: "Galeri karawitan yang teletak di balai padukuhan" }
  ];

  return (
    <Container>

      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Kesenian
      </h1>

      <div className="text-center">
        <Image
          src={"/img/galerikarawitan1.jpg"}
          alt="Kesenian Padukuhan Ngepoh"
          width={800}
          height={400}
          className="mx-auto mb-8 mt-4 object-cover"
        />
      </div>

      <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
        <p>
          Terdapat 2 jenis kesenian yang berada di Padukuhan Ngepoh, yaitu Karawitan dan Gejog Lesung.
        </p>
        </div>

        <h1 className="text-brand-primary mb-3 mt-10 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-2xl lg:leading-snug">
          Karawitan
        </h1>

        <div className="mx-auto mt-3 text-center text-lg dark:prose-invert dark:text-white">
          <p>
            Karawitan adalah seni suara vokal dan instrumen yang menggunakan nada-nada yang belaras slendro dan pelog. Seni karawitan tumbuh dan berkembang
            di daerah Jawa Tengah, Yogyakarta, hingga Jawa Timur. Karawitan ini juga ering disebut sebagai musik gamelan. Kata karawitan sendiri berasal dari
            kata "rawit" yang dalam bahasa Jawa memiliki arti halus dan lembut. Sehingga pembawaan gamelan dalam karawitan ini sangatlah halus dan lembut.
            Seni karawitan sering dijumpai dalam acara acara penting upacara pernikahan, upacara keagamaan, dan acara-acara adat lainnya.
          </p>
        </div>


        <h1 className="text-brand-primary mb-3 mt-6 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-2xl lg:leading-snug">
          Gejog Lesung
        </h1>

        <div className="mx-auto mt-3 text-center text-lg dark:prose-invert dark:text-white">
          <p>
            Gejog Lesung adalah kesenian khas daerah Jawa, terutama di sekitar Yogyakarta, Klaten, dan Surakarta. Sesuai dengan namanya, gejog lesung berasal
            dari dua kata, yaitu gejog yang berarti memukul atau menumbuk, dan lesung yang merupakan sebuah alat untuk menumbuk padi. 
            Alat yang digunakan dalam kesenian ini berupa lesung atau wadah panjang dengan cekungan di tengahnya, dan penumbuknya yang disebut gejog atau alu.
            Kesenian gejog lesung diperkirakan pertama kali berkembang pada sekitar abad ke-9. Gejog lesung biasanya dilaksanakan setela panen padi yang dilakukan bersama-sama
            masyarakat setempat. Kesenian ini diselingi nyanyian dan taruan, serta dialog atau cerita sebagai ekspresi kebahagiaan dan pengusir rasa lelah.
          </p>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mt-10 items-center text-center">
          <p className="text-lg">
            Hubungi kami melalui kontak di bawah ini.
          </p>
          <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <EnvelopeIcon className="h-4 w-4" />
            <a href={`mailto:padukuhanngpohp@gmail.com`}>
              padukuhanngepoh@gmail.com
            </a>
          </div>
          <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <PhoneIcon className="h-4 w-4" />
            <a href={`tel:+62 82325646273`}>Dukuh Ngepoh</a>
          </div>
          {/* <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <MapPinIcon className="h-4 w-4" />
            <a href="https://maps.app.goo.gl/BYb5t7nvX2DRjcEz6">
              Lokasi Padukuhan Ngepoh
            </a>
          </div> */}
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-center text-2xl font-semibold dark:text-white">
          Galeri Kesenian
        </h2>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
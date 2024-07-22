import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";

export default function Post({ posts }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Padukuhan Ngepoh
      </h1>
      <div className="text-center">
        <p className="text-lg">
          Kalurahan Nglindur Kapanewon Girisubo, Kabupaten
          Gunungkidul, Daerah Istimewa Yogyakarta
        </p>
        <Image
          src={"/img/ngepoh.png"}
          alt="Langsep Gunungkidul"
          width={800}
          height={400}
          className="mx-auto mb-8 mt-4 object-cover"
        />
      </div>
      <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
        <p>
          Berdiri pada tahun 1915, Padukuhan Ngepoh terletak di Desa Nglindur, Kapanewon Girisubo, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Masyarakat yang tinggal di padukuhan Ngepoh ini
          mayoritasnya adalah lansia dan orang tua. Tercatat sebanyak 65 kepala keluarga yang tinggal di padukuhan ini. Warga yang menetap di Padukuhan ini
          mayoritasnya berprofesi sebagai petani dan peternak. Di setiap malam Selasa, Padukuhan Ngepoh mengadakan kegiatan Karawitan. Selain kegeiatan kesenian Karawitan,
          warga Padukuhan Ngepoh juga suka melaksanakan olahraga bola voli yang hampir setiap malamnya dilaksanakan di lapangan bola voli yang berada di padukuhan ini.

          Padukuhan ini berbatasan langsung dengan Padukuhan Nglindur Kulon sehingga terdapat beberapa kegiatan yang dilakukan bersama-sama.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <p>
          <Link
            href="/news"
            className="relative mx-2 items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
            <span>Semua Berita</span>
          </Link>
        </p>
        <p>
          <Link
            href="/Contact"
            className="relative mx-2 items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
            <span>Kontak Kami</span>
          </Link>
        </p>
      </div>
    </Container>
  );
}
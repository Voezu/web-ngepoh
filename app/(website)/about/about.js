import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Tentang
      </h1>
      <div className="text-center">
        <p className="text-lg">Selamat Datang di Portal Digital Padukuhan Ngepoh</p>
      </div>

      {/* <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div> */}

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Padukuhan Ngepoh merupakan salah satu Padukuhan yang terletak
          di Kapanewon Girisubo. 
        </p>
        <p>
          Padukuhan Ngepoh terletak di Desa Nglindur, Kapanewon Girisubo, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta.
          Terdiri dari empat buah Rukun Tetangga (RT) yang terbagi menjadi RT 13, RT 14, RT 15, dan RT 16. Tercatat sebanyak 65
          kepala keluarga yang terdaftar. Tercatat sebanyak 13 kepala keluarga di RT 13, 16 kepala keluarga di RT 14, 15 kepala keluarga di RT 15, dan 21 kepala keluarga di RT 16.
        </p>
        <p>
          <Link href="/contact">Hubungi Kami</Link>
        </p>
      </div>
    </Container>
  );
}

import Container from "@/components/container";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function umkm() {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        UMKM
      </h1>
      <div className="text-center">
        <p className="text-lg">
            Padukuhan Ngepoh, Kapanewon Girisubo, Kabupaten
            Gunungkidul, Daerah Istimewa Yogyakarta
          </p> 
        
        <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
          <Image
            src={"/img/klb.jpg"}
            alt="Keripik Pisang"
            width={480}
            height={270}
            className="mx-auto mb-5 mt-4 object-cover"
          />

          <p className="mt-2">
            Keripik Pisang KLB Pelepah Pisang
          </p>
        </div>

        <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
          <Image
            src={"/img/keripikpare.jpg"}
            alt="Keripik Pare"
            width={480}
            height={270}
            className="mx-auto mb-5 mt-4 object-cover"
          />

          <p className="mt-2">
            Keripik Pare Khas Ngepoh
          </p>
        </div>

        <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
          <Image
            src={"/img/pangli.png"}
            alt="Pangsit Linting"
            width={480}
            height={270}
            className="mx-auto mb-5 mt-4 object-cover"
          />

          <p className="mt-2">
            Pangsit Linting KUBE Ngepoh
          </p>
        </div>

        <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
          <Image
            src={"/img/aminsayurngepohnglindur.jpg"}
            alt="Bakul Sayur Amin"
            width={480}
            height={270}
            className="mx-auto mb-5 mt-4 object-cover"
          />

          <p className="mt-2">
            Bakul Sayur Amin Ngepoh, Nglindur
          </p>
        </div>

        <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
          <Image
            src={"/img/anekasnackBuAmi.png"}
            alt="Keripik Pare"
            width={480}
            height={270}
            className="mx-auto mb-5 mt-4 object-cover"
          />

          <p className="mt-2">
            Aneka Snack Bu Ami
          </p>
        </div>

        <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
          <Image
            src={"/img/keripikbasrenghikmahsnack.jpg"}
            alt="Keripik Pare"
            width={480}
            height={270}
            className="mx-auto mb-5 mt-4 object-cover"
          />

          <p className="mt-2">
            Keripik Basreng Hikmah Snack
          </p>
        </div>

        <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
          <Image
            src={"/img/SegoPecelBuAmi.png"}
            alt="Keripik Pare"
            width={480}
            height={270}
            className="mx-auto mb-5 mt-4 object-cover"
          />

          <p className="mt-2">
            Sego Pecel Bu Ami
          </p>
        </div>

        <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
          <Image
            src={"/img/sayuransegardeviminartingepoh.jpg"}
            alt="Bakul Sayur Devi Aminarti"
            width={480}
            height={270}
            className="mx-auto mb-5 mt-4 object-cover"
          />

          <p className="mt-2">
            Sayuran Segar Devi Aminarti Ngepoh
          </p>
        </div>
        
      </div>

      <div className="mx-auto mt-5 text-center text-lg dark:prose-invert dark:text-white">
        
        <p className="mt-4">
          
        </p>
        <p className="mt-4 text-center">
          Dukung produk lokal dan nikmati makanan dan snack dari
          Padukuhan Ngepoh.
        </p>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mt-10 items-center text-center">
          <p className="text-lg">
            Hubungi kami melalui kontak di bawah ini.
          </p>
          <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <EnvelopeIcon className="h-4 w-4" />
            <a href={`mailto:padukuhanngepoh@gmail.com`}>
              padukuhanngepoh@gmail.com
            </a>
          </div>
          
          <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <PhoneIcon className="h-4 w-4" />
            {/* <a href={`tel:+62 83105475200`}>Finda</a> */}
            {/* <PhoneIcon className="h-4 w-4" />
            <a href={`tel:+62 87839161287`}>Arsya</a> */}
          </div>
          {/* <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <MapPinIcon className="h-4 w-4" />
            <a href="https://maps.app.goo.gl/BYb5t7nvX2DRjcEz6">
              Lokasi Padukuhan Ngepoh
            </a>
          </div> */}
        </div>
      </div>
    </Container>
  );
}
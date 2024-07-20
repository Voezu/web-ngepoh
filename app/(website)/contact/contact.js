import Container from "@/components/container";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

export default function Contact({ settings }) {
  return (
    <Container>
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Kontak Kami
        </h1>
        <div className="items-center text-center">
          <p className="text-lg">
            Hubungi Kami Melalui Kontak di Bawah Ini.
          </p>
          <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <EnvelopeIcon className="h-4 w-4" />
            <a href={`mailto:padukuhanngepoh@gmail.com`}>
              padukuhanngepoh@gmail.com
            </a>
          </div>
          <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <PhoneIcon className="h-4 w-4" />
            <a href={`tel:+62 82325646273`}>Dukuh Ngepoh</a>
          </div>
          <div className="text-dark-600 mt-2 flex items-center justify-center space-x-2 text-center dark:text-gray-400">
            <MapPinIcon className="h-4 w-4" />
            <a href="https://maps.app.goo.gl/nk5Uo2NuD888YxPZ9">
              Lokasi Padukuhan Ngepoh
            </a>
          </div>
        </div>
      </div>
      <div className="map-container mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d359.3444285983194!2d110.75998139590718!3d-8.123643963526808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1721465826403!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Container>
  );
}
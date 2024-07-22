import { getSettings } from "@/lib/sanity/client";
import Contact from "./umkm";

export default async function UMKMPage() {
  const settings = await getSettings();
  return <Contact settings={settings} />;
}

// export const revalidate = 60;

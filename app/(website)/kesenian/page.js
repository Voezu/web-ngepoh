import { getSettings } from "@/lib/sanity/client";
import Kesenian from "./kesenian";

export default async function KesenianPage() {
  const settings = await getSettings();
  return <Kesenian settings={settings} />;
}

// export const revalidate = 60;

import BestSeller from "@/components/ui/home/best-seller/BestSeller";
import Hero from "@/components/ui/home/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <main>
               <Hero />
               <BestSeller />
        </main>
    </div>
  );
}

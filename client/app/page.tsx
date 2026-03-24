import BestSeller from "@/components/ui/home/best-seller/BestSeller";
import Footer from "@/components/ui/home/footer/Footer";
import Hero from "@/components/ui/home/hero/Hero";
import Reviews from "@/components/ui/home/reviews/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <main>
               <Hero />
               <BestSeller />
               <Reviews />
               <Footer />
        </main>
    </div>
  );
}

import BestSeller from "@/components/ui/home/best-seller/BestSeller";
import Hero from "@/components/ui/home/hero/Hero";
import Reviews from "@/components/ui/home/reviews/Reviews";

export default function Home() {
  return (
    <div>
        <main>
               <Hero />
               <BestSeller />
               <Reviews />
        </main>
    </div>
  );
}

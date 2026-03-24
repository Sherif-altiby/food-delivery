"use client";

import { ROUTES } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-68px)] bg-[#0a0a0a] flex items-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="space-y-4">
            <h4 className="text-white/40 text-center lg:text-left uppercase tracking-[0.3em] text-sm font-medium">
              Culinary Excellence
            </h4>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-center lg:text-left font-bold text-white leading-tight">
              Artistry in <br /> 
              <span className="text-white/60 italic">Every Bite</span>
            </h1>
            <p className="text-white/60 text-lg text-center lg:text-left lg:max-w-md leading-relaxed">
              Experience the perfect blend of tradition and innovation. 
              Our master chefs craft every dish to be a journey of flavors 
              that stay with you long after the meal.
            </p>
          </div>

          <div className="flex justify-center lg:justify-between gap-5">
            <Link 
              href={ROUTES.DISCOVER} 
              className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              Explore Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right Side: Simple Framed Image */}
        <div className="hidden md:block relative aspect-square md:aspect-video lg:aspect-square w-full ">
          <div className="absolute inset-0 border border-white/10 -translate-x-4 -translate-y-4 rounded-2xl" />
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image 
              src="/hero.jpg" 
              alt="Hero culinary dish" 
              className="w-full h-full object-cover"
              fill
              priority
            />
            {/* Soft gradient to make the image feel integrated */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
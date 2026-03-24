"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const REVIEWS = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  name: ["Alex Rivera", "Sarah Chen", "Marcus Thorne", "Elena Rossi"][i % 4],
  role: "Verified Guest",
  content: "The culinary precision here is unmatched. An absolute masterpiece in every sense of the word. I've never experienced flavors quite like this.",
}));

const ReviewsCarousel = () => {
  // 1. Initialize Embla with Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <p className="text-white/40 uppercase tracking-[0.4em] text-xs font-semibold">
              Guest Feedback
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Trusted by <span className="text-white/50 italic font-serif text-3xl md:text-5xl">Hundreds</span>
            </h2>
          </div>

          <div className="hidden md:flex gap-3">
            <button 
              onClick={scrollPrev}
              className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
              >
                <div className="h-full p-10 rounded-2xl bg-white/2 border border-white/5 hover:border-white/20 transition-colors duration-500 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6 text-white/20">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed italic mb-10">
                      "{review.content}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-linear-to-tr from-neutral-800 to-neutral-900 border border-white/10" />
                      <div>
                        <h5 className="text-white font-medium text-sm">{review.name}</h5>
                        <p className="text-white/30 text-[10px] uppercase tracking-widest">{review.role}</p>
                      </div>
                    </div>
                    <Quote className="text-white/10" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation (Dots) */}
        <div className="flex md:hidden justify-center gap-4 mt-10">
           <button onClick={scrollPrev} className="text-white/40 hover:text-white transition-colors">Prev</button>
           <span className="text-white/20">/</span>
           <button onClick={scrollNext} className="text-white/40 hover:text-white transition-colors">Next</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, Star, ShieldCheck, Truck } from "lucide-react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="bg-background min-h-screen pt-32 pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          
          {/* Left Side: Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-section-bg border border-white/5">
              <Image
                src="/product.png" 
                alt="Culinary Masterpiece"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Artistic Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-background/60 backdrop-blur-xl border border-white/10 rounded-full">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Chef's Signature</p>
              </div>
            </div>
            
            {/* Thumbnail Row (Optional Touch) */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative rounded-xl overflow-hidden bg-section-bg border border-white/5 cursor-pointer hover:border-primary/50 transition-colors">
                  <Image src="/product.png" alt="view" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Sticky Content */}
          <div className="flex flex-col">
            <div className="sticky top-32 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary/80">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-medium tracking-widest uppercase">4.9 Rare Selection</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  Truffle-Infused <br /> 
                  <span className="text-gradient italic font-serif">Aged Wagyu</span>
                </h1>
                <p className="text-2xl font-light text-primary">$120.00</p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">The Experience</h4>
                <p className="text-secondary/70 leading-relaxed text-lg italic font-light">
                  A symphony of textures and flavors. Our Wagyu is aged for 45 days, 
                  finished with freshly shaved black truffles and a reduction of 20-year-old balsamic.
                </p>
              </div>

              {/* Product Details (Accordion Style Feel) */}
              <div className="grid grid-cols-2 gap-6 py-8 border-y border-white/5">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase text-white/30 tracking-widest">Ingredients</p>
                  <p className="text-sm text-white/80">Aged Wagyu, Black Truffle, Gold Flakes</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase text-white/30 tracking-widest">Prep Time</p>
                  <p className="text-sm text-white/80">25 - 35 Minutes</p>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-white/10 rounded-full px-4 py-2 bg-white/5">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-primary transition-colors p-1">
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-mono text-lg">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:text-primary transition-colors p-1">
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="flex-1 btn-primary flex items-center justify-center gap-3 group">
                    <ShoppingBag size={18} className="group-hover:-translate-y-1 transition-transform" />
                    Add to Experience
                  </button>
                </div>

                {/* Trust Signals */}
                <div className="flex justify-between items-center px-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/20 font-bold">
                    <Truck size={14} /> Global Priority Shipping
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/20 font-bold">
                    <ShieldCheck size={14} /> Guaranteed Freshness
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
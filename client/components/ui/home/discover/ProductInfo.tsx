"use client"

import { Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react"
import { useState } from "react";

 
const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);
  return (
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
  )
}

export default ProductInfo
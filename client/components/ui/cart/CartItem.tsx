"use client";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

const CartItem = ({ name, price, category, image }: CartItemProps) => (
  <div className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 bg-section-bg/30 border border-white/5 rounded-3xl transition-all hover:bg-section-bg/50">
    {/* Product Image */}
    <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-background">
      <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>

    {/* Info */}
    <div className="flex-1 space-y-1 text-center sm:text-left">
      <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">{category}</p>
      <h3 className="text-lg font-medium text-white">{name}</h3>
      <p className="text-white/40 text-sm font-mono">${price}</p>
    </div>

    {/* Quantity Controls */}
    <div className="flex items-center border border-white/10 rounded-full px-4 py-2 bg-background/50">
      <button className="text-white/40 hover:text-primary transition-colors"><Minus size={14} /></button>
      <span className="w-10 text-center text-sm font-mono">01</span>
      <button className="text-white/40 hover:text-primary transition-colors"><Plus size={14} /></button>
    </div>

    {/* Remove Button */}
    <button className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 p-2 text-white/10 hover:text-red-400 transition-colors">
      <X size={20} />
    </button>
  </div>
);

export default CartItem;
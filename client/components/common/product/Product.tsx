"use client";

import { ROUTES } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Product = () => {
  return (
    <Link
      href={`${ROUTES.DISCOVER}/id`}
      className="group relative block w-full p-3 rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:-translate-y-2"
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl bg-neutral-900">
        <Image
          src="/product.png"
          alt="product image"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-75 group-hover:brightness-100"
        />

        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          New Arrival
        </div>

        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Content Section */}
      <div className="relative mt-5 px-1">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-[10px] uppercase text-white/40 tracking-[0.2em]">Category</p>
            <h3 className="text-lg font-medium tracking-tight text-white group-hover:text-white transition-colors">
              Product Name
            </h3>
          </div>
          
          <div className="text-right">
            <span className="block text-sm text-white/40 line-through decoration-white/20">$45</span>
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              $30
            </p>
          </div>
        </div>

        {/* Animated Underline Progress Bar */}
        <div className="relative mt-4 h-[1px] w-full bg-white/10 overflow-hidden">
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out" />
        </div>
      </div>
    </Link>
  );
};

export default Product;
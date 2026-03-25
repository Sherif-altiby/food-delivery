"use client";

import Link from "next/link";
import {  ShoppingBag } from "lucide-react";
import { ROUTES } from "@/constants";

const Header = () => {
  return (
    <nav className="bg-[#0a0a0a] border-b border-white/5 h-20 w-full flex items-center">
      <div className="container flex items-center justify-between">
        
        {/* Logo Section */}
        <Link 
          href={ROUTES.HOME}
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          {/* Minimalist Logo Icon */}
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-black font-black text-xs -rotate-45 group-hover:rotate-0 transition-transform">A</span>
          </div>
          
          <h1 className="text-xl font-bold tracking-[0.2em] text-white uppercase">
            Artistry<span className="text-white/30 italic font-light lowercase">.culinary</span>
          </h1>
        </Link>

        {/* Action Section */}
        <div className="flex items-center gap-6">
         

          {/* Cart with Status Dot */}
          <Link 
            href={ROUTES.CART} 
            className="relative p-2 text-white/60 hover:text-white transition-all hover:scale-110"
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            
            {/* The Badge: Simple and Modern */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-white rounded-full border-2 border-[#0a0a0a]" />
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Header;
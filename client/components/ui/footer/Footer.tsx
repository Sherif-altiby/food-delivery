"use client";

import { ROUTES } from "@/constants";
import Link from "next/link";
import {  ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Artistry <br /> 
              <span className="text-white/40 italic font-serif">In Every Bite.</span>
            </h2>
            <p className="text-white/50 max-w-sm leading-relaxed text-lg">
              Elevating the culinary experience through passion, precision, and the finest seasonal ingredients.
            </p>
          </div>

          <div className="flex flex-col justify-end space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 font-medium">
              Join the inner circle
            </p>
            <div className="relative group max-w-md">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors placeholder:text-white/20"
              />
              <button className="absolute right-0 bottom-4 hover:translate-x-1 transition-transform">
                <ArrowUpRight size={24} className="text-white/60 group-focus-within:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-white/5 pt-12">
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href={ROUTES.DISCOVER} className="hover:text-white/50 transition-colors">The Menu</Link></li>
              <li><Link href="#" className="hover:text-white/50 transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-white/50 transition-colors">Private Dining</Link></li>
              <li><Link href="#" className="hover:text-white/50 transition-colors">Reservations</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Locations</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>Downtown Manhattan, NY</li>
              <li>Beverly Hills, CA</li>
              <li>Mayfair, London</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>hello@artistry.com</li>
              <li>+1 (234) 567-890</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Social</h4>
            <div className="flex gap-6">
              {/* <Instagram className="w-5 h-5 cursor-pointer hover:text-white/50 transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white/50 transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white/50 transition-colors" /> */}
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © {currentYear} Artistry Culinary Group. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
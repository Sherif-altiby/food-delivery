"use client";
import MainButton from "@/components/common/button/MainButton";
import { ArrowRight } from "lucide-react";

const OrderSummary = ({ subtotal }: { subtotal: number }) => {
  const shipping = 20.00;
  const total = subtotal + shipping;

  return (
    <div className="sticky top-32 p-8 bg-section-bg border border-white/5 rounded-[2.5rem] shadow-2xl space-y-8">
      <h2 className="text-xl font-bold tracking-tight">Summary</h2>
      
      <div className="space-y-4 border-b border-white/5 pb-8">
        <div className="flex justify-between text-sm">
          <span className="text-secondary/40">Subtotal</span>
          <span className="text-white font-mono">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary/40">Shipping</span>
          <span className="text-white font-mono">${shipping.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <span className="text-[10px] uppercase tracking-[0.3em] text-secondary/40 font-bold">Total</span>
        <span className="text-3xl font-bold text-primary font-mono">${total.toFixed(2)}</span>
      </div>

      <MainButton content="Begin Checkout" isLink={false} />
    </div>
  );
};

export default OrderSummary;
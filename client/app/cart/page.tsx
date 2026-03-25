"use client";

import CartItem from "@/components/ui/cart/CartItem";
import OrderSummary from "@/components/ui/cart/OrderSummary";

 

const CartPage = () => {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <div className="container">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter">
            Your <span className="text-gradient italic font-serif">Selection</span>
          </h1>
          <p className="text-secondary/40 text-sm">Review your curated culinary choices before checkout.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* List Section */}
          <div className="lg:col-span-8 space-y-4">
            <CartItem 
              id="1" 
              name="Aged Wagyu Steak" 
              price={120.00} 
              category="Main Course" 
              image="/product.png" 
            />
            <CartItem 
              id="2" 
              name="Truffle Pasta" 
              price={85.00} 
              category="Rare Finds" 
              image="/product.png" 
            />
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-4">
            <OrderSummary subtotal={205.00} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
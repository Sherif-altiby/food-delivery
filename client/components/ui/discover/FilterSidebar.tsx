"use client";

const FilterSidebar = () => {
  const categories = ["All", "Main Course", "Desserts", "Rare Finds", "Appetizers"];
  
  return (
    <aside className="w-full lg:w-64 space-y-10 lg:sticky top-32 h-fit shadow-2xl border border-primary/20 p-3 rounded-2xl">
      {/* Category Filter */}
      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Category</h4>
        <div className="flex flex-wrap lg:flex-col gap-2">
          {categories.map((cat) => (
            <button key={cat} className="text-left px-4 py-2 rounded-xl border border-white/5 hover:border-primary/40 hover:text-primary transition-all text-sm text-secondary/60">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Sort By</h4>
        <select className="w-full bg-section-bg border border-white/5 rounded-xl p-3 outline-none text-sm text-secondary/60 focus:border-primary/40">
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Best Seller</option>
        </select>
      </div>

      {/* Price Range Placeholder */}
      <div className="space-y-4">
        <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Max Price</h4>
        <input type="range" className="w-full accent-primary bg-white/10 h-1 rounded-lg appearance-none cursor-pointer" />
        <div className="flex justify-between text-[10px] text-white/20 uppercase font-bold">
          <span>$10</span>
          <span>$500</span>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
"use client";
import Product from "@/components/common/product/Product";
import FilterSidebar from "@/components/ui/discover/FilterSidebar";
import SearchBar from "@/components/ui/discover/SearchBar";
import { useState } from "react";

const DiscoverPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="bg-background min-h-screen pt-32 pb-20">
      <div className="container space-y-12">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter">
              Discover{" "}
              <span className="text-gradient italic font-serif">
                Excellence
              </span>
            </h1>
            <p className="text-secondary/40 max-w-md">
              Browse our curated selection of signature dishes and artisanal
              ingredients.
            </p>
          </div>
          <SearchBar onChange={setSearchQuery} />
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-12 ">
          <FilterSidebar />
          <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DiscoverPage;

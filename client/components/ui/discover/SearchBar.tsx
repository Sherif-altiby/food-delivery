"use client";
import { Search } from "lucide-react";

const SearchBar = ({ onChange }: { onChange: (val: string) => void }) => (
  <div className="relative group w-full max-w-md">
    <Search
      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors"
      size={20}
    />
    <input
      type="text"
      placeholder="Search for a masterpiece..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-section-bg border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-white/10 text-sm"
    />
  </div>
);

export default SearchBar;

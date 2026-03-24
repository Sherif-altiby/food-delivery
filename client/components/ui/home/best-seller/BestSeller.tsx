import Product from "@/components/common/product/Product";
import { ROUTES } from "@/constants";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const BestSeller = () => {
  return (
    <section className="b_section py-20">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-white/5 pb-6">
          {/* Title Section */}
          <div className="space-y-1 group">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
                Curated Selection
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white italic">
              Our Best <span className="text-white/60">Sellers</span>
            </h2>
          </div>

          {/* Discover Link */}
          <Link
            href={ROUTES.DISCOVER}
            className="group flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span className="text-sm font-medium tracking-wide">
              Discover all
            </span>
            <MoveRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <div className="container mt-10 grid grid-cols-4 gap-3 ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default BestSeller;

import { ButtonTypes } from "@/types/index.types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MainButton = ({ content, isLink, navTo }: ButtonTypes) => {
  return (
    <>
      {isLink ? (
        <Link href={navTo || ""} className="w-full group relative overflow-hidden rounded-2xl p-px transition-all duration-500 hover:shadow-[0_0_40px_rgba(233,193,118,0.2)]">
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary to-primary/20 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-background rounded-[15px] py-5 px-8 transition-colors duration-500 group-hover:bg-transparent">
            <div className="relative z-10 flex items-center justify-center gap-3 tracking-[0.3em] text-[10px] uppercase font-bold transition-colors duration-500 text-primary group-hover:text-background">
              {content}
              <ArrowRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </div>

            <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-[600px] ease-expo" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_70%)]" />
          </div>
        </Link >
      ) : (
        <button className="w-full group relative overflow-hidden rounded-2xl p-px transition-all duration-500 hover:shadow-[0_0_40px_rgba(233,193,118,0.2)]">
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary to-primary/20 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-background rounded-[15px] py-5 px-8 transition-colors duration-500 group-hover:bg-transparent">
            <div className="relative z-10 flex items-center justify-center gap-3 tracking-[0.3em] text-[10px] uppercase font-bold transition-colors duration-500 text-primary group-hover:text-background">
              {content}
              <ArrowRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </div>

            <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-[600px] ease-expo" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_70%)]" />
          </div>
        </button>
      )}
    </>
  );
};

export default MainButton;

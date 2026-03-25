"use client";

import Link from "next/link";
import { User, Mail, Phone  } from "lucide-react";
import InputGroup from "@/components/common/input/InputGroup";
import MainButton from "@/components/common/button/MainButton";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Background Decorative Element (Subtle radial glow) */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,193,118,0.05),transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-120  relative">
        

        <div className="bg-section-bg border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-3xl">
          {/* Brand Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold tracking-tighter text-white">
              Welcome <span className="text-gradient italic font-serif">Back</span>
            </h1>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name */}
            <InputGroup type="text" label="Full Name" Icon={User} required />

            {/* Phone */}
            <InputGroup type="tel" label="Phone Number" Icon={Phone} required />

            <MainButton content="Login" isLink={false} />
          </form>

          {/* Footer Navigation */}
          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-secondary/40 tracking-wide">
              Not have an account?
              <Link href="/signup" className="text-primary font-bold hover:text-white transition-colors">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
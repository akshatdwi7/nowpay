"use client";

import { Lora, Manrope } from "next/font/google";

const brandSerif = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
  variable: "--font-nav-brand",
});

const navSans = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nav-sans",
});

export default function Navbar() {
  return (
    <header
      className={`${brandSerif.variable} ${navSans.variable} sticky top-0 z-50 w-full overflow-hidden`}
    >
      {/* same dark base + soft gradient as hero */}
      <div className="absolute inset-0 bg-[#050807]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(168,188,165,0.06)_0%,transparent_50%)]" />
      {/* subtle dot texture to match hero */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(168,188,165,0.18) 1px, transparent 1px), radial-gradient(circle at center, rgba(123,163,184,0.12) 1px, transparent 1px)`,
          backgroundSize: "26px 26px, 30px 30px",
        }}
      />
      {/* soft bottom edge instead of hard border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(168,188,165,0.2)_20%,rgba(168,188,165,0.35)_50%,rgba(168,188,165,0.2)_80%,transparent)]" />

      <div
        className="relative mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 sm:h-16 sm:px-10 lg:px-16"
        style={{ fontFamily: "var(--font-nav-sans)" }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-[#f7faf7] no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#A8BCA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050807]"
          style={{ fontFamily: "var(--font-nav-brand)" }}
        >
          <span className="text-xl font-normal italic tracking-tight text-[#E8F1EB] sm:text-2xl">
            Noww Club
          </span>
        </a>
        <nav className="flex items-center gap-5 sm:gap-8">
          <a
            href="#membership"
            className="text-[13px] font-medium text-[#9cb5b0] transition-colors hover:text-[#c1d0c0] focus-visible:ring-2 focus-visible:ring-[#A8BCA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050807] sm:text-sm"
          >
            Membership
          </a>
          <a
            href="#perks"
            className="hidden text-[13px] font-medium text-[#9cb5b0] transition-colors hover:text-[#c1d0c0] focus-visible:ring-2 focus-visible:ring-[#A8BCA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050807] sm:inline-block sm:text-sm"
          >
            Perks
          </a>
        </nav>
      </div>
    </header>
  );
}

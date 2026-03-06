"use client";

export default function ButtonNew() {
  return (
    <button
      type="button"
      className="group relative inline-flex items-center justify-center rounded-full border border-[#1f2a24] bg-[linear-gradient(135deg,#050807,#121914,#2e3f33,#A8BCA5)] px-9 py-3.5 text-sm font-semibold tracking-tight text-[#f5f8f5] shadow-[0_18px_40px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(0,0,0,0.95)] active:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A8BCA5] focus-visible:ring-offset-[#050807] sm:text-base"
    >
      <span className="pointer-events-none absolute inset-px rounded-full bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.32),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(168,188,165,0.55),transparent_55%)] opacity-95 mix-blend-screen" />
      <span className="relative flex items-center gap-2">
        <span>Choose your membership</span>
        <span className="translate-x-0.5 text-base transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
}


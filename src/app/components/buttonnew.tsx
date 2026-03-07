"use client";

export default function ButtonNew() {
  return (
    <button
      type="button"
      onClick={() => {
        document
          .getElementById("membership")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-[#1f2a24] px-8 py-2.5 text-sm font-medium tracking-wide text-[#f5f8f5] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-200 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#A8BCA5]/50 focus:ring-offset-2 focus:ring-offset-[#050807] active:scale-[0.98] sm:h-13 sm:px-10 sm:text-base"
      style={{
        background: "linear-gradient(90deg, #050807 0%, #0f1613 35%, #1a2e22 70%, #A8BCA5 100%)",
      }}
    >
      {/* continuous shine sweep — one direction, modern SaaS-style */}
      <span
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/2 opacity-70"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 100%)",
          animation: "shine 2.8s ease-in-out infinite",
        }}
        aria-hidden
      />
      <span className="relative z-10">Choose your membership →</span>
    </button>
  );
}

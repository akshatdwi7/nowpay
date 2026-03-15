"use client";

import Link from "next/link";
import { Cormorant_Garamond, Lora, Manrope } from "next/font/google";
import { CheckCircle2 } from "lucide-react";
const accentSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-enrolled-serif",
});

const bodySans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-enrolled-sans",
});

const brandSerif = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
  variable: "--font-enrolled-brand",
});

export default function EnrolledPage() {
  return (
    <section
      className={`${bodySans.variable} relative isolate flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#050807] px-5 py-16 text-center sm:min-h-[88vh] sm:px-8 sm:py-24 md:px-10`}
      style={{ fontFamily: "var(--font-enrolled-sans)" }}
    >
      {/* background — match hero: washes + gradients + dot grid */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/80 to-transparent sm:h-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#050807] to-transparent sm:h-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(168,188,165,0.14) 0%, transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(168,188,165,0.15) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto w-full max-w-lg">
        {/* brand name only */}
        <Link
          href="/"
          className={`${brandSerif.variable} group mb-12 inline-flex rounded-[28px] border border-[#1f2a24] bg-[#0a0f0c]/80 px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-200 hover:border-[#A8BCA5]/30 hover:shadow-[0_8px_40px_rgba(168,188,165,0.08)] focus:outline-none focus:ring-2 focus:ring-[#A8BCA5]/50 focus:ring-offset-2 focus:ring-offset-[#050807] sm:mb-14 sm:rounded-[32px] sm:px-6 sm:py-4`}
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset, 0 8px 32px rgba(0,0,0,0.3)",
          }}
          aria-label="Noww Club home"
        >
          <span className="text-2xl italic tracking-tight text-[#e8f1eb] sm:text-3xl" style={{ fontFamily: "var(--font-enrolled-brand)" }}>
            Noww Club
          </span>
        </Link>

        {/* card container — clean, contained */}
        <div
          className="relative overflow-hidden rounded-2xl border border-[#1f2a24] bg-[#0a0f0c]/95 px-6 py-10 shadow-[0_24px_48px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:rounded-[1.75rem] sm:px-10 sm:py-14 md:px-12"
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset, 0 24px 48px rgba(0,0,0,0.35)",
          }}
        >
          {/* top accent line */}
          <div
            className="absolute inset-x-0 top-0 h-px rounded-t-2xl sm:rounded-t-[1.75rem]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(168,188,165,0.35), transparent)",
            }}
          />

          {/* success icon */}
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
            style={{
              background: "linear-gradient(135deg, rgba(168,188,165,0.25) 0%, rgba(34,197,94,0.15) 100%)",
              border: "1px solid rgba(168,188,165,0.35)",
              boxShadow: "0 0 24px rgba(168,188,165,0.12)",
            }}
          >
            <CheckCircle2
              className="h-7 w-7 text-[#A8BCA5] sm:h-8 sm:w-8"
              strokeWidth={2}
              aria-hidden
            />
          </div>

          <h1
            className={`${accentSerif.variable} mt-6 text-3xl font-semibold italic leading-tight text-[#E8F1EB] sm:mt-8 sm:text-4xl md:text-[2.6rem]`}
            style={{ fontFamily: "var(--font-enrolled-serif)" }}
          >
            Yaaay, you are finally enrolled
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-[#9cb5b0] sm:mt-5 sm:text-base sm:leading-relaxed">
            Welcome to Noww Club. You’re in — we’ll see you on the inside.
          </p>

          {/* decorative dots */}
          <div className="mt-8 flex justify-center gap-1.5 sm:mt-10">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#A8BCA5]/40"
                aria-hidden
              />
            ))}
          </div>

          <Link
            href="/#membership"
            className="mt-8 inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border border-[#A8BCA5]/40 bg-[#0c1210] px-6 py-3 text-sm font-medium tracking-wide text-[#f5f8f5] transition-colors hover:border-[#A8BCA5]/60 hover:bg-[#111816] focus:outline-none focus:ring-2 focus:ring-[#A8BCA5]/50 focus:ring-offset-2 focus:ring-offset-[#050807] active:scale-[0.98] sm:mt-10 sm:h-13 sm:min-w-[220px] sm:text-base"
          >
            Back to membership
          </Link>
        </div>

        <p className="mt-8 text-[12px] text-[#7a9088] sm:text-[13px]">
          You can close this page or head back to explore.
        </p>
      </div>
    </section>
  );
}

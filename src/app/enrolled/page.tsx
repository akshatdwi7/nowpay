"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
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

function fireConfetti() {
  const colors = ["#A8BCA5", "#86efac", "#e8f1eb"];

  // Single soft burst from center — refined, not overwhelming
  confetti({
    particleCount: 45,
    spread: 60,
    origin: { y: 0.55 },
    colors,
    scalar: 0.85,
    ticks: 180,
    gravity: 0.9,
    drift: 0.2,
  });

  // One gentle follow-up from the sides, delayed slightly
  setTimeout(() => {
    confetti({
      particleCount: 18,
      angle: 70,
      spread: 45,
      origin: { x: 0.2, y: 0.65 },
      colors,
      scalar: 0.75,
      ticks: 120,
    });
    confetti({
      particleCount: 18,
      angle: 110,
      spread: 45,
      origin: { x: 0.8, y: 0.65 },
      colors,
      scalar: 0.75,
      ticks: 120,
    });
  }, 280);
}

export default function EnrolledPage() {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;
    const t = setTimeout(fireConfetti, 480);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`${bodySans.variable} relative isolate flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#050807] px-5 py-16 text-center sm:min-h-[88vh] sm:px-8 sm:py-24 md:px-10`}
      style={{ fontFamily: "var(--font-enrolled-sans)" }}
    >
      {/* CRED-style dark gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 20%, rgba(168,188,165,0.08) 0%, transparent 50%), radial-gradient(ellipse 80% 50% at 50% 80%, rgba(168,188,165,0.04) 0%, transparent 50%), #050807",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/60 to-transparent sm:h-52" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#050807] to-transparent sm:h-52" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(168,188,165,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto w-full max-w-lg">
        {/* brand — minimal */}
        <Link
          href="/"
          className={`${brandSerif.variable} group mb-10 inline-block rounded-2xl border border-[#1f2a24] bg-[#0a0f0c]/60 px-5 py-2.5 backdrop-blur-sm transition-all duration-200 hover:border-[#A8BCA5]/25 focus:outline-none focus:ring-2 focus:ring-[#A8BCA5]/40 focus:ring-offset-2 focus:ring-offset-[#050807] sm:mb-12`}
          aria-label="Noww Club home"
        >
          <span className="text-xl italic tracking-tight text-[#e8f1eb] sm:text-2xl" style={{ fontFamily: "var(--font-enrolled-brand)" }}>
            Noww Club
          </span>
        </Link>

        {/* card — scale-in + CRED-like clean block */}
        <div
          className="relative overflow-hidden rounded-[1.75rem] border border-[#1a2420] bg-[#080c0a]/90 px-6 py-12 backdrop-blur-md sm:rounded-4xl sm:px-12 sm:py-16"
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 32px 64px rgba(0,0,0,0.45), 0 0 80px rgba(168,188,165,0.06)",
            animation: "enrolledCardIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
          }}
        >
          {/* top glow line */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 10%, rgba(168,188,165,0.5) 50%, transparent 90%)",
            }}
          />

          {/* success icon — subtle pulse */}
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full sm:h-17 sm:w-17"
            style={{
              background: "linear-gradient(145deg, rgba(168,188,165,0.2) 0%, rgba(34,197,94,0.08) 100%)",
              border: "1px solid rgba(168,188,165,0.3)",
              boxShadow: "0 0 32px rgba(168,188,165,0.1), inset 0 1px 0 rgba(255,255,255,0.06)",
              animation: "enrolledIconIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both",
            }}
          >
            <CheckCircle2 className="h-8 w-8 text-[#A8BCA5] sm:h-9 sm:w-9" strokeWidth={2} aria-hidden />
          </div>

          <h1
            className={`${accentSerif.variable} mt-8 text-3xl font-semibold italic leading-tight text-[#f0f5f1] sm:mt-10 sm:text-4xl md:text-[2.75rem]`}
            style={{
              fontFamily: "var(--font-enrolled-serif)",
              animation: "enrolledTextIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both",
            }}
          >
            Welcome to Noww Club.
          </h1>

          <p
            className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-[#b8c8d0] sm:text-base"
            style={{ animation: "enrolledTextIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both" }}
          >
            Your journey toward a more intentional and aligned life begins here.
          </p>

          <p
            className="mx-auto mt-4 max-w-sm text-[13px] leading-relaxed text-[#8ba3b5]"
            style={{ animation: "enrolledTextIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both" }}
          >
            Our team will reach out shortly to help you get started.
          </p>

          <Link
            href="/#membership"
            className="mt-10 inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border border-[#A8BCA5]/35 bg-[#0c1210] px-6 py-3 text-sm font-medium tracking-wide text-[#f5f8f5] transition-all duration-200 hover:border-[#A8BCA5]/55 hover:bg-[#111816] hover:shadow-[0_0_24px_rgba(168,188,165,0.08)] focus:outline-none focus:ring-2 focus:ring-[#A8BCA5]/50 focus:ring-offset-2 focus:ring-offset-[#050807] active:scale-[0.98] sm:mt-12 sm:h-13 sm:min-w-[220px] sm:text-base"
            style={{ animation: "enrolledTextIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both" }}
          >
            Back to membership
          </Link>
        </div>

        <p className="mt-8 text-[12px] text-[#6b7f78] sm:text-[13px]">
          You can close this page or head back to explore.
        </p>
      </div>
    </section>
  );
}

 "use client";

import { Cormorant_Garamond, Manrope } from "next/font/google";
import ButtonNew from "./buttonnew";

const accentSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic"],
  variable: "--font-accent-serif",
});

const sleekSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sleek-sans",
});

export default function Hero() {
  return (
    <section
      className={`${sleekSans.variable} relative isolate flex min-h-svh items-center overflow-hidden bg-[#050807] px-5 py-16 text-[#f4f7f3] sm:px-10 sm:py-20 lg:px-16`}
      style={{ fontFamily: "var(--font-sleek-sans)" }}
    >
      {/* soft washes */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_26rem_at_12%_0%,rgba(168,188,165,0.22),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(46rem_30rem_at_88%_100%,rgba(5,8,7,0.9),transparent_72%)]" />
      {/* dot grid — more visible, green + blue */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(168,188,165,0.22) 1.5px, transparent 1.5px), radial-gradient(circle at center, rgba(123,163,184,0.16) 1px, transparent 1px)`,
          backgroundSize: "26px 26px, 30px 30px",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl text-center">
        <h1 className="text-4xl leading-[1.05] font-medium tracking-[-0.02em] text-[#f7faf7] sm:text-6xl sm:font-semibold sm:tracking-[-0.03em] lg:text-7xl">
          Built for
        </h1>

        <div className="relative mt-4 inline-flex sm:mt-6">
          <span className="pointer-events-none absolute inset-x-6 -bottom-4 h-7 rounded-full bg-black/60 blur-xl sm:h-9" />
          <span className="pointer-events-none absolute -inset-px rounded-4xl bg-[linear-gradient(140deg,#050807_0%,#101712_35%,#A8BCA5_100%)]" />
          <p
            className={`${accentSerif.variable} glow-pill relative inline-flex items-center justify-center rounded-[1.9rem] border border-white/40 bg-[linear-gradient(135deg,rgba(5,8,7,0.96)_0%,rgba(20,27,23,0.96)_46%,rgba(15,23,19,0.98)_100%)] px-7 py-3 text-4xl font-medium italic tracking-tight text-[#E8F1EB] [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] sm:px-11 sm:py-4 sm:text-6xl`}
            style={{ fontFamily: "var(--font-accent-serif)", fontStyle: "italic" }}
          >
            Peak&nbsp;Performers
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-[13px] leading-relaxed text-[#9cb5b0] sm:mt-8 sm:max-w-2xl sm:text-base">
          Build a high-performance life that still feels aligned through daily rituals,
          deep focus and quiet momentum.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-2.5 sm:mt-10 sm:gap-3">
          <ButtonNew />
          <p className="text-[11px] tracking-wide text-[#8ba3b5] sm:text-sm">
            Selective access. Shared depth.
          </p>
        </div>
      </div>
    </section>
  );
}


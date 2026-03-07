"use client";

import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Check, Zap } from "lucide-react";
import seedIcon from "@/icons/seed.png";
import bloomIcon from "@/icons/bloom.png";
import thriveIcon from "@/icons/thrive.png";

const titleSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-pricing-serif",
});

const bodySans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pricing-sans",
});

/* ─── data ────────────────────────────────────────────────── */

const tiers = [
  {
    id: "seed",
    name: "Seed",
    points: "0+",
    tagline: "Sign up and enter the rewards loop with member-only updates.",
    price: 999,
    original: 1999,
    iconSrc: seedIcon,
    accent: "#A8BCA5", // brand green
    accentMuted: "#064e3b",
    glowColor: "rgba(34,197,94,0.14)",
    borderColor: "rgba(34,197,94,0.24)",
    featured: false,
    perks: [
      { label: "Validity", value: "1 month" },
      { label: "Reward multiple", value: "1×" },
      { label: "Welcome voucher", value: "₹250" },
      { label: "Priority support", value: "Standard" },
      { label: "Exclusive member drops", value: "—" },
      { label: "Alignment Circles", value: "Ticketed Access" },
    ],
  },
  {
    id: "bloom",
    name: "Bloom",
    points: "1000+",
    tagline:
      "Unlock stronger earnings and early access once you hit 1000 points.",
    price: 2499,
    original: 4999,
    iconSrc: bloomIcon,
    accent: "#A8BCA5",
    accentMuted: "#052e16",
    glowColor: "rgba(22,163,74,0.16)",
    borderColor: "rgba(22,163,74,0.26)",
    featured: true,
    perks: [
      { label: "Validity", value: "3 months" },
      { label: "Reward multiple", value: "1.2×" },
      { label: "Welcome voucher", value: "₹750" },
      { label: "Priority support", value: "Within 24 h" },
      { label: "Exclusive member drops", value: "Quarterly" },
      { label: "Alignment Circles", value: "1 Alignment Circle included" },
    ],
  },
  {
    id: "thrive",
    name: "Thrive",
    points: "2500+",
    tagline: "Highest tier — priority treatment and premium experiences.",
    price: 7999,
    original: 15999,
    iconSrc: thriveIcon,
    accent: "#A8BCA5",
    accentMuted: "#022c22",
    glowColor: "rgba(21,128,61,0.18)",
    borderColor: "rgba(21,128,61,0.26)",
    featured: false,
    perks: [
      { label: "Validity", value: "12 months" },
      { label: "Reward multiple", value: "1.5×" },
      { label: "Welcome voucher", value: "₹2,000" },
      { label: "Priority support", value: "Within 6 h" },
      { label: "Exclusive member drops", value: "Monthly" },
      {
        label: "Alignment Circles",
        value: "Includes 4 Alignment Circles + priority access",
      },
    ],
  },
] as const;

type Tier = (typeof tiers)[number];

const PERK_LABELS = [
  "Validity",
  "Reward multiple",
  "Welcome voucher",
  "Priority support",
  "Exclusive member drops",
  "Alignment Circles",
] as const;

/* ─── shared join button (border magic, green) ──────────── */

function JoinTierButton({
  tierName,
  className = "",
}: {
  tierName: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={
        "relative inline-flex h-12 min-w-0 items-center justify-center overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-[#A8BCA5]/70 focus:ring-offset-2 focus:ring-offset-[#050807] sm:h-13 " +
        className
      }
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c5e0c0_0%,#064e3b_50%,#c5e0c0_100%)]"
        aria-hidden
      />
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#050807] px-4 py-2 text-sm font-medium tracking-wide text-[#f5f8f5] backdrop-blur-sm">
        Join {tierName}
      </span>
    </button>
  );
}

/* ─── main section ──────────────────────────────────────── */

export default function Pricing() {
  return (
    <section
      id="membership"
      className={`${bodySans.variable} ${titleSerif.variable} relative isolate min-h-0 w-full overflow-x-hidden overflow-y-visible bg-[#050807] px-4 py-16 text-[#e4eee6] sm:px-10 sm:py-20 lg:px-16`}
      style={{ fontFamily: "var(--font-pricing-sans)" }}
    >
      {/* soft top / bottom wash + texture */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(44rem_30rem_at_12%_0%,rgba(168,188,165,0.21),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(52rem_32rem_at_88%_100%,rgba(5,8,7,0.9),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(#111816_1px,transparent_0)] bg-size-[26px_26px]" />

      <div className="relative mx-auto w-full min-w-0 max-w-6xl overflow-x-hidden px-0">
        {/* ── heading ───────────────────────────────────── */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#A8BCA5] bg-[#111816] px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#A8BCA5] uppercase">
            <Zap size={10} className="text-[#A8BCA5]" />
            Early Bird — 50% Off
          </span>

          <h2
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#f7faf7] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-pricing-serif)" }}
          >
            Membership{" "}
            <span className="italic text-transparent bg-[linear-gradient(130deg,#A8BCA5_0%,#d5e0d1_55%,#ffffff_100%)] bg-clip-text [-webkit-background-clip:text]">
              Tiers
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#9cb5b8] sm:text-base">
            Pick the pace that suits you. Unlock rewards, priority perks, and
            exclusive access as you grow.
          </p>
        </div>

        {/* ── arch tier cards ───────────────────────────── */}
        <div className="mt-10 grid min-w-0 max-w-full grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-7">
          {tiers.map((tier) => (
            <ArchCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* ── membership perks heading ──────────────────── */}
        <div id="perks" className="mt-20 scroll-mt-24 text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-[#f7faf7] sm:text-4xl"
            style={{ fontFamily: "var(--font-pricing-serif)" }}
          >
            Membership Perks
          </h2>
          <p className="mt-2 text-sm text-[#8ba3b5]">
            Everything you unlock across each tier, from timeframes to support.
          </p>
        </div>

        {/* ── perks table — desktop ─────────────────────── */}
        <div className="mt-10 hidden overflow-hidden rounded-3xl border border-[#1b2620] bg-[#050807]/60 shadow-[0_18px_40px_rgba(0,0,0,0.65)] backdrop-blur-md md:block">
          <table className="w-full table-fixed border-collapse text-sm text-[#e4eee6]">
            <thead>
              <tr>
                <th className="bg-[#0c1410] px-6 py-4 text-left text-xs font-semibold tracking-[0.16em] text-[#7ba3b8] uppercase">
                  Perks / Tier
                </th>
                {tiers.map((t) => (
                  <th
                    key={t.id}
                    className="bg-[#0c1410] px-6 py-4 text-left text-sm font-semibold text-[#f7faf7]"
                  >
                    <span className="flex items-center gap-1.5">
                      <Image
                        src={t.iconSrc}
                        alt=""
                        width={20}
                        height={20}
                        className="shrink-0"
                      />
                      <span>{t.name}</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERK_LABELS.map((label) => (
                <tr
                  key={label}
                  className="border-t border-[#18211d] bg-[#050807] transition-colors hover:bg-[#0b1510]"
                >
                  <td className="px-6 py-3 text-xs font-medium text-[#7a9aaa]">
                    {label}
                  </td>
                  {tiers.map((t) => {
                    const perk = t.perks.find((p) => p.label === label);
                    return (
                      <td
                        key={t.id}
                        className="px-6 py-3 text-sm font-semibold text-[#f1f5f9]"
                      >
                        {perk ? perk.value : "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
              {/* price row */}
              <tr className="border-t border-[#18211d] bg-[#050807]">
                <td className="px-6 py-4 text-xs font-semibold tracking-[0.14em] text-[#7ba3b8] uppercase">
                  Price
                </td>
                {tiers.map((t) => (
                  <td key={t.id} className="px-6 py-5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-lg font-bold text-[#f7faf7]">
                        ₹{t.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-[#7f9180] line-through">
                        ₹{t.original.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              {/* CTA row */}
              <tr className="border-t border-[#18211d] bg-[#050807]">
                <td className="px-6 py-4" />
                {tiers.map((t) => (
                  <td key={t.id} className="px-6 py-4">
                    <JoinTierButton tierName={t.name} className="w-full" />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── perks table — mobile (dark theme to match section) ── */}
        <div className="mt-8 grid gap-5 md:hidden">
          {tiers.map((t) => (
            <MobilePerkCard key={t.id} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Arch Card ──────────────────────────────────────────── */

function ArchCard({ tier }: { tier: Tier }) {
  const {
    name,
    points,
    tagline,
    price,
    original,
    iconSrc,
    accent,
    glowColor,
    borderColor,
    featured,
    perks,
  } = tier;

  return (
    <article
      className={`group flex min-w-0 max-w-full flex-col items-center ${featured ? "relative z-10 sm:scale-[1.02]" : ""}`}
    >
      {/* Bloom: soft glow/shadow emanating from behind the card */}
      {featured && (
        <div
          className="pointer-events-none absolute -inset-x-4 top-1/2 z-0 -translate-y-1/2 sm:-inset-x-6"
          aria-hidden
        >
          <div
            className="mx-auto h-48 w-full max-w-md rounded-full opacity-90 sm:h-56 sm:max-w-lg"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(168,188,165,0.14) 0%, rgba(168,188,165,0.06) 45%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            className="absolute inset-0 mx-auto h-40 w-full max-w-sm rounded-full opacity-80 sm:h-52 sm:max-w-md"
            style={{
              background: "radial-gradient(ellipse 70% 40% at 50% 60%, rgba(34,197,94,0.08) 0%, transparent 60%)",
              filter: "blur(24px)",
            }}
          />
        </div>
      )}

      {/* Bloom: refined pill + soft accent line */}
      {featured && (
        <div className="relative z-10 mb-2.5 flex w-full max-w-full flex-col items-center sm:mb-3">
          <div
            className="h-px w-16 rounded-full sm:w-20"
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,188,165,0.4), transparent)" }}
          />
          <span className="mt-2 rounded-full border border-[#2a3530] bg-[#0c1210] px-3 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#9cb5b0] sm:text-[10px]">
            Most Popular
          </span>
        </div>
      )}

      {/* icon right above card — no circle, subtle shadow */}
      <div className="relative z-10 mb-2 flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 sm:mb-2.5">
        <Image
          src={iconSrc}
          alt=""
          width={40}
          height={40}
          className="h-9 w-9 shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] sm:h-11 sm:w-11"
        />
      </div>

      {/* card body — Bloom: vertical gradient + reflective edges + diffused shadow */}
      <div
        className={`relative z-10 flex w-full min-w-0 max-w-full flex-col items-center overflow-hidden rounded-2xl border text-center sm:rounded-[2.1rem] ${
          featured
            ? "border-[#2a3530] px-4 pb-6 pt-8 sm:px-7 sm:pb-8 sm:pt-10"
            : "border-[#1f2a24] bg-[#050807] px-4 pb-6 pt-8 shadow-[0_14px_36px_rgba(0,0,0,0.75)] sm:px-7 sm:pb-8 sm:pt-10"
        }`}
        style={{
          ...(featured && {
            background: "linear-gradient(180deg, #0c1210 0%, #0a0f0d 25%, #0d1612 55%, rgba(22,163,74,0.14) 85%, rgba(34,197,94,0.08) 100%)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.06) inset, 0 0 32px rgba(0,0,0,0.5), 0 0 64px rgba(0,0,0,0.35), 0 24px 48px rgba(0,0,0,0.5)",
          }),
          ...(!featured && { borderColor }),
        }}
      >
        {/* Bloom-only: reflective top and left edge (glass-style highlight) */}
        {featured && (
          <>
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl sm:rounded-t-[2.1rem]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), rgba(255,255,255,0.12), transparent)" }}
            />
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-px rounded-l-2xl sm:rounded-l-[2.1rem]"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06) 30%, transparent 70%)" }}
            />
          </>
        )}
        <div className="relative z-10 flex w-full min-w-0 max-w-full flex-col items-center">
          <h3
            className="text-xl font-semibold text-[#f7faf7] sm:text-2xl"
            style={{ fontFamily: "var(--font-pricing-serif)" }}
          >
            {name}
          </h3>

          <p className="mt-0.5 text-[11px] font-medium text-[#7ba3b8] sm:mt-1 sm:text-xs">
            Points: {points}
          </p>

          <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-[#b8c8d0] sm:mt-3 sm:text-xs">
            {tagline}
          </p>

          <div className="mt-4 flex flex-col items-center sm:mt-5">
            <div className="flex flex-wrap items-end justify-center gap-2">
              <span className="text-2xl font-bold text-[#f7faf7] sm:text-3xl">
                ₹{price.toLocaleString("en-IN")}
              </span>
              <span className="mb-0.5 text-xs text-[#7f9180] line-through sm:mb-1">
                ₹{original.toLocaleString("en-IN")}
              </span>
            </div>
            <span className="mt-1 rounded-full bg-[#0f1820] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#7ba3b8] sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
              50% early bird
            </span>
          </div>

          <ul className="mt-3 space-y-1 text-[11px] sm:mt-4 sm:space-y-1.5 sm:text-xs">
            {perks.slice(0, 3).map((perk) => (
              <li
                key={perk.label}
                className="flex items-center justify-center gap-2"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8BCA5]" />
                <span className="font-medium text-[#f1f5f9]">{perk.value}</span>
                <span className="text-[#8ba3b5]">· {perk.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 w-full min-w-0 sm:mt-6">
            <JoinTierButton tierName={name} className="w-full" />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── Mobile perk card ───────────────────────────────────── */

function MobilePerkCard({ tier }: { tier: Tier }) {
  const { name, price, original, iconSrc, borderColor, perks } = tier;

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[#1b2620] bg-[#050807]/80 shadow-[0_18px_40px_rgba(0,0,0,0.65)] backdrop-blur-md"
      style={{ borderColor: borderColor }}
    >
      {/* header — dark theme */}
      <div className="flex items-center gap-3 border-b border-[#18211d] bg-[#0c1410] px-4 py-4">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#111816]"
          style={{ border: `1px solid ${borderColor}` }}
        >
          <Image
            src={iconSrc}
            alt=""
            width={26}
            height={26}
            className="shrink-0"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className="font-semibold text-[#f7faf7]"
            style={{
              fontFamily: "var(--font-pricing-serif)",
              fontSize: "1.1rem",
            }}
          >
            {name}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-bold text-[#e4eee6]">
              ₹{price.toLocaleString("en-IN")}
            </span>
            <span className="text-[#7f9180] line-through">
              ₹{original.toLocaleString("en-IN")}
            </span>
            <span className="text-[#7ba3b8]">50% off</span>
          </div>
        </div>
        <div className="ml-auto shrink-0 min-w-0">
          <JoinTierButton tierName={name} />
        </div>
      </div>

      {/* perk rows — dark theme */}
      <div className="divide-y divide-[#18211d] bg-[#050807] px-4">
        {perks.map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 py-3"
          >
            <span className="flex items-center gap-2 text-xs text-[#8ba3b5]">
              <Check size={12} className="text-[#A8BCA5]" />
              {label}
            </span>
            <span className="text-xs font-semibold text-[#f1f5f9] shrink-0">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

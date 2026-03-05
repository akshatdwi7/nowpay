"use client";

import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Check, Sprout, Flower2, Crown, Zap, ArrowRight } from "lucide-react";

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
		Icon: Sprout,
		accent: "#34d399",           // emerald
		accentMuted: "#064e3b",
		glowColor: "rgba(52,211,153,0.14)",
		borderColor: "rgba(52,211,153,0.20)",
		featured: false,
		perks: [
			{ label: "Validity", value: "1 month" },
			{ label: "Reward multiple", value: "1×" },
			{ label: "Welcome voucher", value: "₹250" },
			{ label: "Priority support", value: "Standard" },
			{ label: "Exclusive member drops", value: "—" },
		],
	},
	{
		id: "bloom",
		name: "Bloom",
		points: "1000+",
		tagline: "Unlock stronger earnings and early access once you hit 1000 points.",
		price: 2499,
		original: 4999,
		Icon: Flower2,
		accent: "#c084fc",           // violet
		accentMuted: "#3b0764",
		glowColor: "rgba(192,132,252,0.18)",
		borderColor: "rgba(192,132,252,0.28)",
		featured: true,
		perks: [
			{ label: "Validity", value: "3 months" },
			{ label: "Reward multiple", value: "1.2×" },
			{ label: "Welcome voucher", value: "₹750" },
			{ label: "Priority support", value: "Within 24 h" },
			{ label: "Exclusive member drops", value: "Quarterly" },
		],
	},
	{
		id: "thrive",
		name: "Thrive",
		points: "2500+",
		tagline: "Highest tier — priority treatment and premium experiences.",
		price: 7999,
		original: 15999,
		Icon: Crown,
		accent: "#fbbf24",           // amber
		accentMuted: "#451a03",
		glowColor: "rgba(251,191,36,0.14)",
		borderColor: "rgba(251,191,36,0.22)",
		featured: false,
		perks: [
			{ label: "Validity", value: "12 months" },
			{ label: "Reward multiple", value: "1.5×" },
			{ label: "Welcome voucher", value: "₹2,000" },
			{ label: "Priority support", value: "Within 6 h" },
			{ label: "Exclusive member drops", value: "Monthly" },
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
] as const;

/* ─── main section ──────────────────────────────────────── */

export default function Pricing() {
	return (
		<section
			className={`${bodySans.variable} ${titleSerif.variable} relative isolate overflow-hidden bg-[#070b08] px-5 py-20 text-[#eef6ec] sm:px-10 lg:px-16`}
			style={{ fontFamily: "var(--font-pricing-sans)" }}
		>
			{/* ambient bg glows */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55rem_32rem_at_12%_0%,rgba(52,211,153,0.07),transparent_72%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(48rem_30rem_at_88%_100%,rgba(192,132,252,0.08),transparent_72%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(38rem_24rem_at_52%_50%,rgba(251,191,36,0.05),transparent_74%)]" />
			<div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(190,236,205,0.5)_1px,transparent_1.2px)] [background-size:28px_28px]" />

			<div className="relative mx-auto max-w-6xl">

				{/* ── heading ───────────────────────────────────── */}
				<div className="text-center">
					<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-emerald-400 uppercase">
						<Zap size={10} className="fill-emerald-400" />
						Early Bird — 50% Off
					</span>

					<h2
						className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#f2f8f2] sm:text-5xl lg:text-6xl"
						style={{ fontFamily: "var(--font-pricing-serif)" }}
					>
						Membership{" "}
						<span className="italic text-transparent [background:linear-gradient(130deg,#6ee7b7_20%,#c084fc_80%)] [background-clip:text] [-webkit-background-clip:text]">
							Tiers
						</span>
					</h2>

					<p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#7a9480] sm:text-base">
						Pick the pace that suits you. Unlock rewards, priority perks, and
						exclusive access as you grow.
					</p>
				</div>

				{/* ── arch tier cards ───────────────────────────── */}
				<div className="mt-14 grid gap-6 sm:grid-cols-3">
					{tiers.map((tier) => (
						<ArchCard key={tier.id} tier={tier} />
					))}
				</div>

				{/* ── membership perks heading ──────────────────── */}
				<div className="mt-20 text-center">
					<h2
						className="text-3xl font-semibold tracking-tight text-[#f2f8f2] sm:text-4xl"
						style={{ fontFamily: "var(--font-pricing-serif)" }}
					>
						Membership Perks
					</h2>
					<p className="mt-2 text-sm text-[#7a9480]">
						Everything you unlock across each tier.
					</p>
				</div>

				{/* ── perks table — desktop ─────────────────────── */}
				<div className="mt-8 hidden overflow-hidden rounded-2xl border border-white/8 md:block">
					<table className="w-full table-fixed border-collapse text-sm">
						<thead>
							<tr>
								<th className="bg-white/5 px-6 py-4 text-left font-semibold text-[#6a8872]">
									Perks / Tier
								</th>
								{tiers.map((t) => (
									<th
										key={t.id}
										className="bg-white/5 px-6 py-4 text-left font-semibold"
										style={{ color: t.accent }}
									>
										<span className="flex items-center gap-1.5">
											<t.Icon size={14} />
											{t.name}
										</span>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{PERK_LABELS.map((label) => (
								<tr key={label} className="border-t border-white/6 transition-colors hover:bg-white/[0.03]">
									<td className="px-6 py-4 text-[#7a9480]">{label}</td>
									{tiers.map((t) => {
										const perk = t.perks.find((p) => p.label === label);
										return (
											<td key={t.id} className="px-6 py-4 font-medium text-[#c8ddd0]">
												{perk ? perk.value : "—"}
											</td>
										);
									})}
								</tr>
							))}
							{/* price row */}
							<tr className="border-t border-white/10 bg-white/[0.025]">
								<td className="px-6 py-5 font-semibold text-[#7a9480]">Price</td>
								{tiers.map((t) => (
									<td key={t.id} className="px-6 py-5">
										<div className="flex flex-col gap-0.5">
											<span className="text-lg font-bold text-[#eef6ec]">
												₹{t.price.toLocaleString("en-IN")}
											</span>
											<span className="text-xs text-[#4e6655] line-through">
												₹{t.original.toLocaleString("en-IN")}
											</span>
										</div>
									</td>
								))}
							</tr>
							{/* CTA row */}
							<tr className="border-t border-white/6">
								<td className="px-6 py-4" />
								{tiers.map((t) => (
									<td key={t.id} className="px-6 py-4">
										<button
											className="flex w-full items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-semibold tracking-wide transition-all duration-200 hover:brightness-110"
											style={{
												borderColor: t.borderColor,
												color: t.accent,
												background: `${t.glowColor}`,
											}}
										>
											Join {t.name} <ArrowRight size={12} />
										</button>
									</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>

				{/* ── perks table — mobile ─────────────────────── */}
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
	const { name, points, tagline, price, original, Icon, accent, glowColor, borderColor, featured } = tier;

	return (
		<article className="group flex flex-col items-center">
			{/* floating icon orb — sits above the arch */}
			<div
				className="relative z-10 -mb-8 flex h-16 w-16 items-center justify-center rounded-full border shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
				style={{
					borderColor,
					background: `radial-gradient(circle at 40% 35%, ${glowColor.replace("0.14", "0.45")}, transparent 70%), #0f1710`,
					boxShadow: `0 0 22px ${glowColor.replace("0.14", "0.35")}, 0 4px 14px rgba(0,0,0,0.5)`,
				}}
			>
				<Icon size={28} style={{ color: accent }} />
			</div>

			{/* arch body */}
			<div
				className="relative flex w-full flex-col items-center px-6 pb-7 pt-12 text-center"
				style={{
					borderRadius: "50% 50% 1.5rem 1.5rem / 14% 14% 1.5rem 1.5rem",
					border: `1px solid ${borderColor}`,
					background: `radial-gradient(ellipse 90% 55% at 50% 0%, ${glowColor}, transparent 60%), linear-gradient(170deg,#111915 0%,#090d0b 100%)`,
					boxShadow: featured
						? `0 0 0 1px ${borderColor}, 0 20px 50px rgba(0,0,0,0.45), 0 0 40px ${glowColor}`
						: `0 0 0 1px ${borderColor}, 0 10px 30px rgba(0,0,0,0.30)`,
				}}
			>
				{featured && (
					<span
						className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-0.5 text-[10px] font-semibold tracking-widest uppercase"
						style={{ borderColor, color: accent, background: "#0f1710" }}
					>
						Most Popular
					</span>
				)}

				{/* name */}
				<h3
					className="text-2xl font-semibold"
					style={{ fontFamily: "var(--font-pricing-serif)", color: accent }}
				>
					{name}
				</h3>

				<p className="mt-1 text-xs font-medium" style={{ color: accent, opacity: 0.65 }}>
					Points: {points}
				</p>

				<p className="mt-3 text-xs leading-relaxed text-[#7a9480]">{tagline}</p>

				{/* price */}
				<div className="mt-5 flex flex-col items-center">
					<div className="flex items-end gap-2">
						<span className="text-3xl font-bold text-[#eef6ec]">
							₹{price.toLocaleString("en-IN")}
						</span>
						<span className="mb-1 text-xs text-[#4e6655] line-through">
							₹{original.toLocaleString("en-IN")}
						</span>
					</div>
					<span className="mt-0.5 rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
						50% early bird
					</span>
				</div>

				{/* CTA */}
				<button
					className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-110 focus:outline-none"
					style={{
						background: `linear-gradient(135deg, ${glowColor.replace("0.14", "0.5")}, ${glowColor.replace("0.14", "0.15")})`,
						border: `1px solid ${borderColor}`,
						color: accent,
					}}
				>
					Join {name} <ArrowRight size={13} />
				</button>
			</div>
		</article>
	);
}

/* ─── Mobile perk card ───────────────────────────────────── */

function MobilePerkCard({ tier }: { tier: Tier }) {
	const { name, price, original, Icon, accent, glowColor, borderColor, perks } = tier;

	return (
		<div
			className="overflow-hidden rounded-2xl border"
			style={{
				borderColor,
				background: `radial-gradient(ellipse 80% 45% at 50% 0%, ${glowColor}, transparent 65%), #0b0f0d`,
			}}
		>
			{/* header */}
			<div
				className="flex items-center gap-3 border-b px-4 py-4"
				style={{ borderColor }}
			>
				<div
					className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
					style={{ background: glowColor.replace("0.14", "0.35"), border: `1px solid ${borderColor}` }}
				>
					<Icon size={18} style={{ color: accent }} />
				</div>
				<div>
					<h3 className="font-semibold" style={{ color: accent, fontFamily: "var(--font-pricing-serif)", fontSize: "1.1rem" }}>
						{name}
					</h3>
					<div className="flex items-center gap-1.5 text-xs">
						<span className="font-bold text-[#eef6ec]">₹{price.toLocaleString("en-IN")}</span>
						<span className="text-[#4e6655] line-through">₹{original.toLocaleString("en-IN")}</span>
						<span className="text-emerald-400">50% off</span>
					</div>
				</div>
				<button
					className="ml-auto flex items-center gap-1 rounded-xl border px-3 py-1.5 text-[11px] font-semibold"
					style={{ borderColor, color: accent, background: glowColor }}
				>
					Join <ArrowRight size={10} />
				</button>
			</div>

			{/* perk rows */}
			<div className="divide-y divide-white/[0.06] px-4">
				{perks.map(({ label, value }) => (
					<div key={label} className="flex items-center justify-between py-3">
						<span className="flex items-center gap-2 text-xs text-[#7a9480]">
							<Check size={12} style={{ color: accent }} />
							{label}
						</span>
						<span className="text-xs font-semibold text-[#c8ddd0]">{value}</span>
					</div>
				))}
			</div>
		</div>
	);
}

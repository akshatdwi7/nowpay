import { Cormorant_Garamond, Manrope } from "next/font/google";
import NewButton from "./newbutton";

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
			className={`${sleekSans.variable} relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#070b08] px-5 py-16 text-[#eef6ec] sm:px-10 sm:py-20 lg:px-16`}
			style={{ fontFamily: "var(--font-sleek-sans)" }}
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(56rem_32rem_at_80%_-8%,rgba(113,194,136,0.34),transparent_70%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(44rem_28rem_at_10%_92%,rgba(42,103,68,0.34),transparent_74%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30rem_22rem_at_52%_36%,rgba(19,55,39,0.34),transparent_78%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(142deg,#030705_0%,#07110c_38%,#050906_100%)]" />
			<div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(190,236,205,0.5)_1px,transparent_1.2px)] [background-size:26px_26px]" />
			<div className="pointer-events-none absolute right-8 top-10 hidden h-44 w-44 rounded-full border border-[#95c7a2]/25 bg-[#9fcca9]/15 blur-3xl md:block" />
			<div className="pointer-events-none absolute -left-14 bottom-16 h-52 w-52 rounded-full border border-[#86b793]/20 bg-[#5e9b70]/20 blur-3xl" />

			<div className="relative mx-auto w-full max-w-5xl text-center">
			

				<h1 className="text-4xl leading-[1.05] font-medium tracking-[-0.02em] text-[#f2f8f2] sm:text-6xl sm:font-semibold sm:tracking-[-0.03em] lg:text-7xl">
					Built for Peak
				</h1>

				<div className="relative mt-3 inline-flex sm:mt-5">
					<span className="pointer-events-none absolute inset-x-4 -bottom-3 h-6 rounded-full bg-black/65 blur-xl sm:inset-x-6 sm:-bottom-4 sm:h-8" />
					<span className="pointer-events-none absolute -inset-[1px] rounded-[1.75rem] bg-[linear-gradient(140deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.08)_40%,rgba(255,255,255,0.18)_100%)] sm:rounded-[2.1rem]" />
					<p
						className={`${accentSerif.variable} glow-pill relative inline-flex items-center rounded-[1.7rem] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.06)_46%,rgba(0,0,0,0.28)_100%)] px-6 py-2.5 text-4xl font-medium italic tracking-tight text-[#f6faf5] [text-shadow:0_2px_16px_rgba(255,255,255,0.18)] sm:rounded-[2rem] sm:px-10 sm:py-4 sm:text-6xl`}
						style={{ fontFamily: "var(--font-accent-serif)", fontStyle: "italic" }}
					>
						Performers
					</p>
				</div>

				<p className="mx-auto mt-6 max-w-xl text-[13px] leading-relaxed text-[#afc1b4] sm:mt-8 sm:max-w-2xl sm:text-base">
					Build a high-performance life that still feels aligned with who you
					are: clear rituals, deep focus, and quiet momentum.
				</p>

				<div className="mt-8 flex w-full flex-col items-center gap-2.5 sm:mt-10 sm:gap-3">
					<NewButton />
					<p className="text-[11px] tracking-wide text-[#9fb09f] sm:text-sm">
						Selective access. Shared depth.
					</p>
				</div>
			</div>
		</section>
	);
}

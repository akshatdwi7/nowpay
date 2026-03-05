export default function CtaButton() {
  return (
    <button
      type="button"
      className="hero-cta group relative w-full max-w-[19rem] overflow-hidden rounded-full bg-[linear-gradient(90deg,#060806_0%,#2b3f31_24%,#6f9075_50%,#2b3f31_76%,#060806_100%)] px-6 py-3 text-sm font-semibold tracking-tight text-[#f6fbf4] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 sm:max-w-sm sm:px-8 sm:py-3.5 sm:text-lg"
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_42%,rgba(0,0,0,0.24)_100%)]" />
      <span className="relative inline-flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        Choose membership plan
        <span className="text-[#e9f2e5] transition-transform duration-300 group-hover:translate-x-0.5">
          -&gt;
        </span>
      </span>
    </button>
  );
}
export default function NewButton() {
  return (
    <button className="relative inline-flex h-12 w-full max-w-[19rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-300/70 focus:ring-offset-2 focus:ring-offset-[#070b08] sm:max-w-sm sm:h-14">
      <span className="absolute inset-[-1000%] animate-[spin_2.2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0a110d_0%,#6f9075_38%,#0b130e_68%,#a9c2ad_82%,#0a110d_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#060a08] px-5 py-1 text-sm font-semibold tracking-tight text-white backdrop-blur-3xl sm:px-8 sm:text-lg">
        Choose membership plan
      </span>
    </button>
  );
}

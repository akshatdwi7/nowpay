"use client";

import type { FC } from "react";

const ContactPage: FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#050807] px-5 py-16 text-[#e4eee6] sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* left column: info */}
        <section className="flex-1 space-y-6">
          <header className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#7ba3b8] uppercase">
              Contact
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[#f7faf7] sm:text-4xl">
              Get in touch
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-[#9cb5b0] sm:text-base">
              We&apos;d love to hear from you. Whether you&apos;re curious about
              the club, want to collaborate, or have something exciting to
              share — we&apos;re all ears.
            </p>
          </header>

          <div className="space-y-6 text-sm leading-relaxed text-[#c4d0ca] sm:text-base">
            <div>
              <h2 className="text-sm font-semibold text-[#e8f1eb] sm:text-base">
                📍 Headquarters
              </h2>
              <p className="mt-1 text-[#9cb5b0]">
                No 12, Maruthi Nagar Extension, Kaggadasapura Main Road,
                Malleshpalya, Bengaluru - 560075
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-[#e8f1eb] sm:text-base">
                💬 Talk to us
              </h2>
              <p className="mt-1">
                WhatsApp:{" "}
                <span className="font-medium text-[#e8f1eb]">
                  +91 (555) 727 9965
                </span>
              </p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href="mailto:hello@nowwclub.in"
                  className="font-medium text-[#c4e0d0] hover:underline"
                >
                  hello@nowwclub.in
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-[#e8f1eb] sm:text-base">
                🤝 Collaborations &amp; partnerships
              </h2>
              <p className="mt-1 text-[#9cb5b0]">
                If you&apos;re a brand, café, salon, or venue looking to
                collaborate — reach out at:
              </p>
              <p className="mt-1">
                <a
                  href="mailto:hello@nowwclub.in"
                  className="font-medium text-[#c4e0d0] hover:underline"
                >
                  hello@nowwclub.in
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-[#e8f1eb] sm:text-base">
                📲 Stay in the loop
              </h2>
              <p className="mt-1">
                Follow us on Instagram:{" "}
                <span className="font-medium text-[#c4e0d0]">@noww.club</span>
              </p>
              <p className="mt-1 text-[#9cb5b0]">
                DM us anytime — our team is always around.
              </p>
            </div>
          </div>
        </section>

        {/* right column: simple message form (non-functional placeholder) */}
        <section className="flex-1">
          <div className="rounded-3xl border border-[#1b2620] bg-[#050807]/80 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.7)] backdrop-blur-md sm:p-7">
            <h2 className="text-lg font-semibold text-[#f7faf7] sm:text-xl">
              Send us a message
            </h2>
            <p className="mt-1 text-xs text-[#8ba3b5] sm:text-sm">
              Share a question, idea, or request and we&apos;ll get back to you.
            </p>
            <form className="mt-5 space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-[#9cb5b0]">
                  Your name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#1b2620] bg-[#020708] px-3 py-2.5 text-sm text-[#e4eee6] outline-none ring-0 placeholder:text-[#647478] focus:border-[#A8BCA5] focus:ring-2 focus:ring-[#A8BCA5]/40"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-[#9cb5b0]">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-[#1b2620] bg-[#020708] px-3 py-2.5 text-sm text-[#e4eee6] outline-none ring-0 placeholder:text-[#647478] focus:border-[#A8BCA5] focus:ring-2 focus:ring-[#A8BCA5]/40"
                  placeholder="hello@example.com"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-[#9cb5b0]">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#1b2620] bg-[#020708] px-3 py-2.5 text-sm text-[#e4eee6] outline-none ring-0 placeholder:text-[#647478] focus:border-[#A8BCA5] focus:ring-2 focus:ring-[#A8BCA5]/40"
                  placeholder="What’s this about?"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-[#9cb5b0]">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#1b2620] bg-[#020708] px-3 py-2.5 text-sm text-[#e4eee6] outline-none ring-0 placeholder:text-[#647478] focus:border-[#A8BCA5] focus:ring-2 focus:ring-[#A8BCA5]/40"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="button"
                className="mt-2 w-full rounded-full bg-[#f7faf7] px-4 py-2.5 text-sm font-semibold tracking-wide text-[#050807] shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition hover:bg-white"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;


"use client";

import Image from "next/image";
import { Lora } from "next/font/google";
import { Instagram, Linkedin } from "lucide-react";
import nowwLogo from "@/icons/nowwlogo.svg";

const brandSerif = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
  variable: "--font-footer-brand",
});

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1b2620] bg-[#050807] text-[#d7e0da]">
      <div
        className={`${brandSerif.variable} mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-14 sm:px-10 lg:px-16 lg:flex-row lg:items-start lg:justify-between`}
      >
        {/* brand */}
        <div className="flex flex-1 flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={nowwLogo}
              alt="Noww Club"
              className="h-10 w-auto rounded-[30px] sm:h-12"
            />
            <div
              className="leading-none text-[#e8f1eb]"
              style={{ fontFamily: "var(--font-footer-brand)" }}
            >
              <div className="text-2xl italic tracking-tight sm:text-3xl">
                Noww
              </div>
              <div className="text-2xl italic tracking-tight sm:text-3xl">
                Club
              </div>
            </div>
          </div>
        </div>

        {/* links */}
        <div className="flex flex-1 flex-col gap-3 text-sm text-[#a9bab3] sm:flex-row sm:justify-center sm:gap-12">
          <div className="space-y-2">
            <a href="/cancellation-refunds" className="block hover:text-[#dbe7e0]">
              Cancellation &amp; Refunds
            </a>
            <a href="/contact" className="block hover:text-[#dbe7e0]">
              Contact Us
            </a>
            <a href="/terms" className="block hover:text-[#dbe7e0]">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

        {/* legal + social */}
        <div className="flex flex-1 flex-col gap-4 text-xs text-[#8ea09a] lg:max-w-sm lg:text-right">
          <div className="flex items-center justify-start gap-3 lg:justify-end">
            <span>2025 TRUE CLUB FINANCIAL TECHNOLOGY PVT. LTD.</span>
            <span aria-hidden="true">©</span>
          </div>
          <p className="leading-relaxed">
            Noww Club uses small, intentional daily rituals to support presence,
            self‑awareness, and alignment. It is not intended to diagnose,
            treat, cure, or prevent any disease.
          </p>
          <div className="mt-2 flex items-center gap-4 lg:justify-end">
            <a
              href="https://www.instagram.com/nowwclub/"
              aria-label="Noww Club on Instagram"
              className="rounded-full border border-[#2a3530] bg-[#080c0a] p-1.5 text-[#cbd5f5] shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:border-[#A8BCA5] hover:text-white"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/noww-club/posts/?feedView=all"
              aria-label="Noww Club on LinkedIn"
              className="rounded-full border border-[#2a3530] bg-[#080c0a] p-1.5 text-[#cbd5f5] shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:border-[#A8BCA5] hover:text-white"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


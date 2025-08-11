"use client";
import Link from "next/link";
import WipBanner from "@/components/WipBanner/WipBanner";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#0A0D08] py-10 md:py-15 lg:py-20 flex flex-col">
        <div className="w-full flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-15 md:gap-0">
            {/* Column 1 */}
            <div className="w-full flex flex-col gap-15 px-10 md:px-15 lg:px-20">
              <ul className="w-full flex flex-col gap-[14px]">
                <p className="text-white text-[12px] font-departure-mono uppercase">
                  Side proejcts
                </p>
                <Link
                  href="https://yournexttale.com"
                  className="text-[#626262] text-[14px] font-satoshi font-medium"
                >
                  Your Next Tale
                </Link>
                <Link
                  href="https://nifty.lemonsqueezy.com/buy/aa932696-fbd1-4f33-8f7d-24a06a237ab0"
                  className="text-[#626262] text-[14px] font-satoshi font-medium"
                >
                  Maybe Framer Template
                </Link>
                <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                  Nifty Framer Template
                </Link>
              </ul>
              <ul className="w-full flex flex-col gap-[14px]">
                <p className="text-white text-[12px] font-departure-mono uppercase">
                  Work Case Studies
                </p>
                <Link
                  href="/work/experience-builder"
                  className="text-[#626262] text-[14px] font-satoshi font-medium"
                >
                  Drupal Experience Builder
                </Link>
                <Link
                  href="/work/wzis"
                  className="text-[#626262] text-[14px] font-satoshi font-medium"
                >
                  Wzis store locator
                </Link>
                <Link
                  href="/work/acquia-site-studio"
                  className="text-[#626262] text-[14px] font-satoshi font-medium"
                >
                  Acquia Site Studio
                </Link>
                <Link
                  href="/work/union-roasted"
                  className="text-[#626262] text-[14px] font-satoshi font-medium"
                >
                  Union Roasted
                </Link>
              </ul>
            </div>

            {/* Column 2*/}
            <div className="w-full flex flex-col gap-15 px-10 md:px-15 lg:px-20">
              <ul className="w-full flex flex-col gap-[14px]">
                <p className="text-white text-[12px] font-departure-mono uppercase">Quick links</p>
                <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#626262] text-[14px] font-satoshi font-medium">
                  About
                </Link>
                <Link href="/work" className="text-[#626262] text-[14px] font-satoshi font-medium">
                  Work
                </Link>
                <Link
                  href="/contact"
                  className="text-[#626262] text-[14px] font-satoshi font-medium"
                >
                  Contact
                </Link>
              </ul>
            </div>

            {/* Column 3 & 4 Combined - spans 2 columns*/}
            <div className="w-full flex flex-col gap-5  h-full ml-auto md:items-end px-10 md:px-15 lg:px-20">
              <ul className="w-full md:w-auto flex flex-col gap-1 md:text-right md:items-end">
                <p className="text-white text-[20px] font-departure-mono uppercase">
                  Callum Harrod
                </p>
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  Designing & Developing
                </p>
              </ul>
              <p className="text-[#626262] text-[12px] font-departure-mono uppercase mt-auto">
                © 2025 Callum Harrod
              </p>
            </div>
          </div>
        </div>
      </footer>
      <WipBanner />
    </>
  );
}

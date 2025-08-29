import React from "react";
import Link from "next/link";

export default function WipBanner() {
  return (
    <div className="bg-[#FF2B00] min-h-6 py-1 font-departure-mono uppercase flex flex-col justify-center items-center w-full px-10 md:px-15 lg:px-20">
      <p className="text-white text-[12px] font-departure-mono uppercase text-center">
        Work in progress - Check progress on{" "}
        <Link href="https://github.com/soluxos/callum-site-2025" className="underline">
          GitHub
        </Link>
      </p>
    </div>
  );
}

"use client";
import { usePathname } from "next/navigation";

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const isIdeas = pathname.startsWith("/ideas");
  return (
    <div className={`relative font-satoshi text-[#484848]${isIdeas ? "" : " bg-[#f5f5f5]"}`}>
      {children}
    </div>
  );
}

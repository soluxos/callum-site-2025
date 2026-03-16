"use client";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }) {
  const pathname = usePathname();
  const isIdeas = pathname.startsWith("/ideas");
  return (
    <div
      className={`flex w-full max-w-[1440px] flex-col mx-auto relative z-10${isIdeas ? "" : " pb-20 sm:pb-[160px]"}`}
    >
      <div
        className={`mx-5 sm:mx-10 flex flex-col pt-8${isIdeas ? " gap-4" : " gap-30 sm:gap-[240px]"}`}
      >
        {children}
      </div>
    </div>
  );
}

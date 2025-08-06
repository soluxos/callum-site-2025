"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Navigation() {
  return (
    <>
      <div className="nav-block fixed top-0 xs:top-5 xs:left-10 md:left-15 lg:left-20 transform z-50 flex items-center gap-[10px]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            bounce: 0.5,
            duration: 0.8,
          }}
          className="bg-[rgba(255,255,255,0.08)] backdrop-blur-sm h-12 xs:rounded-[8px] flex items-center gap-4 w-[100vw] xs:w-auto relative max-w-full xs:max-w-[calc(100vw-80px)] justify-center xs:justify-start"
        >
          <a href="/" className="flex flex-col items-start pl-5">
            <p className="font-departure-mono uppercase text-[#8D8D8D] text-[10px] whitespace-nowrap">
              Hey I'm
            </p>
            <p className="font-departure-mono uppercase text-[12px]">
              Callum <span className="hidden sm:inline">Harrod</span>
            </p>
          </a>
          <nav className="flex items-center">
            <div className="separator w-[1px] h-6 bg-[rgba(255,255,255,0.1)]" />
            <a href="/" className="flex flex-col items-start px-4 py-[10px]">
              <p className="font-departure-mono uppercase text-[10px] text-[#8D8D8D]">Head</p>
              <p className="font-departure-mono uppercase text-[12px] flex gap-1">
                <span className="text-[#FF2B00]">♦</span> Home
              </p>
            </a>
            <div className="separator w-[1px] h-6 bg-[rgba(255,255,255,0.1)]" />
            <a
              href="/about"
              className="about flex flex-col items-start relative cursor-pointer px-4 py-[10px]"
            >
              <p className="font-departure-mono uppercase text-[10px] text-[#8D8D8D]">All</p>
              <p className="font-departure-mono uppercase text-[12px] flex gap-1">
                <span className="text-[#FF8C00]">✦</span> About
              </p>
            </a>
            <div className="separator w-[1px] h-6 bg-[rgba(255,255,255,0.1)]" />
            <a
              href="/work"
              className="about flex flex-col items-start relative cursor-pointer px-4 py-[10px]"
            >
              <p className="font-departure-mono uppercase text-[10px] text-[#8D8D8D]">View my</p>
              <p className="font-departure-mono uppercase text-[12px] flex gap-1">
                <span className="text-[#5E00FF]">♣</span> Work
              </p>
            </a>
            <div className="separator w-[1px] h-6 bg-[rgba(255,255,255,0.1)]" />
            <a href="/contact" className="flex flex-col items-start px-4 py-[10px]">
              <p className="font-departure-mono uppercase text-[10px] text-[#8D8D8D]">Get In</p>
              <p className="font-departure-mono uppercase text-[12px] flex gap-1">
                <span className="text-[#008CFF]">♥</span> Contact
              </p>
            </a>
          </nav>
        </motion.div>
      </div>
    </>
  );
}

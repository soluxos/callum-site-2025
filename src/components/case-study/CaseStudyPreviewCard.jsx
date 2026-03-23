"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground/AnimatedGradientBackground";
import GlowTitle from "@/components/GlowTitle/GlowTitle";

export default function CaseStudyPreviewCard({
  href,
  preset,
  title,
  description,
  logo,
  logoAlt = "",
  badge,
  className = "",
}) {
  const [glowKey, setGlowKey] = useState(0);

  return (
    <Link
      href={href}
      className={`flex flex-col gap-2 ${className}`}
      onMouseEnter={() => setGlowKey(k => k + 1)}
    >
      <div className="relative h-[360px] w-full overflow-hidden rounded-[16px] bg-[#929292]">
        <AnimatedGradientBackground
          preset={preset}
          animationDuration={50}
          blurAmount={50}
          opacity={1}
          grain={true}
          grainOpacity={0.015}
          dither={true}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div className="bg-[rgba(0,0,0,0.2)] absolute inset-0" />
        <div className="relative z-10 p-5 pb-10 w-full h-full flex flex-col justify-center items-center">
          {badge && (
            <p className="absolute top-5 left-5 font-satoshi font-bold uppercase text-[10px] leading-[1.5] bg-white text-[#929292] px-2 rounded-full self-start">
              {badge}
            </p>
          )}
          <div className="relative flex flex-col items-center justify-center text-center">
            {logo && (
              <div className="h-10 flex items-end justify-center mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt={logoAlt} className="max-w-[80px]" />
              </div>
            )}
            <GlowTitle
              text={title}
              as="p"
              className="font-ppmondwest text-[40px] leading-[1.5] text-white"
              replayKey={glowKey}
            />
            {description && (
              <p className="text-[16px] max-w-[440px] font-medium leading-[1.5] text-[#ffffffbf]">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

"use client";

import AnimatedGradientBackground from "@/components/AnimatedGradientBackground/AnimatedGradientBackground";
import { motion } from "motion/react";

// Pre-compute a 40-step sine-curve bell for silky-smooth glow interpolation.
// "linear" easing between many tiny steps avoids the visible stepped transitions
// that occur when Framer Motion interpolates between just a few keyframes.
const STEPS = 40;
const _sine = Array.from({ length: STEPS + 1 }, (_, i) => Math.sin((i / STEPS) * Math.PI));
const _times = _sine.map((_, i) => i / STEPS);

const _shadowFrames = _sine.map(
  s =>
    `0 0 ${(4 * s).toFixed(2)}px oklch(100% 0 0 / ${(s * 100).toFixed(1)}%),` +
    `0 0 ${(8 * s).toFixed(2)}px oklch(100% 0 0 / ${(s * 80).toFixed(1)}%),` +
    `0 0 ${(20 * s).toFixed(2)}px oklch(100% 0 0 / ${(s * 60).toFixed(1)}%),` +
    `0 0 ${(40 * s).toFixed(2)}px oklch(100% 0 0 / ${(s * 40).toFixed(1)}%),` +
    `0 0 ${(80 * s).toFixed(2)}px oklch(100% 0 0 / ${(s * 20).toFixed(1)}%)`
);

// Opacity fades in over the first ~15 % of the animation then stays at 1
const _opacityFrames = _sine.map((_, i) => Math.min(1, (i / (STEPS * 0.15)) * 1));
// Subtle upward drift resolves in the same window
const _yFrames = _sine.map((_, i) => Math.max(0, 6 * (1 - i / (STEPS * 0.15))));

function GlowTitle({ text }) {
  const chars = text.split("");
  return (
    <h1 className="font-ppmondwest text-[40px] sm:text-[64px] leading-[1.2] text-white">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
          initial={{ textShadow: _shadowFrames[0], opacity: 0, y: 6 }}
          animate={{
            textShadow: _shadowFrames,
            opacity: _opacityFrames,
            y: _yFrames,
          }}
          transition={{
            duration: 2,
            delay: i * 0.05,
            ease: "linear",
            times: _times,
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
}

export default function CaseStudyFullHero({
  title,
  description,
  logo,
  logoAlt = "",
  preset = "peach",
  metaItems,
}) {
  return (
    // margin-top: -60px pulls the hero up behind the nav (pt-8 ≈ 32px + nav ≈ 28px)
    <div className="relative h-[600px] sm:h-[800px]" style={{ marginTop: "-60px" }}>
      {/* Absolutely-positioned background breaks out of the container's horizontal margins
          to cover the full viewport width without causing a horizontal scrollbar */}
      <div
        className="absolute inset-y-0 overflow-hidden"
        style={{ left: "calc(50% - 50vw)", width: "100vw" }}
      >
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
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div className="bg-[rgba(0,0,0,0.2)] absolute inset-0" />
      </div>

      {/* Content sits on top of the background */}
      <div className="relative z-10 h-full flex flex-col pt-[80px] sm:pt-[100px] pb-[50px] sm:pb-[80px]">
        {/* Logo + title + description — vertically centred in the remaining space */}
        <div className="flex-1 flex flex-col items-start justify-center text-left gap-3">
          {logo && (
            <div className="h-10 flex items-end justify-center mb-2">
              <img src={logo} alt={logoAlt} className="max-w-[80px]" />
            </div>
          )}
          <GlowTitle text={title} />
          {description && (
            <p className="text-[16px] max-w-[480px] font-medium leading-[1.5] text-white/80">
              {description}
            </p>
          )}
        </div>

        {/* Meta grid — white text, pinned to the bottom */}
        {metaItems && metaItems.length > 0 && (
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {metaItems.map(item => (
              <div key={item.label} className="flex flex-col gap-1">
                <p className="font-ppmondwest text-[18px] leading-[1.25] text-white">
                  {item.label}
                </p>
                <p className="text-[13px] font-medium leading-[1.5] text-white/80 max-w-[200px]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

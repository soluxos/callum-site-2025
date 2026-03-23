"use client";

import { useEffect, useRef } from "react";

const PAD_X = 14;
const PAD_Y = 7;
const WALL = 60;
const INNER_PAD = 20;

// Ball config
const BALL_COUNT = 200;
const BALL_RADIUS = 18;

const BALL_COLOURS = [
  "oklch(0.65 0.20 24)",
  "oklch(0.75 0.17 53)",
  "oklch(0.89 0.18 94)",
  "oklch(0.75 0.15 144)",
  "oklch(0.65 0.18 257)",
  "oklch(0.68 0.22 305)",
  "oklch(0.68 0.21 359)",
  "oklch(0.74 0.17 214)",
  "oklch(0.72 0.17 60)",
  "oklch(0.65 0.12 172)",
];

const DESIGN_SKILLS = [
  "Figma",
  "Design Systems",
  "Prototyping",
  "User Research",
  "Wireframing",
  "Typography",
  "Interaction Design",
  "Visual Design",
  "UX Writing",
  "Accessibility",
  "Motion Design",
];

const ENGINEERING_SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "WebGL",
  "Three.js",
  "PHP",
  "WordPress",
  "REST APIs",
  "Git",
];

const ALL_SKILLS = [
  ...DESIGN_SKILLS.map(text => ({ text, type: "design" })),
  ...ENGINEERING_SKILLS.map(text => ({ text, type: "engineering" })),
];

const BADGE_STYLE = {
  design: {
    background: "oklch(0.22 0 0)",
    color: "oklch(0.97 0 0)",
    borderRadius: "999px",
    chamfer: 13,
  },
  engineering: {
    background: "oklch(0.60 0.20 252)",
    color: "oklch(1 0 0)",

    borderRadius: "6px",
    chamfer: 5,
  },
};

export default function SkillBadges() {
  const containerRef = useRef(null);
  const badgeRefsRef = useRef([]);
  const ballRefsRef = useRef([]);

  useEffect(() => {
    let cancelled = false;
    let rafId = null;
    let ro = null;

    (async () => {
      await new Promise(r => requestAnimationFrame(r));
      if (cancelled) return;

      const Matter = await import("matter-js");
      if (cancelled) return;

      const { Engine, Bodies, Body, World, Mouse, MouseConstraint, Query } = Matter;

      const container = containerRef.current;
      if (!container) return;

      const W = container.offsetWidth;
      const H = container.offsetHeight;
      if (W === 0 || H === 0) return;

      // Read actual rendered dimensions from DOM
      const dims = badgeRefsRef.current.map(el =>
        el ? { w: el.offsetWidth, h: el.offsetHeight } : { w: 80, h: 30 }
      );

      badgeRefsRef.current.forEach(el => {
        if (el) el.style.visibility = "visible";
      });

      const engine = Engine.create({
        gravity: { y: 1.8 },
        positionIterations: 20,
        velocityIterations: 12,
        constraintIterations: 6,
      });

      // Badge bodies
      const badgeBodies = ALL_SKILLS.map((skill, i) => {
        const { w, h } = dims[i];
        const st = BADGE_STYLE[skill.type];
        const chamferRadius = Math.min(st.chamfer, h / 2 - 1);
        const x = INNER_PAD + w / 2 + Math.random() * Math.max(1, W - w - INNER_PAD * 2);
        const y = -(i * (h + 10) + h);
        const body = Bodies.rectangle(x, y, w, h, {
          restitution: 0.3,
          friction: 0.6,
          frictionAir: 0.03,
          chamfer: { radius: chamferRadius },
        });
        body._w = w;
        body._h = h;
        body._isBadge = true;
        return body;
      });

      // Ball bodies — fixed radius, staggered above the visible area
      const ballData = Array.from({ length: BALL_COUNT }, (_, i) => ({
        r: BALL_RADIUS,
        colour: BALL_COLOURS[i % BALL_COLOURS.length],
      }));

      const innerW = W - INNER_PAD * 2;
      const ballDiam = BALL_RADIUS * 2 + 2;
      const ballCols = Math.max(1, Math.floor(innerW / ballDiam));

      const ballBodies = ballData.map(({ r }, i) => {
        const col = i % ballCols;
        const row = Math.floor(i / ballCols);
        const hexOffset = row % 2 === 0 ? 0 : r + 1;
        const x = INNER_PAD + r + col * ballDiam + hexOffset;
        const y = -(H + r + row * ballDiam);
        const body = Bodies.circle(x, y, r, {
          restitution: 0.45,
          friction: 0.3,
          frictionAir: 0.01,
          density: 0.002,
        });
        body._r = r;
        body._isBall = true;
        return body;
      });

      // Static boundaries
      const floor = Bodies.rectangle(W / 2, H - INNER_PAD + WALL / 2, 100000, WALL, {
        isStatic: true,
        friction: 0.9,
        restitution: 0.15,
      });
      const wallL = Bodies.rectangle(INNER_PAD - WALL / 2, H / 2, WALL, H * 3, { isStatic: true });
      const wallR = Bodies.rectangle(W - INNER_PAD + WALL / 2, H / 2, WALL, H * 3, {
        isStatic: true,
      });

      World.add(engine.world, [...badgeBodies, ...ballBodies, floor, wallL, wallR]);

      const allBodies = [...badgeBodies, ...ballBodies];

      const mouse = Mouse.create(container);
      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.15, angularStiffness: 0.05, render: { visible: false } },
      });
      World.add(engine.world, mc);

      // Size + style ball DOM elements
      ballBodies.forEach((body, i) => {
        const el = ballRefsRef.current[i];
        if (!el) return;
        const r = body._r;
        const d = r * 2;
        el.style.width = `${d}px`;
        el.style.height = `${d}px`;
        el.style.borderRadius = "50%";
        el.style.background = ballData[i].colour;
        el.style.boxShadow = "none";
      });

      let last = performance.now();

      const loop = now => {
        if (cancelled) return;
        const delta = Math.min(now - last, 50);
        last = now;
        Engine.update(engine, delta);

        // Sync badge DOM elements
        badgeBodies.forEach((body, i) => {
          const el = badgeRefsRef.current[i];
          if (!el) return;
          const x = Math.round(body.position.x);
          const y = Math.round(body.position.y);
          const a = body.angle;
          el.style.transform = `translate(${x}px,${y}px) rotate(${a}rad) translate(${-body._w / 2}px,${-body._h / 2}px)`;
        });

        // Sync ball DOM elements
        ballBodies.forEach((body, i) => {
          const el = ballRefsRef.current[i];
          if (!el) return;
          const x = Math.round(body.position.x);
          const y = Math.round(body.position.y);
          const r = body._r;
          el.style.transform = `translate(${x - r}px,${y - r}px)`;
        });

        const under = Query.point(allBodies, mouse.position);
        container.style.cursor = mc.body ? "grabbing" : under.length ? "grab" : "default";

        rafId = requestAnimationFrame(loop);
      };

      rafId = requestAnimationFrame(loop);

      // Reposition static walls when container resizes
      let resizeRaf = null;
      ro = new ResizeObserver(entries => {
        if (cancelled) return;
        const entry = entries[0];
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW === 0 || newH === 0) return;
        if (resizeRaf) cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(() => {
          Body.setPosition(floor, { x: newW / 2, y: newH - INNER_PAD + WALL / 2 });
          Body.setPosition(wallL, { x: INNER_PAD - WALL / 2, y: newH / 2 });
          Body.setPosition(wallR, { x: newW - INNER_PAD + WALL / 2, y: newH / 2 });
        });
      });
      ro.observe(container);
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-ppmondwest text-[24px] leading-[1.25]">Skills</h2>

      <div
        ref={containerRef}
        className="relative h-[540px] overflow-hidden rounded-xl"
        style={{
          maxWidth: 1400,
          userSelect: "none",
          touchAction: "none",
          backgroundColor: "oklch(0.95 0 0)",
        }}
      >
        {/* Balls rendered behind badges */}
        {Array.from({ length: BALL_COUNT }, (_, i) => (
          <div
            key={`ball-${i}`}
            ref={el => {
              ballRefsRef.current[i] = el;
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              // Size will be overridden once physics runs; start hidden
              width: 0,
              height: 0,
              pointerEvents: "none",
              transformOrigin: "0 0",
              willChange: "transform",
            }}
          />
        ))}

        {/* Badges on top */}
        {ALL_SKILLS.map((skill, i) => {
          const st = BADGE_STYLE[skill.type];
          return (
            <div
              key={skill.text}
              ref={el => {
                badgeRefsRef.current[i] = el;
              }}
              className={skill.type === "design" ? "font-ppmondwest" : "font-satoshi"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "hidden",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: 1,
                whiteSpace: "nowrap",
                padding: `${PAD_Y}px ${PAD_X}px`,
                background: st.background,
                color: st.color,
                borderRadius: st.borderRadius,
                pointerEvents: "none",
                transformOrigin: "0 0",
                willChange: "transform",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              {skill.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";
import { useEffect } from "react";
import { useSpring, useTransform, motion, AnimatePresence } from "motion/react";
import { canvasZoom } from "@/lib/ideasTransform";
import CursorIcon from "./CursorIcon";
import MessageBubble from "./MessageBubble";

const SPRING = { stiffness: 400, damping: 40, restDelta: 0.01 };

// Renders a cursor in canvas-space. Lives inside the canvas motion.div transform
// group so pan/zoom are handled automatically — no manual math needed.
// counter-scale keeps the cursor visually the same size regardless of zoom.
export default function IdeasCursor({ user }) {
  const cx = useSpring(user.x, SPRING);
  const cy = useSpring(user.y, SPRING);
  // Counter-scale so the cursor stays the same visual size as the canvas zooms
  const scale = useTransform(() => 1 / canvasZoom.get());

  // Keep spring targets in sync as remote user moves
  useEffect(() => {
    cx.set(user.x);
  }, [user.x, cx]);
  useEffect(() => {
    cy.set(user.y);
  }, [user.y, cy]);

  return (
    <motion.div
      style={{
        x: cx,
        y: cy,
        scale,
        transformOrigin: "0 0",
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
    >
      <AnimatePresence>
        {user.message && (
          <MessageBubble key="bubble" text={user.message.text} color={user.color} typing={false} />
        )}
      </AnimatePresence>
      <CursorIcon color={user.color} />
      {!user.message && (
        <div
          style={{
            marginTop: 4,
            marginLeft: 16,
            background: user.color,
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.01em",
            padding: "2px 8px",
            borderRadius: 4,
            whiteSpace: "nowrap",
            fontFamily: "var(--font-satoshi), Satoshi, sans-serif",
          }}
        >
          {user.name}
        </div>
      )}
    </motion.div>
  );
}

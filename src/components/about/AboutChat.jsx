"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const CHAR_MS = 28;
const PAUSE_AFTER_MS = 900;
const DOTS_MS_PER_CHAR = 40;
const DOTS_MIN_MS = 1800;
const DOTS_MAX_MS = 4500;

const MESSAGES = [
  { side: "left", text: "Hey Callum, what're you up to?" },
  {
    side: "right",
    text: "Well, I've been working on this site a fair bit recently. Other than that, I've been working on Your Next Tale.\n\nOutside of this I've been reading a fair amount, playing some games, and exploring with my wife, Dawn. Oh I've also been taking a lot of photos, that's always pretty neat.",
  },
  { side: "left", text: "Oh sweet! Any you want to share?" },
  { side: "right", text: "Oh yeah, check these out!", hasPhotos: true },
  { side: "left", text: "Oh neat. So how did you get into design and development?" },
  {
    side: "right",
    text: "I've always been a massive nerd. Ever since I was old enough to play video games I have. This led to me getting a laptop eventually at 11. At this point I started messing around with programming, and creating stuff digitally.\n\nThen at school I did some cool stuff like creating websites to play flash games that were blocked by the major sites at school. Creating websites little side projects. Oh and for some reason I learned how to write my name using binary (I have no idea why, but I can do it if you want me to). From there I just kept on learning and doing more and more cool stuff.",
  },
];

function dotsDelay(text) {
  return Math.min(DOTS_MAX_MS, Math.max(DOTS_MIN_MS, text.length * DOTS_MS_PER_CHAR));
}

function LeftTail() {
  return (
    <svg
      className="absolute -bottom-[6px] left-[16px]"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
    >
      <path d="M0 0L10 0L0 6Z" fill="#DDDDDD" />
    </svg>
  );
}

function RightTail() {
  return (
    <svg
      className="absolute -bottom-[6px] right-[16px]"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
    >
      <path d="M10 0L0 0L10 6Z" fill="#0090ff" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex gap-[5px] items-center px-1 py-[3px]">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="block w-[7px] h-[7px] rounded-full bg-[#aaaaaa]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function TypedText({ text, typedLen, isTyping, textClass }) {
  const displayed = text.slice(0, typedLen);
  const parts = displayed.split("\n\n");
  return (
    <>
      {parts.map((part, i) => (
        <p
          key={i}
          className={textClass}
          style={{ margin: 0, marginBottom: i < parts.length - 1 ? 14 : 0 }}
        >
          {part}
          {i === parts.length - 1 && isTyping && <span className="about-chat-cursor" aria-hidden />}
        </p>
      ))}
    </>
  );
}

function FullText({ text, textClass }) {
  const parts = text.split("\n\n");
  return (
    <>
      {parts.map((part, i) => (
        <p
          key={i}
          className={textClass}
          style={{ margin: 0, marginBottom: i < parts.length - 1 ? 14 : 0 }}
        >
          {part}
        </p>
      ))}
    </>
  );
}

export default function AboutChat() {
  // "hidden" | "dots" (left) | "typing" (right) | "visible"
  const [msgStates, setMsgStates] = useState(MESSAGES.map(() => "hidden"));
  const [typedLengths, setTypedLengths] = useState(MESSAGES.map(() => 0));
  const scrollRef = useRef(null);
  const timerRef = useRef(null);
  const activeIdxRef = useRef(-1);
  // Track whether user has manually scrolled up
  const userScrolledRef = useRef(false);
  // Prevent programmatic scrolls from flipping userScrolledRef
  const isProgrammaticScrollRef = useRef(false);

  function clearTimer() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  // Scroll to bottom unless the user has scrolled up
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || userScrolledRef.current) return;
    isProgrammaticScrollRef.current = true;
    el.scrollTop = el.scrollHeight;
    // Reset the lock after the scroll event has fired
    requestAnimationFrame(() => {
      isProgrammaticScrollRef.current = false;
    });
  }, [msgStates, typedLengths]);

  // Kick off first message
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      activeIdxRef.current = 0;
      setMsgStates(prev => {
        const n = [...prev];
        n[0] = MESSAGES[0].side === "left" ? "dots" : "typing";
        return n;
      });
    }, 300);
    return clearTimer;
  }, []);

  // State machine
  useEffect(() => {
    const idx = activeIdxRef.current;
    if (idx < 0 || idx >= MESSAGES.length) return;
    const msg = MESSAGES[idx];
    const state = msgStates[idx];
    const typed = typedLengths[idx];

    clearTimer();

    if (state === "dots") {
      timerRef.current = setTimeout(() => {
        setMsgStates(prev => {
          const n = [...prev];
          n[idx] = "visible";
          return n;
        });
        setTypedLengths(prev => {
          const n = [...prev];
          n[idx] = msg.text.length;
          return n;
        });
      }, dotsDelay(msg.text));
    } else if (state === "typing") {
      if (typed < msg.text.length) {
        timerRef.current = setTimeout(() => {
          setTypedLengths(prev => {
            const n = [...prev];
            n[idx] = prev[idx] + 1;
            return n;
          });
        }, CHAR_MS);
      } else {
        setMsgStates(prev => {
          const n = [...prev];
          n[idx] = "visible";
          return n;
        });
      }
    } else if (state === "visible" && idx < MESSAGES.length - 1) {
      timerRef.current = setTimeout(() => {
        const nextIdx = idx + 1;
        activeIdxRef.current = nextIdx;
        setMsgStates(prev => {
          const n = [...prev];
          n[nextIdx] = MESSAGES[nextIdx].side === "left" ? "dots" : "typing";
          return n;
        });
      }, PAUSE_AFTER_MS);
    }

    return clearTimer;
  }, [msgStates, typedLengths]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <style>{`
        @keyframes about-cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .about-chat-cursor {
          display: inline-block;
          width: 1.5px;
          height: 0.9em;
          background: currentColor;
          vertical-align: text-bottom;
          margin-left: 1px;
          opacity: 0.7;
          animation: about-cursor-blink 530ms step-start infinite;
        }
        .about-chat-scroll::-webkit-scrollbar { display: none; }
        .about-chat-scroll { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div
        className="flex flex-col max-w-[710px] bg-[#ededed] rounded-[12px] overflow-hidden"
        style={{ height: 520 }}
      >
        {/* Scrollable messages — mt-auto pushes content to bottom when short */}
        <div
          ref={scrollRef}
          className="about-chat-scroll flex-1 overflow-y-auto flex flex-col px-5 py-4"
          onScroll={e => {
            if (isProgrammaticScrollRef.current) return;
            const el = e.currentTarget;
            const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
            userScrolledRef.current = !atBottom;
          }}
        >
          <div className="mt-auto flex flex-col gap-4">
            {MESSAGES.map((msg, idx) => {
              const state = msgStates[idx];
              if (state === "hidden") return null;
              const typed = typedLengths[idx];
              const isLeft = msg.side === "left";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 340, damping: 28, mass: 0.9 }}
                >
                  {isLeft ? (
                    <div className="flex flex-col items-start">
                      <div className="relative bg-[#DDDDDD] rounded-[8px] px-4 py-2 max-w-[467px]">
                        {state === "dots" ? (
                          <TypingDots />
                        ) : (
                          <FullText
                            text={msg.text}
                            textClass="font-satoshi text-[14px] font-medium leading-[1.25] text-[#656565]"
                          />
                        )}
                        <LeftTail />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="flex flex-col gap-2 items-end max-w-[467px]">
                        {msg.hasPhotos && (
                          <div className="grid grid-cols-2 gap-0 pt-[10px] w-full">
                            <img
                              src="/images/random/37.jpg"
                              alt="Photo 1"
                              className="object-cover h-[120px] w-full rounded-tl-lg"
                            />
                            <img
                              src="/images/about/image-2.jpg"
                              alt="Photo 2"
                              className="object-cover h-[120px] w-full rounded-tr-lg"
                            />
                            <img
                              src="/images/random/2.jpg"
                              alt="Photo 3"
                              className="object-cover h-[120px] w-full rounded-bl-lg"
                            />
                            <img
                              src="/images/random/26.jpg"
                              alt="Photo 4"
                              className="object-cover h-[120px] w-full rounded-br-lg"
                            />
                          </div>
                        )}
                        <div
                          className="relative rounded-[8px] px-4 py-2 self-end"
                          style={{ background: "#0090ff" }}
                        >
                          <TypedText
                            text={msg.text}
                            typedLen={typed}
                            isTyping={state === "typing"}
                            textClass="font-satoshi text-[14px] font-medium leading-[1.25] text-white"
                          />
                          <RightTail />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

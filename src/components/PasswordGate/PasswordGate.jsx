"use client";

import { useState, useLayoutEffect } from "react";
import { usePasswordGate } from "@/contexts/PasswordGateContext";

const COOKIE_KEY = "pg_unlocked";

function setCookie(name, value, days = 30) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Strict`;
}

export default function PasswordGate({ password, children, defaultUnlocked = false }) {
  const [unlocked, setUnlocked] = useState(defaultUnlocked);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const { setIsLocked } = usePasswordGate();

  useLayoutEffect(() => {
    setIsLocked(!unlocked);
  }, [unlocked]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input === password) {
      setCookie(COOKIE_KEY, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  }

  if (unlocked) return children;

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-40">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-[22px] font-semibold tracking-tight text-[#1a1a1a]">
          Password protected
        </h1>
        <p className="text-[14px] font-medium text-[#656565]">
          Enter the password to view this case study.
        </p>
      </div>

      <form className="flex w-full max-w-[320px] flex-col gap-3" onSubmit={handleSubmit}>
        <input
          autoComplete="current-password"
          autoFocus
          className={[
            "w-full rounded-[10px] border bg-white px-4 py-3 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors placeholder:text-[#b0b0b0]",
            error
              ? "border-red-300 focus:border-red-400"
              : "border-[#e0e0e0] focus:border-[#a0a0a0]",
          ].join(" ")}
          placeholder="Password"
          type="password"
          value={input}
          onChange={e => {
            setInput(e.target.value);
            if (error) setError(false);
          }}
        />
        {error && (
          <p className="text-[13px] font-medium text-red-500">
            Incorrect password. Please try again.
          </p>
        )}
        <button
          className="w-full rounded-[10px] bg-[#1a1a1a] px-4 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
          type="submit"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

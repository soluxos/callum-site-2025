"use client";

import { createContext, useContext, useState } from "react";

const PasswordGateContext = createContext({ isLocked: false, setIsLocked: () => {} });

export function PasswordGateProvider({ children }) {
  const [isLocked, setIsLocked] = useState(false);
  return (
    <PasswordGateContext.Provider value={{ isLocked, setIsLocked }}>
      {children}
    </PasswordGateContext.Provider>
  );
}

export function usePasswordGate() {
  return useContext(PasswordGateContext);
}

"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes"

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
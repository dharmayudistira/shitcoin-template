"use client";

import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <AppProgressBar
        height="4px"
        color={"#000000"}
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}

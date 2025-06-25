"use client";

import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/app/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<ReturnType<typeof makeStore> | null>(null);

  useEffect(() => {
    setStore(makeStore());
  }, []);

  if (!store) return null;

  return <Provider store={store}>{children}</Provider>;
}

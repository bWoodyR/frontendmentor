"use client";

import { TIPAddressData } from "@/types/IPAddressTracker";
import React, { useEffect, useState } from "react";

type IPAddressContextType = {
  ipData: TIPAddressData;
  setIPData: React.Dispatch<React.SetStateAction<TIPAddressData>>;
};

const IPAddressContext = React.createContext<IPAddressContextType>({
  ipData: null,
  setIPData: () => {},
});

const IPAddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [ipData, setIPData] = useState<TIPAddressData>(null);

  useEffect(() => {
    console.log(ipData);
  }, [ipData]);

  return <IPAddressContext.Provider value={{ ipData, setIPData }}>{children}</IPAddressContext.Provider>;
};

export { IPAddressContext, IPAddressProvider };

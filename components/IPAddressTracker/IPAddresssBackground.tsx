"use client";

import React, { useContext } from "react";
import { IPAddressContext } from "./Context/IPAddressContext";

const IPAddresssBackground = () => {
  const { ipData } = useContext(IPAddressContext);
  const locality = ipData?.region || "Trenčín";

  return (
    <>
      <div className="h-[275px] sm:h-[225px] bg-fixed bg-cover  bg-no-repeat bg-[url('/assets/images/ip-address-tracker/pattern-bg-desktop.png')]"></div>
      <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&q=${locality}&zoom=16&maptype=satellite`} className="w-full min-h-max flex-1"></iframe>
    </>
  );
};

export default IPAddresssBackground;

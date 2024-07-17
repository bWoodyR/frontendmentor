"use client";

import React, { useContext, useEffect, useState } from "react";
import { IPAddressContext } from "./Context/IPAddressContext";
import LoadingSpinner from "../AdviceGenerator/LoadingSpinner";
import { useScreenSize } from "@/hooks/useScreenSize";

const IPAddresssBackground = () => {
  const { ipData } = useContext(IPAddressContext);
  const [bgImg, setBgImge] = useState("bg-[url('/assets/images/ip-address-tracker/pattern-bg-desktop.png')]");
  const { windowSize } = useScreenSize();
  const locality = ipData?.region;

  useEffect(() => {
    if (windowSize.width < 640) {
      setBgImge("bg-[url('/assets/images/ip-address-tracker/pattern-bg-mobile.png')]");
    } else {
      setBgImge("bg-[url('/assets/images/ip-address-tracker/pattern-bg-desktop.png')]");
    }
  }, [windowSize.width]);

  return (
    <>
      <div className={`h-[275px] sm:h-[225px] bg-fixed bg-cover  bg-no-repeat ${bgImg}`}></div>
      {locality ? (
        <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&q=${locality}&zoom=16&maptype=satellite`} className="w-full min-h-max flex-1"></iframe>
      ) : (
        <div className="flex items-center justify-center flex-1">
          <LoadingSpinner color="royale-blue" size={"medium"} />
        </div>
      )}
    </>
  );
};

export default IPAddresssBackground;

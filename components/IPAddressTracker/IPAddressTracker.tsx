"use client";

import { findIP, getUserIP } from "@/utils/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const IPAddressTracker = () => {
  const [state, formAction] = useFormState(findIP, null);
  const [userIp, setUserIp] = useState("");

  const getIp = async () => {
    const ip = await getUserIP();
  };

  useEffect(() => {
    getIp();
  }, []);

  return (
    <section className="relative flex flex-col min-h-screen bg-content bg-no-repeat bg-[url('/assets/images/ip-address-tracker/pattern-bg-mobile.png')] font-rubik">
      <Image src="/assets/images/ip-address-tracker/pattern-bg-mobile.png" alt="" width={100} height={75} className="w-full object-contain" />
      <iframe src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&center=48.893948,18.018858&zoom=16&maptype=satellite`} className="w-full min-h-max flex-1"></iframe>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-6 z-10 flex flex-col gap-4 w-[90%]">
        <div className=" flex flex-col gap-6 items-center justify-center ">
          <h1 className="text-2xl font-medium ">IP Address Tracker</h1>
          <form action={formAction} className="flex items-center w-full">
            <input type="text" name="ip" id="ip" className="flex-1 p-4 rounded-l-xl text-black "></input>
            <button className="bg-black p-6 rounded-r-xl">
              <Image src="/assets/images/ip-address-tracker/icon-arrow.svg" alt="" width={10} height={10} />
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center text-center bg-white text-black w-full p-4 rounded-2xl">
          <div className=" flex flex-col gap-2">
            <h3 className="text-dark-gray text-xs font-bold tracking-widest">IP ADDRESS</h3>
            <h2 className="text-black font-medium text-lg">{state?.ipData?.ip}</h2>
          </div>
          <div className=" flex flex-col gap-2">
            <h3 className="text-dark-gray text-xs font-bold tracking-widest">COUNTRY</h3>
            <h2 className="text-black font-medium text-lg">{state?.ipData?.country}</h2>
          </div>
          <div className=" flex flex-col gap-2">
            <h3 className="text-dark-gray text-xs font-bold tracking-widest">REGION</h3>
            <h2 className="text-black font-medium text-lg">{state?.ipData?.region}</h2>
          </div>
          <div className=" flex flex-col gap-2">
            <h3 className="text-dark-gray text-xs font-bold tracking-widest">TIMEZONE</h3>
            <h2 className="text-black font-medium text-lg">{state?.ipData?.timezone}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPAddressTracker;

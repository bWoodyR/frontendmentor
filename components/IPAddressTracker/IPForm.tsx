"use client";

import { getIPInformations } from "@/utils/actions";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import SingleIPParam from "./SingleIPParam";
import { TIPDataResponse } from "@/types/IPAddressTracker";

type Props = {
  userIpData: TIPDataResponse;
};

const IPForm = ({ userIpData }: Props) => {
  const [state, formAction] = useFormState(getIPInformations, null);
  const ipTrackerFormRef = useRef<HTMLFormElement>(null);

  const data = [
    {
      title: "IP ADDRESS",
      value: state?.ipData?.ip || userIpData?.ipData?.ip || "",
    },
    {
      title: "COUNTRY",
      value: state?.ipData?.country || userIpData?.ipData?.country || "",
    },
    {
      title: "REGION",
      value: state?.ipData?.region || userIpData?.ipData?.region || "",
    },
    {
      title: "TIMEZONE",
      value: state?.ipData?.timezone || userIpData?.ipData?.timezone || "",
    },
  ];

  // useEffect(() => {
  //   if (ipTrackerFormRef.current) {
  //     ipTrackerFormRef.current.requestSubmit();
  //   }
  // }, []);

  return (
    <div className=" flex flex-col gap-6 sm:gap-10 items-center w-full 0">
      <div className="w-full flex flex-col items-center ">
        <h1 className="text-2xl font-medium ">IP Address Tracker</h1>
        <form action={formAction} className="w-full flex items-center  justify-center" ref={ipTrackerFormRef}>
          <input type="text" name="ip" id="ip" className="flex-1 px-4 py-3 rounded-l-xl text-black max-w-[400px]" placeholder="Search for any IP address or domain"></input>
          <button className="bg-black p-5 rounded-r-xl">
            <Image src="/assets/images/ip-address-tracker/icon-arrow.svg" alt="" width={10} height={10} />
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center py-4 bg-white text-black rounded-xl w-full sm:w-auto sm:flex-row sm:items-start">
        {data.map((item, index) => {
          return (
            <div key={item.title} className={`px-4 py-2 ${index < data.length - 1 ? "sm:border-r sm:border-r-1" : null}`}>
              <SingleIPParam {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IPForm;

"use client";

import { findIP } from "@/utils/actions";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import SingleIPParam from "./SingleIPParam";

type Props = {
  ip: string | null;
};

const IPForm = ({ ip }: Props) => {
  const [state, formAction] = useFormState(findIP, null);
  const ipTrackerFormRef = useRef<HTMLFormElement>(null);

  const data = [
    {
      title: "IP ADDRESS",
      value: state?.ipData?.ip,
    },
    {
      title: "COUNTRY",
      value: state?.ipData?.country,
    },
    {
      title: "REGION",
      value: state?.ipData?.region,
    },
    {
      title: "TIMEZONE",
      value: state?.ipData?.timezone,
    },
  ];

  //   useEffect(() => {
  //     if (ipTrackerFormRef.current) {
  //       ipTrackerFormRef.current.requestSubmit();
  //     }
  //   }, []);

  return (
    <div className=" flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-medium ">IP Address Tracker</h1>
      <form action={formAction} className="flex items-center w-full sm:w-1/4 " ref={ipTrackerFormRef}>
        <input type="text" name="ip" id="ip" className="flex-1 p-4 rounded-l-xl text-black " placeholder="Search for any IP address or domain"></input>
        <button className="bg-black p-6 rounded-r-xl">
          <Image src="/assets/images/ip-address-tracker/icon-arrow.svg" alt="" width={10} height={10} />
        </button>
      </form>
      <div className="flex flex-col gap-10 p-6 bg-white text-black rounded-2xl sm:flex-row">
        {data.map((item) => {
          return <SingleIPParam key={item.title} {...item} />;
        })}
      </div>
    </div>
  );
};

export default IPForm;

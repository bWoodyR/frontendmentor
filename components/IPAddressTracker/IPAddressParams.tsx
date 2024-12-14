"use client";

import React, { useCallback, useContext, useEffect } from "react";
import SingleIPParam from "./SingleIPParam";
import { IPAddressContext } from "./Context/IPAddressContext";
import { getInformationAboutIp, getUserIp } from "@/utils/actions";
import { headers } from "next/headers";

const IPAddressParams = () => {
  const { ipData, setIPData } = useContext(IPAddressContext);

  const getUserIpData = useCallback(async () => {
    const userIP = await getUserIp();
    console.log(headers());
    console.log(headers().get("x-forwarded-for"));
    if (userIP) {
      const userIpData = await getInformationAboutIp(userIP);
      setIPData(userIpData);
    }
  }, [setIPData]);

  useEffect(() => {
    getUserIpData();
  }, [getUserIpData]);

  const data = [
    {
      title: "IP ADDRESS",
      value: ipData?.address || "",
    },
    {
      title: "COUNTRY",
      value: ipData?.country || "",
    },
    {
      title: "REGION",
      value: ipData?.region || "",
    },
    {
      title: "TIMEZONE",
      value: ipData?.timezone || "",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl bg-white py-4 text-black sm:w-auto sm:flex-row sm:items-stretch">
      {data.map((item, index) => {
        return (
          <div
            key={item.title}
            className={`px-4 py-2 ${index < data.length - 1 ? "sm:border-r-1 sm:border-r" : null}`}
          >
            <SingleIPParam {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default IPAddressParams;

"use client";

import React, { useCallback, useContext, useEffect } from "react";
import SingleIPParam from "./SingleIPParam";
import { IPAddressContext } from "./Context/IPAddressContext";
import { getInformationAboutIp, getUserIp } from "@/utils/actions";

const IPAddressParams = () => {
  const { ipData, setIPData } = useContext(IPAddressContext);

  const getUserIpData = useCallback(async () => {
    const userIP = await getUserIp();
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
    <div className="flex flex-col items-center py-4 bg-white text-black rounded-xl w-full sm:w-auto sm:flex-row sm:items-start">
      {data.map((item, index) => {
        return (
          <div key={item.title} className={`px-4 py-2 ${index < data.length - 1 ? "sm:border-r sm:border-r-1" : null}`}>
            <SingleIPParam {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default IPAddressParams;

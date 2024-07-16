"use server";

import { TIPDataResponse } from "@/types/IPAddressTracker";
import { headers } from "next/headers";


export const findIP = async (prevState: TIPDataResponse | null, formData: FormData) => {
  try {
    const ip = formData.get("ip");
    const URL = "https://api.api-ninjas.com/v1/iplookup?address=";
    const API_KEY = process.env.API_NINJAS_KEY;

    const response = await fetch(`${URL}${ip}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": `${API_KEY}`,
      },
    });
    const ipData = await response.json();
    if (response.status === 200) {
      // coming in format: "name Region" we are removing word Region
      const regionToArray = ipData.region.split(" ");
      const fixedRegion = regionToArray.slice(0, regionToArray.length - 1).join(" ");

      console.log(fixedRegion);
      return {
        ipData: {
          ip: ipData.address,
          region: fixedRegion,
          country: ipData.country,
          countryCode: ipData.countryCode,
          timezone: ipData.timezone,
          isValid: ipData.isValid,
        },
        errorMessage: "",
      };
    } else {
      return {
        ipData: null,
        errorMessage: "Something went wrong",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      ipData: null,
      errorMessage: "Internal Server Error",
    };
  }
};

export const getUserIP = async () => {
const FALLBACK_IP_ADDRESS = "0.0.0.0";
const forwardedFor = headers().get("x-forwarded-for");
const realIp = headers().get("x-real-ip");
console.log(forwardedFor)
console.log(realIp)

return forwardedFor;
}


export const getAdvice = async () => {
  try {
    const URL = "https://api.adviceslip.com/advice";
    const response = await fetch(URL);
    const data = await response.json();

    if (response.status === 200) {
      return {
        errorMessage: "",
        adviceData: data,
      };
    } else {
      return {
        errorMessage: "Something went wrong.",
        adviceData: null,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      errorMessage: "Internal Server Error",
      adviceData: null,
    };
  }
};

"use server";

import { TIPDataResponse } from "@/types/IPAddressTracker";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const getIPInformations = async (prevState: TIPDataResponse | null, formData: FormData) => {
  const ip = formData.get("ip") as string;
  const ipData = await findIPData(ip);
  if (ipData.ipData) {
    return ipData;
  } else {
    return {
      ipData: null,
      errorMessage: "Something went wrong",
    };
  }
};

export const getUserIP = async () => {
  const forwardedFor = headers().get("x-forwarded-for");
  console.log(forwardedFor);
  return forwardedFor;
};

export const findIPData = async (ip: string): Promise<TIPDataResponse> => {
  console.log(ip);
  const URL = "https://api.api-ninjas.com/v1/iplookup?address=";
  const API_KEY = process.env.API_NINJAS_KEY;

  const response = await fetch(`${URL}${ip}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": `${API_KEY}`,
    },
  });
  const ipData = await response.json();
  if (response.status === 200 && ipData.is_valid) {
    // coming in format: "name Region" we are removing word Region
    const regionToArray = ipData.region.split(" ");
    const fixedRegion = regionToArray.slice(0, regionToArray.length - 1).join(" ");
    console.log(ipData);
   revalidatePath("/projects");
    return {
      ipData: {
        ip: ipData.address,
        region: fixedRegion,
        country: ipData.country,
        countryCode: ipData.countryCode,
        timezone: ipData.timezone,
        isValid: ipData.is_valid,
      },
      errorMessage: "",
    };
  } else {
    return {
      ipData: null,
      errorMessage: "Something went wrong",
    };
  }
};

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

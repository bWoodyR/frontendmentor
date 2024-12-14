"use server";

import { headers } from "next/headers";
import { validateIP } from "./helpers/validations";
import { TIPAddressData } from "@/types/IPAddressTracker";

export const handleIPAddressForm = async (
  prevState: TIPAddressData | null,
  formData: FormData,
) => {
  const ip = formData.get("ip") as string;
  const data = await getInformationAboutIp(ip.trim());
  if (!data) return null;
  const { is_valid, country, country_code, region, timezone, address } = data;
  return { is_valid, country, country_code, region, timezone, address };
};

export const getInformationAboutIp = async (ipAddress: string) => {
  const URL = "https://api.api-ninjas.com/v1/iplookup?address=";
  const API_KEY = process.env.API_NINJAS_KEY;
  const ip = ipAddress;
  const isIPValid = validateIP(ip);
  if (!isIPValid) return null;

  const response = await fetch(`${URL}${ip}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": `${API_KEY}`,
    },
  });
  const data = await response.json();

  if (response.status === 200 && data.is_valid) {
    return data;
  } else return null;
};

export const getUserIp = async () => {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const xForwardedFor = headers().get("x-forwarded-for") ?? FALLBACK_IP_ADDRESS;
  // const realIp = headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;

  const isIPValid = validateIP(xForwardedFor.split(",")[0]);
  if (isIPValid) return xForwardedFor.split(",")[0];
  return null;
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

import { z } from "zod";

export const validateIP = (ip: string): boolean => {
  // const ipSchema = z.string().ip();
  // const validateIp = ipSchema.safeParse(ip);
  // if (validateIp.success) {
  //   return true;
  // } else return false;
  return true;
};

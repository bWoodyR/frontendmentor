export type TIPDataResponse = {
  ipData: {
    ip: string;
    region: string;
    country: string;
    countryCode: string;
    timezone: string;
    isValid: boolean;
  } | null;
  errorMessage: string;
};
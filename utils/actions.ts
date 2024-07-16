"use server";

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

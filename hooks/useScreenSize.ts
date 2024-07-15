import { useEffect, useState } from "react";

export type ScreenSize = {
  width: number;
  height: number;
};

const getWindowSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState<ScreenSize>(getWindowSize());

  const handleResize = () => {
    setWindowSize(getWindowSize());
  };

  useEffect(() => {
    window.addEventListener("resize", () => handleResize());
    return () => removeEventListener("resize", () => handleResize());
  }, []);

  return { windowSize };
};

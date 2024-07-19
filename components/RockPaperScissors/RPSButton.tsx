"use client";

import Image from "next/image";
import { useContext } from "react";
import { RPSContext } from "./Context/RPSContext";
import {
  TRockPaperScissorsPick,
} from "@/types/RockPaperScissors";

type Props = {
  icon: TRockPaperScissorsPick;
};

const RPSButton = ({ icon }: Props) => {
  const { handlePlayerPick, showResultScreen } = useContext(RPSContext);
  const i = icon ? icon : "paper";
  const borderColors = {
    paper: "bg-gradient-to-b from-paper-gradient-from to-paper-gradient-to",
    scissors: "bg-gradient-to-b from-scissors-gradient-from to-scissors-gradient-to",
    rock: "bg-gradient-to-b from-rock-gradient-from to-rock-gradient-to",
    none: "opacity-50",
  };

  return (
    <button
      className={`flex items-center justify-center  ${borderColors[i]} rounded-full p-4`}
      onClick={() => handlePlayerPick(icon)}
      disabled={showResultScreen}
    >
      <span
        className={`flex h-28 w-28 items-center justify-center rounded-full ${icon === "none" ? "bg-[#141539]" : "bg-slate-200"} `}
      >
        {icon !== "none" && (
          <Image
            src={`/assets/images/rock-paper-scissors/icon-${icon}.svg`}
            alt=""
            width={40}
            height={40}
          ></Image>
        )}
      </span>
    </button>
  );
};

export default RPSButton;

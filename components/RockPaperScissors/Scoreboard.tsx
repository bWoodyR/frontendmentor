"use client"

import Image from "next/image";
import { useContext } from "react";
import { RPSContext } from "./Context/RPSContext";

const Scoreboard = () => {
  const {score} = useContext(RPSContext)
  return (
    <div className="flex w-1/2 items-center justify-between rounded-xl border-2 border-slate-500 p-4">
      <Image
        src="/assets/images/rock-paper-scissors/logo.svg"
        alt="rock-paper-scissors log"
        width={100}
        height={50}
      />
      <div className="flex flex-col items-center rounded-lg bg-white px-6 py-2 text-black">
        <p className="text-xs">SCORE</p>
        <span className="text-4xl font-bold">{score}</span>
      </div>
    </div>
  );
};

export default Scoreboard;

"use client";

import { useContext } from "react";
import { RPSContext } from "./Context/RPSContext";
import RPSButton from "./RPSButton";

const ResultScreen = () => {
  const { result, playerPick, computerPick, playAgain } =
    useContext(RPSContext);

  return (
    <div className="flex items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl">YOU PCIKED</p>
        <RPSButton icon={playerPick} />
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl">YOU {result?.toUpperCase()}</p>
        <button
          className="rounded-lg bg-white px-6 py-1 text-black"
          onClick={() => playAgain()}
        >
          PLAY AGAIN
        </button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl">THE HOUSE PICKED</p>
        <RPSButton icon={computerPick} />
      </div>
    </div>
  );
};

export default ResultScreen;

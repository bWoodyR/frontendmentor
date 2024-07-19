"use client";

import {
  TRockPaperScissorsOptions,
  TRockPaperScissorsPick,
  TRockPaperScissorsResult,
} from "@/types/RockPaperScissors";
import React from "react";
import { useState } from "react";

type RockPaperScissorsType = {
  playerPick: TRockPaperScissorsPick;
  computerPick: TRockPaperScissorsPick;
  showResultScreen: boolean;
  result: TRockPaperScissorsResult;
  handlePlayerPick: (pick: TRockPaperScissorsPick) => void;
  playAgain: () => void;
  score: number;
};

const RPSContext = React.createContext<RockPaperScissorsType>({
  playerPick: "none",
  computerPick: "none",
  showResultScreen: false,
  result: null,
  handlePlayerPick: () => {},
  playAgain: () => {},
  score: 0,
});

const RPSProvider = ({ children }: { children: React.ReactNode }) => {
  const [playerPick, setPlayerPick] = useState<TRockPaperScissorsPick>("none");
  const [computerPick, setComputerPick] =
    useState<TRockPaperScissorsPick>("none");
  const [result, setResult] = useState<TRockPaperScissorsResult>(null);
  const [showResultScreen, setShowResultScreen] = useState(false);
  const [score, setScore] = useState<number>(0);

  const handlePlayerPick = (pick: TRockPaperScissorsPick) => {
    setPlayerPick(pick);
    setShowResultScreen(true);
    setTimeout(() => {
      const computerPick = handleComputerPick();
      setTimeout(() => {
        getResult(pick, computerPick);
      }, 1000);
    }, 1000);
  };

  const getResult = (
    playerPick: TRockPaperScissorsPick,
    computerPick: TRockPaperScissorsPick,
  ) => {
    const winningConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (playerPick === computerPick) {
      setResult("draw");
    } else if (
      playerPick !== "none" &&
      winningConditions[playerPick] === computerPick
    ) {
      setResult("won");
      setScore((score) => score + 1);
    } else {
      setResult("lost");
      setScore((score) => (score > 0 ? score - 1 : 0));
    }
  };

  const handleComputerPick = () => {
    const availableOptions: TRockPaperScissorsOptions = [
      "rock",
      "paper",
      "scissors",
    ];
    const computerPick =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    setComputerPick(computerPick);
    return computerPick;
  };

  const playAgain = () => {
    setResult(null);
    setShowResultScreen(false);
    setPlayerPick("none"), setComputerPick("none");
  };

  return (
    <RPSContext.Provider
      value={{
        playerPick,
        computerPick,
        showResultScreen,
        result,
        handlePlayerPick,
        playAgain,
        score,
      }}
    >
      {children}
    </RPSContext.Provider>
  );
};

export { RPSContext, RPSProvider };

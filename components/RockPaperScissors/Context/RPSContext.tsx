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
  playerPick: null,
  computerPick: null,
  showResultScreen: false,
  result: null,
  handlePlayerPick: () => {},
  playAgain: () => {},
  score: 0,
});

const RPSProvider = ({ children }: { children: React.ReactNode }) => {
  const [playerPick, setPlayerPick] = useState<TRockPaperScissorsPick>(null);
  const [computerPick, setComputerPick] =
    useState<TRockPaperScissorsPick>(null);
  const [result, setResult] = useState<TRockPaperScissorsResult>(null);
  const [showResultScreen, setShowResultScreen] = useState(false);
  const [score, setScore] = useState<number>(0);

  const handlePlayerPick = (pick: TRockPaperScissorsPick) => {
    setPlayerPick(pick);
    getResult(pick);
    setShowResultScreen(true);
  };

  const getResult = (playerPick: TRockPaperScissorsPick) => {
    const availableOptions: TRockPaperScissorsOptions = [
      "rock",
      "paper",
      "scissors",
    ];
    const computerPick =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    setComputerPick(computerPick);
    const winningConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (playerPick === computerPick) {
      setResult("draw");
    } else if (
      playerPick !== null &&
      winningConditions[playerPick] === computerPick
    ) {
      setResult("won");
      setScore((score) => score + 1);
    } else {
      setResult("lost");
      setScore((score) => score - 1);
    }
  };

  const playAgain = () => {
    setResult(null);
    setShowResultScreen(false);
    setPlayerPick(null), setComputerPick(null);
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

"use client";

import { useContext } from "react";
import GameButtons from "./GameButtons";
import { RPSContext } from "./Context/RPSContext";
import ResultScreen from "./ResultScreen";

const RPSGame = () => {
  const { showResultScreen } = useContext(RPSContext);

  return <>{showResultScreen ? <ResultScreen /> : <GameButtons />}</>;
};

export default RPSGame;

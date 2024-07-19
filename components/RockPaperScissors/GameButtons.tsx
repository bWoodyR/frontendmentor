"use client";

import RPSButton from "./RPSButton";

const GameButtons = () => {
  return (
    <div className="flex min-h-80 max-w-[350px] flex-row flex-wrap items-start justify-center gap-4 bg-[url(/assets/images/rock-paper-scissors/bg-triangle.svg)] bg-contain bg-no-repeat">
      <div className="-mt-10 flex w-full justify-between">
        <RPSButton icon="paper" />
        <RPSButton icon="scissors" />
      </div>
      <div className="-mb-16">
        <RPSButton icon="rock" />
      </div>
    </div>
  );
};

export default GameButtons;

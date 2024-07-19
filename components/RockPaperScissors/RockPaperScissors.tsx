import { barlowSemiCondensed } from "@/app/fonts";
import Scoreboard from "./Scoreboard";
import FooterButtons from "./FooterButtons";
import { RPSProvider } from "./Context/RPSContext";
import RPSGame from "./RPSGame";

const RockPaperScissors = () => {
  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-between bg-gradient-radial from-[#1f3756] to-[#141539]  p-4 ${barlowSemiCondensed.className}`}
    >
      <RPSProvider>
        <Scoreboard />
        <RPSGame />
        <FooterButtons />
      </RPSProvider>
    </section>
  );
};

export default RockPaperScissors;

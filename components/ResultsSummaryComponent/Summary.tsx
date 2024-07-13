import SingleSummary from "./SingleSummary";
import SummaryButton from "./SummaryButton";

const Summary = () => {
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: "/assets/images/result-summary-component/icon-reaction.svg",
      color: "0, 100%, 67%",
    },
    {
      category: "Memory",
      score: 92,
      icon: "/assets/images/result-summary-component/icon-memory.svg",
      color: "39, 100%, 56%",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "/assets/images/result-summary-component/icon-verbal.svg",
      color: "166, 100%, 37%",
    },
    {
      category: "Visual",
      score: 72,
      icon: "/assets/images/result-summary-component/icon-visual.svg",
      color: "234, 85%, 45%",
    },
  ];

  return (
    <div className="flex flex-col gap-8 justify-between px-8 pb-8 sm:px-4 sm:py-12 sm:w-[300px]">
      <h2 className="text-black font-bold text-left">Summary</h2>
      <div className="flex flex-col gap-4">
        {data.map((result) => {
          return <SingleSummary key={result.category} {...result} />;
        })}
      </div>
      <SummaryButton />
    </div>
  );
};

export default Summary;

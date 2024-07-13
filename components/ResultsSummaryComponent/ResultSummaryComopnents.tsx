import Result from "./Result";
import Summary from "./Summary";

const ResultSummaryComopnents = () => {
  return (
    <section className="flex sm:flex-row sm:items-center sm:justify-center min-h-dvh bg-white text-lg font-hank font-medium">
      <div className="flex flex-col gap-4 sm:flex-row sm:h-[440px] sm:shadow-2xl sm:rounded-3xl w-full sm:w-auto">
        <Result />
        <Summary />
      </div>
    </section>
  );
};

export default ResultSummaryComopnents;

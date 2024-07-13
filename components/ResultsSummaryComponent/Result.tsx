import React from "react";

const Result = () => {
  return (
    <div className=" flex flex-col justify-between items-center gap-8 rounded-b-3xl sm:rounded-3xl p-12 text-center bg-gradient-to-b from-[#7857ff] to-[#2e2be9] sm:w-[300px]">
      <h3 className="text-[#c8c7ff] font-bold">Your Result</h3>
      <div className="flex items-center justify-center bg-gradient-to-b from-[#4e21ca] via-[#2421ca] to-transparent rounded-full w-40 h-40">
        <p className="flex flex-col text-center gap-2 text-sm text-gray-500">
          <span className="font-bold text-5xl text-white">76</span> of 100
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-white font-bold">Great</h2>
        <p className="text-[#c8c7ff] text-sm">You scored higher than 65% of the people who have taken these test.</p>
      </div>
    </div>
  );
};

export default Result;

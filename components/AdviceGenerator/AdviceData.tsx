import { Advice } from "@/types/AdviceGenerator";
import React from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import LoadingSpinner from "./LoadingSpinner";

const AdviceData = ({ advice }: { advice: Advice | undefined }) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center mb-8">
      <h2 className="text-neon-green text-sm tracking-[.25em]">ADVICE #{pending ? "" : advice?.slip?.id}</h2>
      {!advice || pending ? <LoadingSpinner /> : <p className="flex items-center justify-center font-extrabold text-light-cyan">{`${advice?.slip?.advice}`}</p>}
      <Image src={"/assets/images/advice-generator/pattern-divider-desktop.svg"} alt="pattern-devider" width={0} height={0} className="w-full h-6" />
    </div>
  );
};

export default AdviceData;

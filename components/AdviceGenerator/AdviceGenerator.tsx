"use client";

import { getAdvice } from "@/utils/actions";
import { useFormState } from "react-dom";
import AdviceSubmitButton from "./AdviceSubmitButton";
import { useEffect, useRef } from "react";
import AdviceData from "./AdviceData";

const AdviceGenerator = () => {
  const [state, formAction] = useFormState(getAdvice, { errorMessage: "", adviceData: null });
  const adviceFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    adviceFormRef.current?.requestSubmit();
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-4 p-4 sm:p-0 items-center justify-center bg-dark-blue font-manrope  text-[28px]">
      <form action={formAction} className="relative bg-dark-grayish-blue rounded-2xl p-8 max-w-[500px]" ref={adviceFormRef}>
        {state.errorMessage && <p className="flex items-center justify-center text-center">{state.errorMessage}</p>}
        <AdviceData advice={state?.adviceData} />
        <AdviceSubmitButton />
      </form>
    </div>
  );
};

export default AdviceGenerator;

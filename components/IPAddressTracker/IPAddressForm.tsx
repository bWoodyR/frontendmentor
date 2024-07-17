"use client";

import { handleIPAddressForm } from "@/utils/actions";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IPAddressContext } from "./Context/IPAddressContext";

const IPAddressForm = () => {
  const [state, formAction] = useFormState(handleIPAddressForm, null);
  const { setIPData } = useContext(IPAddressContext);

  useEffect(() => {
    setIPData(state);
  }, [state, setIPData]);

  return (
    <div className="w-full flex flex-col gap-4 items-center ">
      <h1 className="text-3xl font-medium text-white">IP Address Tracker</h1>
      <form action={formAction} className="w-full flex items-center  justify-center">
        <input type="text" name="ip" id="ip" className="flex-1 px-4 py-3 rounded-l-xl text-black max-w-[400px]" placeholder="Search for any IP address or domain"></input>
        <SubmitButton />
      </form>
    </div>
  );
};

export default IPAddressForm;

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="bg-black p-5 rounded-r-xl hover:bg-dark-gray transition-colors" disabled={pending} aria-label="Submit Button">
      <Image src="/assets/images/ip-address-tracker/icon-arrow.svg" alt="" width={10} height={10} />
    </button>
  );
};

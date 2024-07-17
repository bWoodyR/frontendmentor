import IPAddressForm from "./IPAddressForm";
import IPAddressParams from "./IPAddressParams";

const IPForm = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-6 p-4 z-10 w-full">
      <div className="flex flex-col gap-6 sm:gap-6 items-center w-full">
        <IPAddressForm />
        <IPAddressParams />
      </div>
    </div>
  );
};

export default IPForm;

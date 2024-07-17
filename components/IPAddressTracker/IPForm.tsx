import IPAddressForm from "./IPAddressForm";
import IPAddressParams from "./IPAddressParams";

const IPForm = () => {
  return (
    <div className=" flex flex-col gap-6 sm:gap-10 items-center w-full 0">
      <IPAddressForm />
      <IPAddressParams />
    </div>
  );
};

export default IPForm;

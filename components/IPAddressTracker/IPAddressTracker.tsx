import IPForm from "./IPForm";
import { IPAddressProvider } from "./Context/IPAddressContext";
import dynamic from "next/dynamic";

const IPAddresssBackgroundDynamic = dynamic(() => import("@/components/IPAddressTracker/IPAddresssBackground"));

const IPAddressTracker = async () => {
  return (
    <section className="relative flex flex-col  min-h-screen font-rubik">
      <IPAddressProvider>
        <IPAddresssBackgroundDynamic />
        <IPForm />
      </IPAddressProvider>
    </section>
  );
};

export default IPAddressTracker;

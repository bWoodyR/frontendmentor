import IPForm from "./IPForm";
import IPAddresssBackground from "./IPAddresssBackground";
import { IPAddressProvider } from "./Context/IPAddressContext";

const IPAddressTracker = async () => {
  return (
    <section className="relative flex flex-col  min-h-screen font-rubik">
      <IPAddressProvider>
        <IPAddresssBackground />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-6 p-4 z-10 w-full">
          <IPForm />
        </div>
      </IPAddressProvider>
    </section>
  );
};

export default IPAddressTracker;

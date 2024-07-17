import IPForm from "./IPForm";
import IPAddresssBackground from "./IPAddresssBackground";
import { IPAddressProvider } from "./Context/IPAddressContext";

const IPAddressTracker = async () => {
  return (
    <section className="relative flex flex-col  min-h-screen font-rubik">
      <IPAddressProvider>
        <IPAddresssBackground />
        <IPForm />
      </IPAddressProvider>
    </section>
  );
};

export default IPAddressTracker;

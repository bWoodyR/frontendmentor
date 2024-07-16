import { getUserIP } from "@/utils/actions";
import IPForm from "./IPForm";

const IPAddressTracker = async () => {
const ip = await getUserIP()

  return (
    <section className="relative flex flex-col  min-h-screen font-rubik">
      <div className="h-[275px] bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/assets/images/ip-address-tracker/pattern-bg-desktop.png')]"></div>
      <iframe src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&center=48.893948,18.018858&zoom=16&maptype=satellite`} className="w-full min-h-max flex-1"></iframe>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-6 p-4 z-10 w-full">
       <IPForm ip={ip} />      
      </div>
    </section>
  );
};

export default IPAddressTracker;

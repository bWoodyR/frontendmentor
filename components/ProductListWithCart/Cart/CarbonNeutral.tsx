import Image from "next/image";

const CarbonNeutral = () => {
  return (
    <div className="flex gap-2 bg-[#f4edeb] p-3 rounded-lg">
      <Image src="/assets/images/product-list-with-cart/icon-carbon-neutral.svg" alt="" width={20} height={20} />
      <p className="text-black text-xs">
        This is a <b>carbon-neutral</b> delivery
      </p>
    </div>
  );
};

export default CarbonNeutral;

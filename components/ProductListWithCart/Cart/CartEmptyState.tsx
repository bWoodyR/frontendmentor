import Image from "next/image";

const CartEmptyState = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-8">
      <Image src="/assets/images/product-list-with-cart/illustration-empty-cart.svg" alt="" width={0} height={0} className="w-[125px] h-[125px]" />
      <p className="text-rose400 font-medium">Your added items will appear here</p>
    </div>
  );
};

export default CartEmptyState;

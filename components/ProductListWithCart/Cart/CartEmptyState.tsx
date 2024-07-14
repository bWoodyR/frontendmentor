import Image from "next/image";

const CartEmptyState = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-8">
      <Image src="/assets/images/product-list-with-cart/illustration-empty-cart.svg" alt="" width={150} height={100} />
      <p className="text-rose400 font-medium">Your added items will appear here</p>
    </div>
  );
};

export default CartEmptyState;

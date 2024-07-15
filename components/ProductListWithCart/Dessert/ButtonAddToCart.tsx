import Image from "next/image";
import { ActionToDo } from "@/types/DessertsType";

type Props = {
  handleDessertClick: (actionToDo: ActionToDo) => void;
};

const ButtonAddToCart = ({ handleDessertClick }: Props) => {
  return (
    <button
      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex gap-2 items-center text-rose900 font-semibold text-sm bg-white px-6 py-2 rounded-3xl outline outline-2 outline-[#c9aea6] w-[155px] hover:text-dark-red hover:outline-dark-red transition-colors"
      onClick={() => handleDessertClick("add")}
    >
      <Image src={"/assets/images/product-list-with-cart/icon-add-to-cart.svg"} alt="add-to-cart-icon" width={20} height={20} />
      <span>Add to Cart</span>
    </button>
  );
};

export default ButtonAddToCart;

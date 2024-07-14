import { ActionToDo } from "@/types/DessertsType";
import Image from "next/image";

type Props = {
  handleDessertClick: (actionToDo: ActionToDo) => void;
  dessertCounnt: number;
};

const ButtonToChangeCount = ({ handleDessertClick, dessertCounnt }: Props) => {
  return (
    <div className="absolute bottom-0 left-0 translate-x-[50%] translate-y-[50%] z-10 flex gap-2 items-center text-rose900 font-semibold text-sm bg-[#c73a0f] px-4 py-3 rounded-3xl w-[155px]">
      <div className="flex justify-between items-center w-full">
        <button className=" flex items-center outline outline-1 outline-white rounded-full p-1 w-4 h-4" onClick={() => handleDessertClick("decrement")}>
          <Image src={"/assets/images/product-list-with-cart/icon-decrement-quantity.svg"} alt="decrement-dessert-icon" width={10} height={10} />
        </button>
        <span className="text-white">{dessertCounnt}</span>
        <button className=" flex items-center outline outline-1 outline-white rounded-full p-1 w-4 h-4" onClick={() => handleDessertClick("increment")}>
          <Image src={"/assets/images/product-list-with-cart/icon-increment-quantity.svg"} alt="increment-dessert-icon" width={10} height={10} />
        </button>
      </div>
    </div>
  );
};

export default ButtonToChangeCount;

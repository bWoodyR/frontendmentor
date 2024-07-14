import Image from "next/image";
import { useContext } from "react";
import { DessertContext } from "../Context/DessertContext";
import { DESSERT_ACTION_TYPES } from "../Context/DessertReducer";
import { Dessert } from "@/types/DessertsType";

type Props = {
  dessert: Dessert;
};

const CartSingleItem = ({ dessert }: Props) => {
  const { dispatch } = useContext(DessertContext);

  const removeItemFromCart = () => {
    dispatch({ type: DESSERT_ACTION_TYPES.HANDLE_ITEM_TO_ORDER, payload: { dessert, actionToDo: "remove" } });
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-black font-medium">{dessert.name}</p>
          <div className="flex gap-2">
            <span className="text-dark-red font-medium mr-2">{dessert.count}x</span>
            <span className="text-rose300">@ ${dessert.price.toFixed(2)}</span>
            <span className="text-rose400 font-medium">${(dessert.price * dessert.count).toFixed(2)}</span>
          </div>
        </div>
        <button className="outline outline-2 outline-[#c9aea6] rounded-full p-1" onClick={() => removeItemFromCart()}>
          <Image src="/assets/images/product-list-with-cart/icon-remove-item.svg" alt="" width={14} height={14} />
        </button>
      </div>
      <hr className="border border-1 border-[#f4edeb] w-full" />
    </div>
  );
};

export default CartSingleItem;

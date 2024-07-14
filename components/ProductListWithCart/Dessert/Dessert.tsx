import React, { useContext } from "react";
import Image from "next/image";
import { DessertContext } from "../Context/DessertContext";
import { DESSERT_ACTION_TYPES } from "../Context/DessertReducer";
import { ActionToDo, Dessert } from "@/types/DessertsType";
import ButtonAddToCart from "./ButtonAddToCart";
import ButtonToChangeCount from "./ButtonToChangeCount";
import DesertInformations from "./DesertInformations";

type Props = {
  dessert: Dessert;
};

const Desert = ({ dessert }: Props) => {
  const { dispatch } = useContext(DessertContext);

  const handleDessertClick = (action: ActionToDo) => {
    dispatch({
      type: DESSERT_ACTION_TYPES.HANDLE_ITEM_TO_ORDER,
      payload: {
        dessert,
        actionToDo: action,
      },
    });
  };

  return (
    <div key={dessert.name}>
      <div className="relative">
        <Image src={dessert.image.mobile} alt="" width={150} height={100} className={`w-full rounded-xl ${dessert.isSelected ? "outline outline-3 outline-dark-red" : null}`} />
        {!dessert.isSelected ? <ButtonAddToCart handleDessertClick={handleDessertClick} /> : <ButtonToChangeCount handleDessertClick={handleDessertClick} dessertCounnt={dessert.count} />}
      </div>
      <DesertInformations category={dessert.category} name={dessert.name} price={dessert.price} />
    </div>
  );
};

export default Desert;

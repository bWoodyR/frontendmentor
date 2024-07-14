import { useContext } from "react";
import CartSingleItem from "./CartSingleItem";
import { DessertContext } from "../Context/DessertContext";

const CartItemList = () => {
  const { state } = useContext(DessertContext);

  return (
    <div>
      {state.order.map((item) => {
        return <CartSingleItem key={item.name} dessert={item} />;
      })}
    </div>
  );
};

export default CartItemList;

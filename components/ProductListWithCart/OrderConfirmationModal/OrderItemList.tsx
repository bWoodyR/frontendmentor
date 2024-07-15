import { useContext } from "react";
import { DessertContext } from "../Context/DessertContext";
import OrderSingleItem from "./OrderSingleItem";

const OrderItemList = () => {
  const { state } = useContext(DessertContext);

  return (
    <div>
      {state.order.map((item) => {
        return <OrderSingleItem key={item.name} dessert={item} />;
      })}
    </div>
  );
};

export default OrderItemList;

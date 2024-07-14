import React, { useContext } from "react";
import { DessertContext } from "../Context/DessertContext";
import ButtonConfirmOrder from "./ButtonConfirmOrder";
import CarbonNeutral from "./CarbonNeutral";
import CartTotalPrice from "./CartTotalPrice";
import CartItemList from "./CartItemList";
import CartEmptyState from "./CartEmptyState";

const Cart = () => {
  const { state } = useContext(DessertContext);
  const totalItemsInCart = state.order.reduce((sum, num) => sum + num.count, 0);

  return (
    <div className="bg-[#fcf9f7] p-6 rounded-xl">
      <h2 className="text-2xl text-dark-red font-bold">Your Cart {`(${totalItemsInCart})`}</h2>
      {totalItemsInCart === 0 ? (
        <CartEmptyState />
      ) : (
        <>
          <CartItemList />
          <CartTotalPrice />
          <CarbonNeutral />
          <ButtonConfirmOrder />       
        </>
      )}
    </div>
  );
};

export default Cart;

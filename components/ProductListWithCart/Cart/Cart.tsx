import React, { useContext } from "react";
import { DessertContext } from "../Context/DessertContext";
import CarbonNeutral from "./CarbonNeutral";
import CartTotalPrice from "./CartTotalPrice";
import CartItemList from "./CartItemList";
import CartEmptyState from "./CartEmptyState";
import CartConfirmButton from "./CartConfirmButton";
import { DESSERT_ACTION_TYPES } from "../Context/DessertReducer";

const Cart = () => {
  const { state, dispatch } = useContext(DessertContext);
  const totalItemsInCart = state.order.reduce((sum, num) => sum + num.count, 0);

  return (
    <div className="bg-[#fcf9f7] p-6 rounded-xl min-w-[350px] sm:mt-8">
      <h2 className="text-2xl text-dark-red font-bold">Your Cart {`(${totalItemsInCart})`}</h2>
      {totalItemsInCart === 0 ? (
        <CartEmptyState />
      ) : (
        <>
          <CartItemList />
          <CartTotalPrice />
          <CarbonNeutral />
          <CartConfirmButton text="Confirm Order" callback={() => dispatch({ type: DESSERT_ACTION_TYPES.SHOW_ORDER_CONFIRM_DIALOG, payload: { showOrderConfirmationDialog: true } })} />
        </>
      )}
    </div>
  );
};

export default Cart;

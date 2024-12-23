import { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import CartTotalPrice from "../Cart/CartTotalPrice";
import CartConfirmButton from "../Cart/CartConfirmButton";
import { DessertContext } from "../Context/DessertContext";
import { DESSERT_ACTION_TYPES } from "../Context/DessertReducer";
import OrderItemList from "./OrderItemList";

const OrderConfirmationModal = () => {
  const { state, dispatch } = useContext(DessertContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (state.showOrderConfirmationDialog) {
        dialogRef.current.showModal();
      } else dialogRef.current.close();
    }
  }, [state.showOrderConfirmationDialog]);

  return (
    <dialog ref={dialogRef} className="backdrop:bg-black/75 open:min-w-full mb-0 p-8 md:open:min-w-[500px] md:mb-auto ">
      <div className="flex flex-col gap-4">
        <Image src="/assets/images/product-list-with-cart/icon-order-confirmed.svg" alt="" width={50} height={40} />
        <div className="flex flex-col gap-2">
          <h2 className="text-rose900 font-bold text-4xl">Order Confirmed</h2>
          <p className="text-rose300">We hope you enjoy your food!</p>
        </div>
        <div className="bg-rose50 px-4 rounded-lg">
          <OrderItemList />
          <CartTotalPrice />
        </div>
        <CartConfirmButton
          text="Start New Order"
          callback={() => {
            dispatch({ type: DESSERT_ACTION_TYPES.SHOW_ORDER_CONFIRM_DIALOG, payload: { showOrderConfirmationDialog: false } }), dispatch({ type: DESSERT_ACTION_TYPES.CLEAR_ORDER, payload: {} });
          }}
        />
      </div>
    </dialog>
  );
};

export default OrderConfirmationModal;

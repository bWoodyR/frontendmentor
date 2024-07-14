import { useContext } from "react";
import { DessertContext } from "../Context/DessertContext";
import { DESSERT_ACTION_TYPES } from "../Context/DessertReducer";

const ButtonConfirmOrder = () => {
  const { dispatch } = useContext(DessertContext);

  return (
    <button className="bg-[#c73a0f] w-full rounded-3xl mt-4 py-4 font-medium" onClick={() => dispatch({ type: DESSERT_ACTION_TYPES.SHOW_ORDER_CONFIRM_DIALOG, payload: { showOrderConfirmationDialog: true } })}>
      Confirm Order
    </button>
  );
};

export default ButtonConfirmOrder;

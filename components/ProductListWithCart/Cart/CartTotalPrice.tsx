import { useContext } from "react";
import { DessertContext } from "../Context/DessertContext";

const CartTotalPrice = () => {
  const { state } = useContext(DessertContext);

  const totalPrice = state.order.reduce((sum, num) => sum + num.price * num.count, 0);

  return (
    <div className="flex items-center justify-between text-black py-8">
      Order Total
      <span className="font-bold text-rose900 text-2xl">${totalPrice.toFixed(2)}</span>
    </div>
  );
}

export default CartTotalPrice
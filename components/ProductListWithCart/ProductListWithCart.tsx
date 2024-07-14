"use client";

import Cart from "./Cart/Cart";
import OrderConfirmationModal from "./Cart/OrderConfirmationModal";
import { DessertProvider } from "./Context/DessertContext";
import DesertList from "./Dessert/DessertList";

const ProductListWithCart = () => {
  return (
    <div className="flex flex-col gap-8 p-8 font-red-hat-text font-normal bg-[#f4edeb] ">
      <DessertProvider>
        <h1 className="text-4xl font-bold text-rose900">Desserts</h1>
        <OrderConfirmationModal />
        <DesertList />
        <Cart />
      </DessertProvider>
    </div>
  );
};

export default ProductListWithCart;

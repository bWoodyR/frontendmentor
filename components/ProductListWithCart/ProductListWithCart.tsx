"use client";

import Cart from "./Cart/Cart";
import OrderConfirmationModal from "./OrderConfirmationModal/OrderConfirmationModal";
import { DessertProvider } from "./Context/DessertContext";
import DesertList from "./Dessert/DessertList";

const ProductListWithCart = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-center gap-8 p-4 font-red-hat-text font-normal bg-[#f4edeb] min-h-screen">
      <DessertProvider>
        <div className=" flex flex-col sm:flex-row sm:items-start justify-center gap-6 sm:mt-8">
          <div>
            <h1 className="text-4xl font-bold text-rose900 mb-6">Desserts</h1>
            <OrderConfirmationModal />
            <DesertList />
          </div>
        </div>
        <Cart />
      </DessertProvider>
    </div>
  );
};

export default ProductListWithCart;

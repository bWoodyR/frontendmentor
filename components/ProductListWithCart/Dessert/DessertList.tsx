import { useContext } from "react";
import { DessertContext } from "../Context/DessertContext";
import dynamic from "next/dynamic";

// will render component on client side, because even if its client component already its preloaded on server, with dynamic import it will load only on client
// so we can use window object in our component
const DynamicDessert = dynamic(() => import("@/components/ProductListWithCart/Dessert/Dessert"), { ssr: false });

const DesertList = () => {
  const { state } = useContext(DessertContext);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {state.desserts.map((dessert) => {
        return <DynamicDessert key={dessert.name} dessert={dessert} />;
      })}
    </div>
  );
};

export default DesertList;

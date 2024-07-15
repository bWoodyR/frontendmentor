import { useContext } from "react";
import Desert from "./Dessert";
import { DessertContext } from "../Context/DessertContext";

const DesertList = () => {
  const { state } = useContext(DessertContext);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {state.desserts.map((dessert) => {
        return <Desert key={dessert.name} dessert={dessert} />;
      })}
    </div>
  );
};

export default DesertList;

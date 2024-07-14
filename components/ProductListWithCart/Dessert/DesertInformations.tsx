import React from "react";

type Props = {
  category: string;
  name: string;
  price: number;
};

const DesertInformations = ({ category, name, price }: Props) => {
  return (
    <div className="mt-8">
      <p className="text-rose300 text-sm">{category}</p>
      <h2 className="text-rose900 font-semibold">{name}</h2>
      <p className="text-dark-red font-semibold">${price.toFixed(2)}</p>
    </div>
  );
};

export default DesertInformations;

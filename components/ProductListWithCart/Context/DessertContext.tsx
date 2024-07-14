"use client";

import React, { ReactNode, useReducer } from "react";
import dessertReducer, { Action, State } from "./DessertReducer";
import dessertsData from "../Dessert/desserts.json";

type DesertContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initState = {
  desserts: dessertsData.map((dessert) => ({ ...dessert, isSelected: false, count: 0 })),
  order: [],
};

const DessertContext = React.createContext<DesertContextType>({
  state: initState,
  dispatch: () => {
    /*  empty */
  },
});

const DessertProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(dessertReducer, initState);

  return <DessertContext.Provider value={{ state, dispatch }}>{children}</DessertContext.Provider>;
};

export { DessertContext, DessertProvider };

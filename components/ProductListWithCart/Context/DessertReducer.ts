import { ActionToDo, Dessert } from "@/types/DessertsType";

export enum DESSERT_ACTION_TYPES {
  HANDLE_ITEM_TO_ORDER = "ADD_TO_ORDER",
}

export type State = {
  desserts: Dessert[];
  order: Dessert[] | [];
};

export type Action = {
  type: DESSERT_ACTION_TYPES;
  payload: {
    dessert: Dessert;
    actionToDo: ActionToDo;
  };
};

const dessertReducer = (state: State, action: Action) => {
  switch (action.type) {
    case DESSERT_ACTION_TYPES.HANDLE_ITEM_TO_ORDER: {
      const dessert = state.desserts.find((dessert) => dessert.name === action.payload.dessert.name) as Dessert;
      if (!dessert) return { ...state };
      const updatedDessert = updateDessert(dessert, action.payload.actionToDo);
      const updatedListOfDesserts = state.desserts.map((dessert) => {
        if (dessert.name === updatedDessert.name) {
          return updatedDessert;
        } else return dessert;
      });
      return { ...state, desserts: updatedListOfDesserts, order: updatedListOfDesserts.filter((dessert) => dessert.isSelected) };
    }
    default:
      return { ...state };
  }
};

export default dessertReducer;

const updateDessert = (dessert: Dessert, actionToDo: ActionToDo) => {
  switch (actionToDo) {
    case "add":
      return { ...dessert, isSelected: true, count: dessert.count + 1 };
    case "increment":
      return { ...dessert, count: dessert.count + 1 };
    case "decrement": {
      const willRemoveDessertFromOrder = dessert.count - 1 === 0;
      const updatedDessert = willRemoveDessertFromOrder ? { ...dessert, isSelected: false, count: dessert.count - 1 } : { ...dessert, count: dessert.count - 1 };
      return updatedDessert;
    }
    case "remove": {
      return { ...dessert, isSelected: false, count: 0 };
    }
  }
};

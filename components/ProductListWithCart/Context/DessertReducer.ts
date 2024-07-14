import { ActionToDo, Dessert } from "@/types/DessertsType";

export enum DESSERT_ACTION_TYPES {
  HANDLE_ITEM_TO_ORDER = "ADD_TO_ORDER",
  CLEAR_ORDER = "CLEAR_ORDER",
  SHOW_ORDER_CONFIRM_DIALOG = "SHOW_ORDER_CONFIRM_DIALOG",
}

export type State = {
  desserts: Dessert[];
  order: Dessert[] | [];
  showOrderConfirmationDialog: boolean;
};

export type Action = {
  type: DESSERT_ACTION_TYPES;
  payload: {
    dessert?: Dessert;
    actionToDo?: ActionToDo;
    showOrderConfirmationDialog?: boolean;
  };
};

const dessertReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case DESSERT_ACTION_TYPES.HANDLE_ITEM_TO_ORDER: {
      const dessertName = action.payload.dessert?.name;
      const actionToDo = action.payload.actionToDo as ActionToDo;
      const dessert = state.desserts.find((dessert) => dessert.name === dessertName) as Dessert;
      if (!dessert) return { ...state };
      const updatedDessert = updateDessert(dessert, actionToDo);
      const updatedListOfDesserts = state.desserts.map((dessert) => {
        if (dessert.name === updatedDessert.name) {
          return updatedDessert;
        } else return dessert;
      });
      return { ...state, desserts: updatedListOfDesserts, order: updatedListOfDesserts.filter((dessert) => dessert.isSelected) };
    }
    case DESSERT_ACTION_TYPES.CLEAR_ORDER: {
      const clearedOrders: [] = [];
      const updatedDesserts = state.desserts.map((dessert) => ({ ...dessert, isSelected: false, count: 0 }));
      return { ...state, desserts: updatedDesserts, order: clearedOrders };
    }
    case DESSERT_ACTION_TYPES.SHOW_ORDER_CONFIRM_DIALOG:
      return { ...state, showOrderConfirmationDialog: action.payload.showOrderConfirmationDialog || false };
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

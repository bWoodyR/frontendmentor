export type ActionToDo = "add" | "increment" | "decrement" | "remove";

export type Dessert = {
  name: string;
  category: string;
  price: number;
  image: DessertImage;
  isSelected: boolean;
  count: number;
};

type DessertImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
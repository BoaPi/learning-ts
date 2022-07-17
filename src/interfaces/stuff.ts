import { Hotdog, Burger, BlueCheese } from "../types/food";

interface Backpack {
  food: Hotdog | Burger | BlueCheese;
  hasRainCover: boolean;
}

export { Backpack };

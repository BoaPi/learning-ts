import { Hotdog, Burger, BlueCheese } from '../types/food.ts';

interface Backpack {
  food: Hotdog | Burger | BlueCheese;
  hasRainCover: boolean;
}

export type { Backpack };

import { Hotdog, Burger, BlueCheese } from "types/food"

type Backpack = {
  food: Hotdog | Burger | BlueCheese
  hasRainCover: Boolean
}

export {
  Backpack,
}
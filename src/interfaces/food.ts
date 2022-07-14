/**
 * Food interfaces
 */

/**
 * @name Food
 * @description generic food type 
 * @property needsFridge - boolean to describe, if the related food needs a fridge
 */
interface Food {
  needsFridge: boolean;
}

interface Cheese {
  flavor: string;
}

interface BlueCheese extends Food, Cheese {}

export {
  Food,
  Cheese,
  BlueCheese,
}
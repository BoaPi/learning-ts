/**
 * Food interfaces
 */

/**
 * @name Food
 * @description generic food type
 * @property {boolean}  needsFridge boolean to describe, if the related food needs a fridge
 */
interface Food {
  needsFridge: boolean;
}

interface Cheese {
  flavor: string;
}

interface BlueCheese extends Food, Cheese {}

export type { Food, Cheese, BlueCheese };

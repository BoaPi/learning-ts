"use strict";

// intersection types
type Food = {
  needsFridge: Boolean;
};

type Cheese = {
  flavor: String;
};

type BlueCheese = Food & Cheese;

const intersectionLesson = (): String => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: "strong",
  };

  return newCheese.flavor;
};

export { intersectionLesson, Food, Cheese, BlueCheese };

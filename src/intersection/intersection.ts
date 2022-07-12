"use strict";

// intersection types
type Food = {
  needsFridge: boolean;
};

type Cheese = {
  flavor: string;
};

type BlueCheese = Food & Cheese;

const intersectionLesson = (): string => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: "strong",
  };

  return newCheese.flavor;
};

export { intersectionLesson };

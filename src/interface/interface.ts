"use strict";

// union interface
interface Food {
  needsFridge: boolean;
}

interface Cheese {
  flavor: string;
}

interface BlueCheese extends Food, Cheese {}

const interfaceLesson = (): string => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: "strong",
  };

  return newCheese.flavor
};

export { interfaceLesson };

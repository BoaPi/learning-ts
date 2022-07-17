"use strict";

import { BlueCheese } from "interfaces/food";

const interfaceLesson = (): string => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: "strong",
  };

  return newCheese.flavor;
};

export { interfaceLesson };

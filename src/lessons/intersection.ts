"use strict";

import { BlueCheese } from "types/food";

const intersectionLesson = (): string => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: "strong",
  };

  return newCheese.flavor;
};

export { intersectionLesson };

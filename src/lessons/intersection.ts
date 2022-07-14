"use strict";

import { BlueCheese } from "types/food";

const intersectionLesson = (): String => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: "strong",
  };

  return newCheese.flavor;
};

export { intersectionLesson };

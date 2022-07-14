"use strict"

import { Burger, Hotdog } from "types/food";
import { Backpack } from "types/stuff";

const MyHotdog: Hotdog = {
  needsFridge: false,
  backedOver: true,
}

const MyBurger: Burger = {
  needsFridge: true,
  pattyCount: 3,
  cheese: {
    flavor: "mild"
  }
}

const MyBackpack: Backpack = {
  food: MyBurger,
  hasRainCover: true,
}

const OtherBackpack: Backpack = {
  food: MyHotdog,
  hasRainCover: false
}

const typesLesson = (): String => {
  
  
  return ""
}

export { typesLesson }
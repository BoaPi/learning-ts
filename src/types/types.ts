"use strict"

import { Food, Cheese, BlueCheese } from "../intersection/intersection";

type Hotdog = Food & {
  backedOver: Boolean
}

type Burger = Food & {
  pattyCount: Number
  cheese: Cheese
}

type Backpack = {
  food: Hotdog | Burger | BlueCheese
  hasRainCover: Boolean
}

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
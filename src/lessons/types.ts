import { Burger, Hotdog } from '../types/food.ts';
import { Backpack } from '../interfaces/stuff.ts';

const MyHotdog: Hotdog = {
  needsFridge: false,
  backedOver: true,
};

const MyBurger: Burger = {
  needsFridge: true,
  pattyCount: 3,
  cheese: {
    flavor: 'mild',
  },
};

const MyBackpack: Backpack = {
  food: MyBurger,
  hasRainCover: true,
};

const OtherBackpack: Backpack = {
  food: MyHotdog,
  hasRainCover: false,
};

const typesLesson = (): [string, string] => {
  const myStuff = `MyBackpack - RainCover: ${MyBackpack.hasRainCover}\n`;
  const otherStuff = `MyBackpack - RainCover: ${OtherBackpack.hasRainCover}`;

  return ['types', `${myStuff}${otherStuff}`];
};

export { typesLesson };

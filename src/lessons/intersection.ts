import { Lesson } from '../main.ts';
import { BlueCheese } from '../types/food.ts';

const intersectionLesson = (): [string, Lesson] => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: 'strong',
  };

  return ['intersection', Promise.resolve(newCheese.flavor)];
};

export { intersectionLesson };

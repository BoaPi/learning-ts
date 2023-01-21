import { BlueCheese } from '../types/food.ts';

const intersectionLesson = (): [string, string] => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: 'strong',
  };

  return ['intersection', newCheese.flavor];
};

export { intersectionLesson };

import { BlueCheese } from '../interfaces/food.ts';

const interfaceLesson = (): [string, string] => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: 'strong',
  };

  return ['interface', newCheese.flavor];
};

export { interfaceLesson };

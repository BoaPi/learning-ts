import { BlueCheese } from 'interfaces/food';

const interfaceLesson = (): [string, string] => {
  const newCheese: BlueCheese = {
    needsFridge: true,
    flavor: 'strong',
  };

  return ['interface', newCheese.flavor];
};

export { interfaceLesson };

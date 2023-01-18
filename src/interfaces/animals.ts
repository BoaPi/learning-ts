/**
 * animal interfaces
 */

/**
 * @name Animal
 * @property {string}     type    describes the type of the animal
 * @property {number}     legs    amount of legs
 */

interface Animal {
  type: 'dog' | 'cat';
  legs: number;
}

/**
 * @name Dog
 * @property {string}   name    name of the dog
 * @property {string}   breed   breed of the dog
 * @property {function} bark    sound of the dog
 */

interface Dog extends Animal {
  name: string;
  breed: string;
  bark: () => string;
}

/**
 * @name Cat
 * @property {string}   name    name of the cat
 * @property {string}   breed   breed of the cat
 * @property {function} meow    sound of the cat
 */

interface Cat extends Animal {
  name: string;
  breed: string;
  meow: () => string;
}

export type { Dog, Cat };

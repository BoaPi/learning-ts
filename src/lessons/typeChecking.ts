"use strict";

import { Dog, Cat } from "interfaces/animals";

const typeCheckingLesson = (): string => {
  const dog: Dog = {
    type: "dog",
    name: "Rutherford",
    breed: "Jack Russel",
    legs: 4,
    bark: () => "woof",
  };

  const cat: Cat = {
    type: "cat",
    name: "Sith",
    breed: "England Cat",
    legs: 4,
    meow: () => "meeeooooooowwwww",
  };

  const pets: (Dog | Cat)[] = [dog, cat];

  let petsVoices: string = "";

  pets.forEach((pet): void => {
    petsVoices = `${petsVoices}${pet.type} with the name ${pet.name} makes`;

    if ("bark" in pet) {
      petsVoices = `${petsVoices} ${pet.bark()}\n`
    } else {
      petsVoices = `${petsVoices} ${pet.meow()}\n`
    }
  });

  return petsVoices;
};

export { typeCheckingLesson };

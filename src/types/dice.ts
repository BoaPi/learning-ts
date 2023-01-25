/**
 * type related to different dice
 */
enum DiceTypes {
  D3 = 3,
  D6 = 6,
  D12 = 12,
  D20 = 20,
}

type SingleDice = {
  type: DiceTypes;
  value: number;
  throwDice: () => number;
};

type MultipleDice = {
  dice: SingleDice[];
  throwDice: () => SingleDice[];
};

class Dice implements SingleDice {
  type: DiceTypes;
  value: number;

  constructor(type: DiceTypes) {
    this.type = type;
    this.value = NaN;
  }

  public throwDice() {
    this.value = Math.floor(Math.random() * ((this.type + 1) - 1) + 1);
    return this.value;
  }
}

class DiceGroup implements MultipleDice {
  dice: SingleDice[] = [];

  constructor(type: DiceTypes, count: number) {
    for (let index = 0; index < count; index++) {
      this.dice[index] = new Dice(type);
    }
  }

  public throwDice() {
    this.dice.forEach((dice) => {
      dice.throwDice();
    });

    return this.dice;
  }
}

export { Dice, DiceGroup };
export { DiceTypes };

// intersection types
type Food = {
  needsFridge: boolean;
};

type Cheese = {
  flavor: string;
};

type BlueCheese = Food & Cheese;

type Hotdog = Food & {
  backedOver: boolean;
};

type Burger = Food & {
  pattyCount: number;
  cheese: Cheese;
};

export { BlueCheese, Burger, Cheese, Food, Hotdog };

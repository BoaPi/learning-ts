// intersection types
type Food = {
  needsFridge: Boolean;
};

type Cheese = {
  flavor: String;
};

type BlueCheese = Food & Cheese;

type Hotdog = Food & {
  backedOver: Boolean
}

type Burger = Food & {
  pattyCount: Number
  cheese: Cheese
}

export {
  Food,
  Cheese,
  BlueCheese,
  Burger,
  Hotdog,
}
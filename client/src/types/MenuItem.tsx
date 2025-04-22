type SizeOption = {
  size: 'small' | 'medium' | 'family';
  price: number;
};

type PizzaSizeOption = {
  size: 'bambino' | 'small' | 'medium' | 'large' | 'extra-large';
  price: number;
};

interface MenuItemBaseCommon {
  _id: string;
  name: string;
  description?: string;
  icon?: string;
  price?: number;
  image?: string;
  tags?: string[];
  allergens?: string[];
  isCombo?: boolean;
  isExtra?: boolean;
  isAvailable?: boolean;
  isOnSpecial?: boolean;
  isRecommended?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  isLimited?: boolean;
  isSeasonal?: boolean;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isDairyFree?: boolean;
  isNutFree?: boolean;
  isHalal?: boolean;
  isKosher?: boolean;
  isSpicy?: boolean;
}

export type RegularItem = MenuItemBaseCommon & {
  type: 'regular';
  sizes: SizeOption[];
};

export type PizzaItem = MenuItemBaseCommon & {
  type: 'pizza';
  sizes: PizzaSizeOption[];
};

export type ComboItem = MenuItemBaseCommon & {
  type: 'combo';
  includedItems: string[];
};

export type FastFoodItem = MenuItemBaseCommon & {
  type: 'fast-food';
}

export type FryItem = MenuItemBaseCommon & {
  type: 'fries';
  sizes: SizeOption[];
}

export type PoutineItem = MenuItemBaseCommon & {
  type: 'poutine';
  sizes: SizeOption[];
}

export type PlateItem = MenuItemBaseCommon & {
  type: 'plate';
}

export type SandwichItem = MenuItemBaseCommon & {
  type: 'sandwich';
}

export type SubItem = MenuItemBaseCommon & {
  type: 'sub';
  sizes: '7"' | '10"' | '14"';
}

export type ChickenItem = MenuItemBaseCommon & {
  type: 'chicken';
}

export type MenuItem = RegularItem | PizzaItem | ComboItem | FastFoodItem | FryItem | PoutineItem | PlateItem | SandwichItem | SubItem | ChickenItem;

type SizeOption = {
  size: 'small' | 'medium' | 'large' | 'family';
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

export type MenuItem = RegularItem | PizzaItem | ComboItem;

type SizeOption = {
  size: 'bambino' | 'small' | 'medium' | 'large' | 'extra-large';
  price: number;
};

export interface MenuItemBase {
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

export interface PizzaItem extends MenuItemBase {
  sizes: SizeOption[];
}

export interface ComboItem extends MenuItemBase {
  includedItems: string[];
}

export type MenuItem = MenuItem | PizzaItem | ComboItem;
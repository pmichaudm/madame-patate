import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IMenuItem {
  _id: string;
  type: 'regular' | 'pizza' | 'combo';
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

  sizes?: { size: string; price: number }[];
  includedItems?: string[];
}

const MenuItemSchema = new Schema<IMenuItem>({
  _id: { type: Schema.Types.String, default: uuidv4 },
  type: { type: String, enum: ['regular', 'pizza', 'combo'], required: true },
  name: { type: String, required: true },
  description: String,
  icon: String,
  price: Number,
  image: String,
  tags: [{ type: String }],
  allergens: [{ type: String }],
  isCombo: Boolean,

  isAvailable: Boolean,
  isOnSpecial: Boolean,
  isRecommended: Boolean,
  isNew: Boolean,
  isPopular: Boolean,
  isLimited: Boolean,
  isSeasonal: Boolean,
  isVegan: Boolean,
  isVegetarian: Boolean,
  isGlutenFree: Boolean,
  isDairyFree: Boolean,
  isNutFree: Boolean,
  isHalal: Boolean,
  isKosher: Boolean,
  isSpicy: Boolean,

  sizes: [{
    size: {
      type: String,
      enum: ['bambino', 'small', 'medium', 'large', 'extra-large', 'family']
    },
    price: Number
  }],
  includedItems: [{ type: String }]
});

export const MenuItem = mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);

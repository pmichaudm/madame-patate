import mongoose, {Schema} from "mongoose";
import {v4 as uuidv4} from "uuid";

export interface IMenuItem extends Document {
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
  sizes?: { size: string; price: number }[];
  includedItems?: string[];
}

const MenuItemSchema = new Schema<IMenuItem>({
  _id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  description: { type: String },
  icon: { type: String },
  price: { type: Number },
  image: { type: String },
  tags: [{ type: String }],
  allergens: [{ type: String }],
  isCombo: { type: Boolean },

  isAvailable: { type: Boolean },
  isOnSpecial: { type: Boolean },
  isRecommended: { type: Boolean },
  isNew: { type: Boolean },
  isPopular: { type: Boolean },
  isLimited: { type: Boolean },
  isSeasonal: { type: Boolean },
  isVegan: { type: Boolean },
  isVegetarian: { type: Boolean },
  isGlutenFree: { type: Boolean },
  isDairyFree: { type: Boolean },
  isNutFree: { type: Boolean },
  isHalal: { type: Boolean },
  isKosher: { type: Boolean },
  isSpicy: { type: Boolean },

  sizes: [{
    size: {
      type: String,
      enum: ['bambino', 'small', 'medium', 'large', 'extra-large']
    },
    price: Number
  }],
  includedItems: [{ type: String }]
});

export const MenuItem = mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);
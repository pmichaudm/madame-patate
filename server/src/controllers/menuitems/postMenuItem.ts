import {Request, Response} from 'express';
import {MenuItem} from "../../schemas/MenuItem";

export const postMenuItemController = async function (request: Request, response: Response): Promise<void> {
  try {
    const {
      _id,
      type,
      name,
      description,
      price,
      image,
      tags,
      allergens,
      isExtra,
      isCombo,
      isAvailable,
      isOnSpecial,
      isRecommended,
      isNew,
      isPopular,
      isLimited,
      isSeasonal,
      isVegan,
      isVegetarian,
      isGlutenFree,
      isDairyFree,
      isNutFree,
      isHalal,
      isKosher,
      isSpicy,
      sizes,
      includedItems,
    } = request.body;

    if (!_id || !type || !name) {
      response.status(400).json({message: 'Menu item data is required'});
      return;
    }
    const newMenuItem = new MenuItem(
      {
        _id,
        type,
        name,
        ...(description && {description}),
        ...(price && {price}),
        ...(image && {image}),
        ...(tags && {tags}),
        ...(allergens && {allergens}),
        ...(isExtra && {isExtra}),
        ...(isCombo && {isCombo}),
        ...(isAvailable && {isAvailable}),
        ...(isOnSpecial && {isOnSpecial}),
        ...(isRecommended && {isRecommended}),
        ...(isNew && {isNew}),
        ...(isPopular && {isPopular}),
        ...(isLimited && {isLimited}),
        ...(isSeasonal && {isSeasonal}),
        ...(isVegan && {isVegan}),
        ...(isVegetarian && {isVegetarian}),
        ...(isGlutenFree && {isGlutenFree}),
        ...(isDairyFree && {isDairyFree}),
        ...(isNutFree && {isNutFree}),
        ...(isHalal && {isHalal}),
        ...(isKosher && {isKosher}),
        ...(isSpicy && {isSpicy}),
        ...(sizes && {sizes}),
        ...(includedItems && {includedItems}),
      }
    );
    await newMenuItem.save();
    response.status(201).json(newMenuItem);
  } catch (error) {
    response.status(500).json({error: error});
  }
}
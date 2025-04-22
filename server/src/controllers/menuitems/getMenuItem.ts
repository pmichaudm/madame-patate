import {Request, Response} from 'express';
import {MenuItem} from "../../schemas/MenuItem";

export const getMenuItemController = async function (request: Request, response: Response): Promise<void> {
  try {
    const menuItemId = request.params.menuItemId;
    if (!menuItemId) {
      response.status(400).json({message: 'Menu item ID is required'});
      return;
    }
    const menuItem = await MenuItem.findById(menuItemId);
    if (!menuItem) {
      response.status(404).json({message: 'Menu item not found'});
      return;
    }
    response.status(200).json(menuItem);
  } catch (error) {
    response.status(500).json({error: error});
  }
};
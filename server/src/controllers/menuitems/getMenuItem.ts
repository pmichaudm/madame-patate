import {Request, Response} from 'express';
import {MenuItem} from '../../models/menuitem';
import {MenuItemModel} from '../../models/menuitem';

export const getMenuItemController = async function (request: Request, response: Response): Promise<void> {
  try {
    const menuItemId = request.params.menuItemId;
    const menuItem = await MenuItemModel.findById(menuItemId).exec();
    if (!menuItem) {
      response.status(404).json({message: 'Menu item not found'});
      return;
    }
    response.status(200).json(menuItem);
  } catch (error) {
    response.status(500).json({error: error});
  }
};
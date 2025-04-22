import {Request, Response} from "express";
import {MenuItem} from "../../schemas/MenuItem";


export const getAllMenuItemsController = async function (request: Request, response: Response) {
  try {
    const menuItems = await MenuItem.find();
    if (!menuItems) {
      response.status(404).json({message: 'No menu items found'});
      return;
    }
    response.status(200).json(menuItems);
  } catch (error) {
    response.status(500).json({error: error});
  }
}
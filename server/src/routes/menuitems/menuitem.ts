import {Router} from "express";

const menuItemRouter = Router();
menuItemRouter.get('/:menuItemId', getMenuItemController);

export default menuItemRouter;
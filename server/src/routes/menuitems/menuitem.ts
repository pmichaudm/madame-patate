import {Router} from "express";
import {getMenuItemController} from "../../controllers/menuitems/getMenuItem";

const menuItemRouter = Router();
menuItemRouter.get('/:menuItemId', getMenuItemController);

export default menuItemRouter;
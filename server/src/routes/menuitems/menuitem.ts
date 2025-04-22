import {Router} from "express";
import {getMenuItemController} from "../../controllers/menuitems/getMenuItem";
import {getAllMenuItemsController} from "../../controllers/menuitems/getAllMenuItems";

const menuItemRouter = Router();
menuItemRouter.get('/:menuItemId', getMenuItemController);
menuItemRouter.get('/all', getAllMenuItemsController);
menuItemRouter.get('/combos', getAllMenuItemsController);
menuItemRouter.get('/pizzas', getAllMenuItemsController);
menuItemRouter.get('/regular', getAllMenuItemsController);


export default menuItemRouter;
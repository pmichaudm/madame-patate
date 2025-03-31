import { Router } from 'express';
import { getRootController } from '../../controllers/root/root';

const rootRouter = Router();
rootRouter.get('/', getRootController);

export default rootRouter;

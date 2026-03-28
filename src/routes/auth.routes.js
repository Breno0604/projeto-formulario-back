import { Router } from 'express';
import { registerController, loginController, logoutController } from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', authenticate, logoutController);

export default router;

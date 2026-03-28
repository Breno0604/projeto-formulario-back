import { Router } from 'express';
import { submitForm, listForms } from '../controllers/form.controller.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.post('/', authenticate, submitForm);
router.get('/', authenticate, listForms);

export default router;

import express from 'express'
import { loginController, signupController } from './controller.js';

const router = express.Router();

router.get('/login', loginController);
router.get('/signup', signupController)

export default router
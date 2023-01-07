import express from 'express';
const router = express.Router();
import { authUser, registerUser } from '../controllers/userController.js';

router.post('/signup', registerUser);
router.post('/signin', authUser);

export default router;

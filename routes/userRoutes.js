import express from 'express';
const router = express.Router();
import { authUser, getUserByEmail, registerUser } from '../controllers/userController.js';

router.post('/signup', registerUser);
router.post('/signin', authUser);
router.post('/getUser', getUserByEmail);

export default router;

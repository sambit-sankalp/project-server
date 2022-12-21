import express from 'express';
import { createGame, getGamesByEmail, updateGameByID } from '../controllers/gameController.js';
const router = express.Router();

router.post('/create', createGame);
router.post('/getGames', getGamesByEmail);
router.put('/update/:id', updateGameByID);

export default router;
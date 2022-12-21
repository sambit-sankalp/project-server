import express from 'express';
import {
  createGame,
  getGameByID,
  getGamesByEmail,
  updateGameByID,
} from '../controllers/gameController.js';
const router = express.Router();

router.get('/:id', getGameByID);
router.post('/create', createGame);
router.post('/getGames', getGamesByEmail);
router.put('/update/:id', updateGameByID);

export default router;

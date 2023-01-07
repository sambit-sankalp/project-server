import Game from '../models/gameModel.js';
import User from '../models/userModel.js';

export const createGame = async (req, res) => {
  const {
    stepnumber,
    history,
    xIsNext,
    isCompleted,
    playerEmail,
    createdByEmail,
  } = req.body;

  const existingGame = await Game.findOne({
    $or: [
      {
        $and: [
          { 'player.email': playerEmail },
          { 'createdBy.email': createdByEmail },
          { isCompleted: false },
        ],
      },
      {
        $and: [
          { 'player.email': createdByEmail },
          { 'createdBy.email': playerEmail },
          { isCompleted: false },
        ],
      },
    ],
  });

  if (existingGame) {
    res.status(201);
    res.send({ existing: true, game: existingGame });
  } else {
    const creator = await User.findOne({ email: createdByEmail });
    const playerData = await User.findOne({ email: playerEmail });

    if (!creator || !playerData) {
      res.status(400);
      res.send(
        'Invalid Email Address. Please ask your friend to register first.'
      );
    }

    const game = await Game.create({
      stepnumber,
      history,
      xIsNext,
      isCompleted,
      player: playerData,
      createdBy: creator,
    });

    if (game) {
      res.status(201).json({ existing: false, game: game });
    } else {
      res.status(404);
      res.send('Error creating game');
    }
  }
};

export const getGamesByEmail = async (req, res) => {
  const { email } = req.body;
  const games = await Game.find({
    $or: [{ 'createdBy.email': email }, { 'player.email': email }],
  }).sort([['updatedAt', -1]]);

  res.json(games);
};

export const updateGameByID = async (req, res) => {
  const { id } = req.params;
  const { stepnumber, history, xIsNext, winner, isCompleted } = req.body;

  const game = await Game.findById(id);

  if (game) {
    game.stepnumber = stepnumber;
    game.history = history;
    game.xIsNext = xIsNext;
    game.winner = winner;
    game.isCompleted = isCompleted;
    game.player = game.player;
    game.createdBy = game.createdBy;

    const updatedGame = await game.save();

    res.json(updatedGame);
  } else {
    res.status(404);
    res.send('Game not found');
  }
};

export const getGameByID = async (req, res) => {
  const { id } = req.params;

  const game = await Game.findById(id);

  if (game) {
    res.json(game);
  } else {
    res.status(404);
    res.send('Game not found');
  }
};
